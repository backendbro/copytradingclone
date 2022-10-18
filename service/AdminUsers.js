const UserModel = require('../models/UserModel')
const AdminUsers = require('../models/AdminUsers')
const Deposit = require('../models/Deposits')
const WithdrawalModelBank = require("../models/WithdrawalModelBank")
const WithdrawalModelCashApp = require("../models/WithdrawalModelCashApp")
const WithdrawalModelCrypto = require("../models/WithdrawalModelCrypto")
const WithdrawalModelPaypal = require("../models/WithdrawalModelPaypal")
const sendEmail = require('../ultis/emailer')
const Deposits = require('../models/Deposits')
const mongoose = require('mongoose')



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
        
       const user = await UserModel.findById(userId)
       
       const deposits = await Deposits.findById(userId)
       const bank = await WithBank.find({_id:userId}, {approved:"false"})
       const cashApp = await WithCash.find({_id:userId}, {approved:"false"}) 
       const crypto = await WithCrypto.find({_id:userId}, {approved:"false"})
       const paypal = await WithPaypal.find({_id:userId}, {approved:"false"})

       res.status(200).json({ message:"PROFILE", user, deposits, bank,cashApp,crypto, paypal }) }

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

    async getWithDrawals(req,res){
        const {id} = req.body
        const mongooseId = mongoose.Types.ObjectId(id)
        const user = await UserModel.findById(id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        
        const paypalWithDraw = await WithdrawalModelPaypal.find(mongooseId)
        const cashAppWithDraw = await WithdrawalModelCashApp.find(mongooseId)
        const bankWithDraw = await WithdrawalModelBank.find(mongooseId)
        const cryptoWithDraw = await WithdrawalModelCrypto.find(mongooseId)

        res.status(200).json({ paypalWithDraw, cashAppWithDraw, bankWithDraw, cryptoWithDraw})
    
    }

    async getSingleWithDrawal(req,res) {
        const {id} = req.body
        const mongooseId = mongoose.Types.ObjectId(id)
        
        const paypalWithDraw = await WithdrawalModelPaypal.findById(mongooseId)
        if(paypalWithDraw){
            return res.status(200).json({paypalWithDraw})
        }
        const cashAppWithDraw = await WithdrawalModelCashApp.findById(mongooseId)
        if(cashAppWithDraw){
            return res.status(200).json({cashAppWithDraw})
        }
        const bankWithDraw = await WithdrawalModelBank.findById(mongooseId)
        if(bankWithDraw){
            return res.status(200).json({bankWithDraw})
        }
        const cryptoWithDraw = await WithdrawalModelCrypto.findById(mongooseId)
        if(cryptoWithDraw){
            return res.status(200).json({cryptoWithDraw})
        }
    }
 

    async updateWithdrawal(req,res){
        const {id} = req.body
        
        const paypalWithDraw = await WithdrawalModelPaypal.findById(id)
        if(paypalWithDraw){
        const update = await WithdrawalModelPaypal.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json({update})
        }

        const cashAppWithDraw = await WithdrawalModelCashApp.findById(id)
        if(cashAppWithDraw){
           const update = await WithdrawalModelCashApp.findByIdAndUpdate(id, req.body, {new:true})
           res.status(200).json({update})
        }

        const bankWithDraw = await WithdrawalModelBank.findById(id)
        if(bankWithDraw){
           const update = await WithdrawalModelBank.findByIdAndUpdate(id, req.body, {new:true})
           res.status(200).json({update})
        }

        const cryptoWithDraw = await WithdrawalModelCrypto.findById(id)
        if(cryptoWithDraw){
            const update = await WithdrawalModelCrypto.findByIdAndUpdate(id, req.body, {new:true})
            res.status(200).json({update})
         }
    }
}

module.exports = new AdminUser()