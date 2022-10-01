const mongoose = require('mongoose')
const UserModel = require("../models/UserModel")
const sendEmail = require('../ultis/emailer.js')
const {decryptJwt, comparePassword} = require('../ultis/jsonwebtoken')
const sdk = require('api')('@6thbridge/v1.0#5hw3619l2892ft6');

class UserService {
    async register (req,res) {
        const { email } = req.body

        const userExists = await UserModel.findOne({email})
        
       if(userExists){
            return res.status(404).json({message:'USER ALREADY EXIST'})
       }

        const user = await UserModel.create(req.body)
        const token = user.createToken(process.env.registerExpTime)

        const firstName = user.firstName
        const pin = user.send2FACode()
        await user.save()
        await sendEmail(email, 'Verify Email ProtradeLiveOptions', { firstName, pin });


        res.status(200).json({user, token})
    }


    async resendConfirmEmailLink (req,res) {
        const {email} = req.body
        const user = await UserModel.findOne({email})
        if(!user){
            return res.status(404).json({message:'ENTER YOUR SIGN IN EMAIL'})
        }

        const firstName = user.firstName
        const pin = user.send2FACode()
        await user.save()
        await sendEmail(email, 'Verify Email ProtradeLiveOptions', { firstName, pin });

        res.status(200).json({message: "EMAIL VERIFICATION MAIL SENT"})
    }

    async confirmPin(req,res) {
        const pin = req.body.pin 
        
        const user = await UserModel.findOne({
            FACode:pin,
            FACodeExp:{ $gt: Date.now() }
        })
        
        if(!user){
            return res.status(200).json({message:"TOKEN EXPIRED"})
        }

        user.FACode = undefined
        user.FACodeExp = undefined
        user.isVerifiedAcct = true  
        await user.save()
        res.status(200).json({message:'EMAIL VERIFIED'})
    }

    async login(req,res) {
        const {email, password} = req.body 
        const user = await UserModel.findOne({email}).select("+password")
        if(!user){
            return res.status(404).json({message:'USER ALREADY EXIST'})
        }
        

        // console.log(user)
        const isMatch = await comparePassword(password,user.password)   
        if(!isMatch){
            return res.status(400).json({message:"YOU HAVE ENTERED WRONG CREDENTIALS"})
        } 

        const pin = user.send2FACode()
        await user.save()
        const firstName = user.firstName
        await sendEmail(email, 'Enter code sent to email', { firstName, pin });
        
        res.status(200).json({message: 'ENTER PIN'})
    }

    async completeLogin(req,res){
        const {token} = req.body
        const user = await UserModel.findOne({
            FACode:token,
            FACodeExp:{ $gt: Date.now() }
        })
        
        if(!user){
            return res.status(200).json({message:"TOKEN EXPIRED"})
        }

        user.FACode = undefined
        user.FACodeExp = undefined
        await user.save()

        const loginToken = user.createToken(process.env.loginExpTime)
        res.status(200).json({message:"USER LOGGED IN", user, loginToken})
    }

    
    async forgotPassword (req,res) {
        const {email} = req.body 
        const user = await UserModel.findOne({email})
        
        if(!user){
            return res.status(404).json({message: 'WRONG CREDENTIAL'})
        }
        
        const firstName = user.firstName
        const pin = user.send2FACode()
        await user.save()

        await sendEmail(email, 'Reset Password', { firstName, pin });

        res.status(200).json({message:'RESET PASSWORD LINK SENT TO THIS EMAIL', pin})
   
    }

    async resetPassword (req,res) {
        const { password,pin } = req.body
        
        const user = await UserModel.findOne({
            FACode:pin,
            FACodeExp:{ $gt: Date.now() }
        }).select('+password')
        
        if(!user){
            return res.status(200).json({message:"TOKEN EXPIRED"})
        }

        user.FACode = undefined
        user.FACodeExp = undefined
        user.password = password
        await user.save()

        res.status(200).json({message:'PASSWORD CHANGED'})
    }

    async resetCurrentPassword(req,res){
        const {currentPassword, newPassword} = req.body 
        const {userId} = req.params
        const isValid = mongoose.Types.ObjectId.isValid(userId);
       
        if(!isValid){
            return res.status(404).json({message: 'INVALID OBJECT ID'})
        }
        
        const user = await UserModel.findById(userId).select('+password')
        
        if(!user){
            return res.status(404).json({message: 'USER DOES NOT EXIST'})
        }
       
        const isMatch = await comparePassword(currentPassword,user.password)
        if(!isMatch){
            return res.status(404).json({message: 'INCORRECT PASSWORD'})
        }

        user.password = newPassword
        await user.save()

        res.status(200).json({message:"PASSWORD CHANGED", user})
    }
    
}


module.exports = new UserService    