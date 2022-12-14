const mongoose = require("mongoose")
const Deposits = require("../models/Deposits")
const UserModel = require("../models/UserModel")
const WithdrawalModelBank = require("../models/WithdrawalModelBank")
const WithdrawalModelCashApp = require("../models/WithdrawalModelCashApp")
const WithdrawalModelCrypto = require("../models/WithdrawalModelCrypto")
const WithdrawalModelPaypal = require("../models/WithdrawalModelPaypal")
const AmountPaid = require('../models/AmountPaid')



class WithDrawalService {

    async bank(req,res){
        
        const {id} = req.user
        const user = await UserModel.findById(id)
        const amountPaid = await AmountPaid.findOne({user})

        const {amount} = req.body
        const amountInNum = parseInt(amount)
        
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
       
        const balance = amountPaid.balance
     
        if(balance < amountInNum) {
            return res.status(404).json({message:"INSUFFICIENT FUNDS"})
        }
        

        req.body.user = id
        const withDrawalDetails = await WithdrawalModelBank.create(req.body)
        res.status(200).json({withDrawalDetails})
    }   

    async crypto(req,res) {
        const {id} = req.user
        const user = await UserModel.findById(id)
        const amountPaid = await AmountPaid.findOne({user})

        const {amount} = req.body
        const amountInNum = parseInt(amount)

        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
       
        const balance = amountPaid.balance
        if(balance < amountInNum) {
            return res.status(404).json({message:"INSUFFICIENT FUNDS"})
        }

        req.body.user = id
        const withDrawalDetails = await WithdrawalModelCrypto.create(req.body)
        res.status(200).json({withDrawalDetails})
    }

    async cashApp(req,res) {
        const {id} = req.user
        const user = await UserModel.findById(id)
        const amountPaid = await AmountPaid.findOne({user})

        const {amount} = req.body
        const amountInNum = parseInt(amount)

        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
       
        const balance = amountPaid.balance
        if(balance < amountInNum) {
            return res.status(404).json({message:"INSUFFICIENT FUNDS"})
        }

        req.body.user = id
        const withDrawalDetails = await WithdrawalModelCashApp.create(req.body)
        res.status(200).json({withDrawalDetails})
    }


    async paypal(req,res){
        const {id} = req.user
        const user = await UserModel.findById(id)
        const amountPaid = await AmountPaid.findOne({user})

        const {amount} = req.body
        const amountInNum = parseInt(amount)

        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
       
        const balance = amountPaid.balance
        
        if(balance < amountInNum) {
            return res.status(404).json({message:"INSUFFICIENT FUNDS"})
        }

        req.body.user = id
        const withDrawalDetails = await WithdrawalModelPaypal.create(req.body)
        res.status(200).json({withDrawalDetails})
    }

    async getWithDrawals(req,res){
        
        const user = await UserModel.findById(req.user.id)
        const mongooseId = mongoose.Types.ObjectId(req.user.id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES NOT EXISTS"})
        }
        
        const paypalWithDraw = await WithdrawalModelPaypal.find({user: mongooseId})
        const cashAppWithDraw = await WithdrawalModelCashApp.find({user: mongooseId})
        const bankWithDraw = await WithdrawalModelBank.find({user: mongooseId})
        const cryptoWithDraw = await WithdrawalModelCrypto.find({user: mongooseId})

        res.status(200).json({ paypalWithDraw, cashAppWithDraw, bankWithDraw, cryptoWithDraw})
    
    }

   
}

module.exports = new WithDrawalService()