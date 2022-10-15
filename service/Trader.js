const UserModel = require('../models/UserModel')
const Trader = require('../models/Trader')
const uploadSingleFile = require('../config/cloudinary')

class TraderService {

    async getTraders (req,res) {
         const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
        
        if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }

        const traders = await Trader.find()
        res.status(200).json({traders})
    }

    async getTrader(req,res) {
        const userId = req.user.id
        const {id} = req.params
         let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }

        if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }

        const trader = await Trader.findById(id)
        res.status(200).json({trader})
    }

    async createTrader(req,res){
         const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }

        if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }
    
        const trader = await Trader.create(req.body)
        res.status(200).json({message:"TRADER CREATED", trader})
 
    }


   async searchTrader(req,res) {    
        const userId = req.user.id

        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
    
        if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }
    
       let queryString = req.query;
       if(req.query.name !== undefined) { 
           queryString = {name: { $regex: req.query.name, $options: "i" }}
           }

        const searchedUser = await Trader.find(queryString)
       res.status(200).json({searchedUser})
    }

    async updateTrader(req,res) {
         const userId = req.user.id
         const {id} = req.params
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
    
        if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }

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


    async getCopiers (req,res) {
         const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
        
        const copiers = await Copiers.find()
        res.status(200).json({message:"COPIERS", copiers})
    }

    async declineCopiers (req,res) {
        const userId = req.user.id
       let user = await UserModel.findById(userId)
       if(!user){
           return res.status(404).json({user})
       }
       
    res.status(200).json({message:"COPYING DECLINED"})
       
   }

}

module.exports = new TraderService()