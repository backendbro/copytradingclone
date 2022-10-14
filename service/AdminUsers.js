const UserModel = require('../models/UserModel')
const AdminUsers = require('../models/AdminUsers')
const Deposit = require('../models/Deposits')
const WithBank = require('../models/WithdrawalModelBank')
const WithCash = require('../models/WithdrawalModelCashApp')
const WithCrypto = require('../models/WithdrawalModelCrypto')
const WithPaypal = require('../models/WithdrawalModelPaypal')
const sendEmail = require('../ultis/emailer')
const Deposits = require('../models/Deposits')



class AdminUser  {

    async getUsers(req,res) {
        const allUsers = await UserModel.find({role:"user"})
        res.status(200).json({allUsers})
    }

    async getUser(req,res) {
        const {userId} = req.body
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(200).json({message:"USER DOES NOT EXIST"})
        }
    
        const singleUser = await UserModel.findById(userId)
        res.status(200).json({singleUser})
    }

    async deleteUser (req,res) {
        const {userId} = req.body
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(200).json({message:"USER DOES NOT EXIST"})
        }

        await UserModel.deleteOne({userId})
        await Deposit.deleteOne({userId})
        await WithBank.deleteOne({userId})
        await WithCrypto.deleteOne({userId})
        await WithCash.deleteOne({userId})
        await WithPaypal.deleteOne({userId})

        res.status(200).json({message:'USER DELETED'})
    } 

    async profile(req,res) {
        const {userId} = req.body
        const userExist = await UserModel.findById(userId)
        if(!userExist){
            return res.status(404).json({message:"USER DOES NOT EXIST"})
        }

        if(user.role !== req.user.role){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }

       const user = await UserModel.findById(userId)
       
       const deposits = await Deposits.findById(userId)
       const bank = await WithBank.find({_id:userId}, {approved:"false"})
       const cashApp = await WithCash.find({_id:userId}, {approved:"false"}) 
       const crypto = await WithCrypto.find({_id:userId}, {approved:"false"})
       const paypal = await WithPaypal.find({_id:userId}, {approved:"false"})

       res.status(200).json({
        message:"PROFILE", 
        user, 
        pendingDeposits:deposits.length,
        pendingBank: bank.length,
        pendingCashApp: cashApp.length,
        pendingCrypto: crypto.length,
        pendingPaypal: paypal.length
    })

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
        const { subject, description } = req.body
        
        const {userId} = req.body
        const userExist = await UserModel.findById(userId)
        if(!userExist){
            return res.status(404).json({message:"USER DOES NOT EXIST"})
        }

        if(userExist.role !== 'admin'){
            return res.status(404).json({message:"USER IS NOT AUTHORIZE TO COMPLETE THIS ACTION"})
       }

        const firstName = user.firstName
        const email = user.email 
        
        await sendEmail(email, subject , { firstName,description });
        res.status(200).json({message:"MESSAGE SENT"})
    }


   async getDeposits(req,res){
       const deposits = await Deposits.find()
       res.status(200).json({message:"DEPOSITS", deposits})
    }

    async getSingleDepositDetails(req,res){
        const depositId = req.body
        const deposit = await Deposits.findById(depositId)
        res.status(200).json({message:"SINGLE DEPOSIT", deposit})
    }
    async confirmDeposits(req,res){
        const {id} = req.params 
        let deposit = await Deposit.findById(id)

        if(!deposit){
            return res.status(404).json({message:"DEPOSIT DOES NOT EXIST"})
        }
    
        deposit = await Deposit.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json({message:"DEPOSIT EDITED", deposit}) 
    }

    async deleteDeposits(req,res){
        const {id} = req.params 
        const depositExist = await Deposit.findById(id)
        if(!depositExist){
            return res.status(200).json({message:"DEPOSIT DELETED"})
        }
        
    }

    withdrawal(){}
}

module.exports = new AdminUser()