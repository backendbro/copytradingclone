const uploadSingleFile = require('../config/cloudinary')
const UserModel = require('../models/UserModel')
const Verified = require('../models/Verified')
class VerifyIdentityService {
    
    async verifyIDLoggedInUser (req,res) {
       if(!req.files){
        res.status(404).json({message:"UPLOAD AN IMAGE"})
       }
       const userId= req.user.id
       const {frontImage, backImage} = req.files 
       
       try {
            const frontImagePath = frontImage[0].path 
            const frontImageUpload = await uploadSingleFile(frontImagePath)
            const frontImageUrl = frontImageUpload.url

            const backImagePath = backImage[0].path
            const backImageUpload  = await uploadSingleFile(backImagePath)
            const backImageUrl = backImageUpload.url
            

            const user = await UserModel.findByIdAndUpdate(userId, { frontImageUrl, backImageUrl}, {new:true})
            res.status(200).json({message:"IMAGE UPLOADED", user})
       } catch (error) {
        return
       }

    }

    async sendAddressBill(req,res){
        if(!req.file){
            res.status(404).json({message:"UPLOAD AN IMAGE"})
           }
           const userId= req.user.id
           const addressBill = req.file
           
           try {
                const addressBillPath = addressBill.path 
                const addressBillUpload = await uploadSingleFile(addressBillPath)
                const addressBillUrl = addressBillUpload.url            
    
                const user = await UserModel.findByIdAndUpdate(userId, { addressBillPic:addressBillUrl}, {new:true})
                res.status(200).json({message:"IMAGE UPLOADED", user})
           } catch (error) {
            return
           }
    }

    async verifiedAuth(req,res) {
        const id = req.params
        const verifiedAuths = await Verified.find(id)
        res.status(200).json({message:"SINGLE USERS VERIFIABLES", verifiedAuths})
    }
}

module.exports = new VerifyIdentityService()