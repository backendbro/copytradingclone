const UserModel = require('../models/UserModel')
const sendEmail = require('../ultis/emailer')
const uploadSingleFile = require('../config/cloudinary')

class AccountService { 

   async requestToken(req,res){
        const {email} = req.body
        const user = await UserModel.findOne({email})
        if(!user){
            return res.status(404).json({message:'ENTER YOUR SIGN IN EMAIL'})
        }

        const firstName = user.firstName
        const pin = user.send2FACode()
        await user.save()
        await sendEmail(email, 'Update Email CopyTradingOptions', { firstName, pin });

        res.status(200).json({message: "TOKEN SENT!"})
    }

    async UpdateEmail(req,res){

        const {email_token, email} = req.body 

        // Confirm email_token
        const user = await UserModel.findOne({
            FACode:email_token,
            FACodeExp:{ $gt: Date.now() }
        })

        const checkEmail = await UserModel.findOne({email})
        if(checkEmail){
            return res.status(404).json({message:'EMAIL ALREADY IN USE'})
        }

        if(!user){
            return res.status(200).json({message:"TOKEN EXPIRED"})
        }

        user.FACode = undefined
        user.FACodeExp = undefined
        user.email = email 
       await user.save()

       res.status(200).json({message:'EMAIL UPDATED', user})
    }

    async UpdatePhoto(req,res){
        if(!req.file){
            return res.status(404).json({message: "UPLOAD AN IMAGE"})
        }
        const userId = req.user.id
        const profilePicture = req.file
        try {
            const profilePicturePath = profilePicture.path 
            const profilePictureUpload = await uploadSingleFile(profilePicturePath)
            const profilePictureUploadUrl = profilePictureUpload.url


            const user = await UserModel.findByIdAndUpdate(userId, { profilePicture:profilePictureUploadUrl}, {new:true} )
            res.status(200).json({message:"IMAGE UPLOADED", user})
       } catch (error) {
        console.log(error)
       }

       
    }

    async myProfile(req,res) {
        const userId = req.user.id 
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
        res.status(200).json({user})
    }

    async updateAddress(req,res) {
    
        const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }

       user = await UserModel.findByIdAndUpdate(userId,  req.body, {new:true} )
       res.status(200).json({message:"IMAGE UPLOADED", user})

    }

   

}

module.exports = new AccountService()