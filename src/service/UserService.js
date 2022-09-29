const UserModel = require("../models/UserModel")
const ErrorResponse = require('../errors/ErrorResponse')
const sendEmail = require('../ultis/emailer.js')
const {decryptJwt, comparePassword} = require('../ultis/jsonwebtoken')

class UserService {
    async register (req,res) {
        const { firstName, lastName, email, password, currency} = req.body

        const userExists = await UserModel.findOne({email})
        
       if(userExists){
            return res.status(404).json({message:'USER ALREADY EXIST'})
       }

        const newUser = { firstName, lastName, email, password, currency }
        const user = await UserModel.create(newUser)
        const token = user.createToken()

        // const confirmEmailURL = `${req.protocol}://${req.get(
        //     'host',
        // )}/api/user/confirmemail?token=${token}`;
         const confirmEmailURL = `${process.env.BASE_URL}/confirm-email/${token}`
        await sendEmail(email, 'Verify Email ProtradeLiveOptions', { firstName, confirmEmailURL });
       

        res.status(200).json({user, token, confirmEmailURL})
    }

    async confirmEmailURL(req,res) {
        const token = req.params.token 
        const userId = decryptJwt(token)
        
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(400).json({message:"Expired Token"})
        }

        user.isValidAcct = true
        await user.save()

        res.status(200).json({message:'EMAIL VERIFIED'})
    }

    async login(req,res) {
        const {email, password} = req.body 
        const user = await UserModel.findOne({email}).select("+password")
        if(!user){
            return res.status(404).json({message:'USER ALREADY EXIST'})
        }
        
        if(!user.isValidAcct){
            return res.status(404).json({message:'CONFIRM YOUR ACCT'})
        }
        
        // console.log(user)
        const isMatch = await comparePassword(password,user.password)   
        if(!isMatch){
            return res.status(400).json({message:"YOU HAVE ENTERED WRONG CREDENTIALS"})
        } 

        const token = user.createTokenLogin()
        res.status(200).json({token})
    }
}

module.exports = new UserService    