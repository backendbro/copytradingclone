const UserModel = require('../models/UserModel')
const AdminUsers = require('../models/AdminUsers')
const Contract = require('../models/Contract')
const Deposit = require('../models/Deposits')
const Trade = require('../models/Trade')
const WithBank = require('../models/WithdrawalModelBank')
const WithCash = require('../models/WithdrawalModelCashApp')
const WithCrypto = require('../models/WithdrawalModelCrypto')
const WithPaypal = require('../models/WithdrawalModelPaypal')
const sendEmail = require('../ultis/emailer')


class AdminUser  {

    async getUsers(req,res) { 
        const userId = req.user.id 
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(200).json({message:"USER DOES NOT EXIST"})
        }

        const allUsers = await UserModel.find()
        res.status(200).json({allUsers})
    }

    async getUser(req,res) {
        const userId = req.user.id 
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(200).json({message:"USER DOES NOT EXIST"})
        }
    
        const singleUser = await UserModel.findById(userId)
        res.status(200).json({singleUser})
    }

    async deleteUser (req,res) {
        const userId = req.user.id 
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(200).json({message:"USER DOES NOT EXIST"})
        }

        await UserModel.deleteOne({userId})
        await Contract.deleteOne({userId})
        await Deposit.deleteOne({userId})
        await Trade.deleteOne({userId})
        await WithBank.deleteOne({userId})
        await WithCrypto.deleteOne({userId})
        await WithCash.deleteOne({userId})
        await WithPaypal.deleteOne({userId})

        res.status(200).json({message:'USER DELETED'})
    } 

    async profile(req,res) {
        const user = req.user.id
    }

    async openTrade (req,res) {
        const user = req.user.id
    }

    async closeTrade(req,res) {
        const user = req.user.id
    }

    async summary (req,res) {
        const user = req.user.id
    }

    async sendEmail(req,res) {
        const userId = req.user.id 
        const { subject, description } = req.body
        
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(200).json({message:"USER DOES NOT EXIST"})
        }

        const firstName = user.firstName
        const email = user.email 
        
        const emailSent = await sendEmail(email, subject , { firstName,description });
        res.status(200).json({message:"MESSAGE SENT"})
    }

}

module.exports = new AdminUser()