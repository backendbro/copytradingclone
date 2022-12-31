


const Trader = require('../models/Trader')
const uploadSingleFile = require('../config/cloudinary')

class TraderService {

    async getTraders (req,res) {
        const traders = await Trader.find()
        res.status(200).json({traders})
    }

    async getTrader(req,res) {
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