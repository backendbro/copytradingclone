// const api = {
//     getTrader: {
//         URL: https://copytradingoptions1.herokuapp.com/api/trader/get-all
//         METHOD:GET
//     }

//     getTraders: {
//         URL: https://copytradingoptions1.herokuapp.com/api/trader/get-one
//         METHOD:GET
//         DATA:{
//             "id":"636193473375a712cd6c4633"
//         }
//     }

//     createTrader: {
//         URL:https://copytradingoptions1.herokuapp.com/api/trader
//         METHOD:POST
//         DATA:{
//             "name":"Fuck your baby nigga",
//             "winsOffSet":1000,
//             "lossOffSet":20,
//             "profitShare":70,
//             "type":"Human",
//             "description":"I am a winner bro, count me in my guy"
//         }
//     }

//     updateTrader: {
//         Send this as a formdata.
//         Just in case a user selects an image append the image with name = traderPhoto
//         Also append the id=635937c042e88884a84cf792 with the formdata

//         URL:https://copytradingoptions1.herokuapp.com/api/trader/
//         METHOD:PUT
        
//     }

//     searchTrader: {
//         URL: https://copytradingoptions1.herokuapp.com/api/trader/search/searchString?name=${keyword}
//         METHOD:GET
//     }

//     deleteTrader:{
//         URL:,
//         METHOD:DELTE
//     }
// }



const Trader = require('../models/Trader')
const uploadSingleFile = require('../config/cloudinary')

class TraderService {

    async getTrader (req,res) {
        const traders = await Trader.find()
        res.status(200).json({traders})
    }

    async getTraders(req,res) {
        const {id} = req.body
        const trader = await Trader.findById(id)
        res.status(200).json({trader})
    }

    async createTrader(req,res){
        const trader = await Trader.create(req.body)
        res.status(200).json({message:"TRADER CREATED", trader})
    }


   async searchTrader(req,res) {    
       let queryString = req.query;
       if(req.query.name !== undefined) { 
           queryString = {name: { $regex: req.query.name, $options: "i" }}
           }

        const searchedUser = await Trader.find(queryString)
       res.status(200).json({searchedUser})
    }

    async updateTrader(req,res) {
        const {id} = req.body

       const traderExists = await Trader.findById(id)
       if(!traderExists){
           return res.status(404).json({message:"TRADER DOES NOT EXIST"})
       }
       
       let traderPhoto;
       let traderPhotoUploadUrl;
       if(req.file){
        traderPhoto = req.file
        }
       
        try {
            const traderPhotoPath = traderPhoto.path 
            const traderPhotoUpload = await uploadSingleFile(traderPhotoPath)
            traderPhotoUploadUrl = traderPhotoUpload.url
       } catch (error) {
        console.log(error)
       }

       req.body.photo = traderPhotoUploadUrl 
       const trader = await Trader.findByIdAndUpdate(id, req.body, {new:true} )
       res.status(200).json({message:"TRADER PROFILE UPDATED", trader})
    
    }

   async deleteTrader(req,res) {
    const {id} = req.body
    const trader = await Trader.deleteOne({id})
    return res.status(200).json({message:"TRADER DELETED", trader})
   }

}

module.exports = new TraderService()