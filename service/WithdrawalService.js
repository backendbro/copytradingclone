const mongoose = require("mongoose")
const Deposits = require("../models/Deposits")
const UserModel = require("../models/UserModel")
const WithdrawalModelBank = require("../models/WithdrawalModelBank")
const WithdrawalModelCashApp = require("../models/WithdrawalModelCashApp")
const WithdrawalModelCrypto = require("../models/WithdrawalModelCrypto")
const WithdrawalModelPaypal = require("../models/WithdrawalModelPaypal")

async function checkBalance(Model, id){
    let balance = 0;
    const mongooseId = mongoose.Types.ObjectId(id)
    const checkIfDeposit = await Model.find({mongooseId})
    checkIfDeposit.forEach(deposit => {
        if(deposit.status == 'Pending'){
            balance = balance + parseInt(deposit.amount)    
        }
    })
    return balance;
}

class WithDrawalService {

    async bank(req,res){
        const {id} = req.user
        const user = await UserModel.findById(id)
        const {amount} = req.body
        const amountInNum = parseInt(amount)

        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
       
        const balance = await checkBalance(Deposits, id)
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
        const {amount} = req.body
        const amountInNum = parseInt(amount)

        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
       
        const balance = await checkBalance(Deposits, id)
        if(balance < amountInNum) {
            return res.status(404).json({message:"INSUFFICIENT FUNDS"})
        }

        req.body.user = id
        const withDrawalDetails = await WithdrawalModelCrypto.create(req.body)
        res.status(200).json({withDrawalDetails})
    }

    async cashApp(req,res) {
        const userId = req.user.id
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        req.body.user = userId
        const withDrawalDetails = await WithdrawalModelCashApp.create(req.body)
        res.status(200).json({withDrawalDetails})
    }


    async paypal(req,res){
        const userId = req.user.id
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        req.body.user = userId
        const withDrawalDetails = await WithdrawalModelPaypal.create(req.body)
        res.status(200).json({withDrawalDetails})
    }

    async getWithDrawals(req,res){
        const user = await UserModel.findById(req.user.id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        
        const paypalWithDraw = await WithdrawalModelPaypal.find()
        const cashAppWithDraw = await WithdrawalModelCashApp.find()
        const bankWithDraw = await WithdrawalModelBank.find()
        const cryptoWithDraw = await WithdrawalModelCrypto.find()

        res.status(200).json({ paypalWithDraw, cashAppWithDraw, bankWithDraw, cryptoWithDraw})
    
    }

   
}

module.exports = new WithDrawalService()