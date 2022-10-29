const UserModel = require('../models/UserModel')
const AdminUsers = require('../models/AdminUsers')
const Deposit = require('../models/Deposits')
const WithBank = require("../models/WithdrawalModelBank")
const WithCash = require("../models/WithdrawalModelCashApp")
const WithCrypto = require("../models/WithdrawalModelCrypto")
const WithPaypal = require("../models/WithdrawalModelPaypal")
const sendEmail = require('../ultis/emailer')
const Deposits = require('../models/Deposits')
const mongoose = require('mongoose')
const AmountPaid = require('../models/AmountPaid')


async function checkBalance(Model, id){
    let balance = 0;
    const mongooseId = mongoose.Types.ObjectId(id)
    const checkIfDeposit = await Model.find({mongooseId, status:"Confirmed"})
    checkIfDeposit.forEach(deposit => {
            balance = balance + parseInt(deposit.amount)    
    })
    return balance;
}


class AdminUser  {

    constructor(){}

    async getUsers(req,res) {
        const allUsers = await UserModel.find({role:"user"})
        const deposits = await Deposit.find({status:"Pending"})

        // const userEntity = []

        // const paypalWithDraw = await WithdrawalModelPaypal.find({status:"Pending"})
        // const cashAppWithDraw = await WithdrawalModelCashApp.find({status:"Pending"})
        // const bankWithDraw = await WithdrawalModelBank.find({status:"Pending"})
        // const cryptoWithDraw = await WithdrawalModelCrypto.find({status:"Pending"})

        // paypalWithDraw.forEach(paypal => {
        //     if()
        // })

        // const depLength = deposits.length
        // const cryLength = cryptoWithDraw.length
        // const bankLength = bankWithDraw.length
        // const paypalLength = paypalWithDraw.length
        //const cashLength = cashAppWithDraw.length

        res.status(200).json({allUsers})
    }

    async getUser(req,res) {
        const {id} = req.body
        const mongooseId = mongoose.Types.ObjectId(id)
        const user = await UserModel.findById(id)
        if(!user){
            return res.status(200).json({message:"USER DOES NOT EXIST"})
        }
    
        const singleUser = await UserModel.findById(id)
        const deposits = await Deposits.findOne({user:mongooseId})
        res.status(200).json({singleUser, deposits})
    }

    async deleteUser (req,res) {
        const {id} = req.body
        const userId = mongoose.Types.ObjectId(id)
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(200).json({message:"USER DOES NOT EXIST"})
        }

        await UserModel.deleteOne({id})
        await Deposit.deleteOne({user:userId})
        await WithBank.deleteOne({user:userId})
        await WithCrypto.deleteOne({user:userId})
        await WithCash.deleteOne({user:userId})
        await WithPaypal.deleteOne({user:userId})

        res.status(200).json({message:'USER DELETED'})  
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
       const deposits = await Deposit.find({status:["Pending", "Confirmed"]})
       res.status(200).json({message:"DEPOSITS", deposits})
    }

    async getSingleDepositDetails(req,res){
        const {id} = req.body
        const deposit = await Deposits.findOne({ status: ["Pending", 'Confirmed'], id})
        res.status(200).json({message:"SINGLE DEPOSIT", deposit})
    }
    
    async confirmDeposits(req,res){
        const {id} = req.body 
        let findAmount1;

        let checkPendingDeposit = await Deposit.findOne({id, status:"Pending"})
        if(!checkPendingDeposit){
            return res.status(404).json({message:"DEPOSIT DOES NOT EXIST"})
        }

        const deposit = await Deposit.findByIdAndUpdate(id, req.body, {new:true})
        const amountObj = {
            user: deposit.user,
            amount: [deposit.amount],
            balance: parseInt(deposit.amount)
        }

        const findAmount = await AmountPaid.findOne({user:deposit.user})
        
        if(findAmount){
            let balance=parseInt(deposit.amount)
            findAmount.amount.forEach(amount => {
                balance = balance + parseInt(amount)
            })

            findAmount1 = await AmountPaid.findByIdAndUpdate(findAmount.id, {$push:{amount:deposit.amount}, balance}, {new:true})
        }else{
            findAmount1 = await AmountPaid.create(amountObj)
        }

        res.status(200).json({message:"DEPOSIT EDITED", deposit, findAmount1}) 
    }

    async deleteDeposits(req,res){
        const {id} = req.body 
        const depositExist = await Deposit.findById(id)
        if(!depositExist){
            return res.status(404).json({message:"DEPOSIT DELETED"})
        }
        
        const deletedDeposit = await Deposit.deleteOne({id})
        res.status(200).json({message:"DEPOSIT DELETED", deletedDeposit})
    }

    

    async getWithDrawals(req,res){
        const {id} = req.body
        const mongooseId = mongoose.Types.ObjectId(id)
        const user = await UserModel.findById(id)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        
        const paypalWithDraw = await WithPaypal.find(mongooseId)
        const cashAppWithDraw = await WithCash.find(mongooseId)
        const bankWithDraw = await WithBank.find(mongooseId)
        const cryptoWithDraw = await WithCrypto.find(mongooseId)

        res.status(200).json({ paypalWithDraw, cashAppWithDraw, bankWithDraw, cryptoWithDraw})
    
    }

    async getSingleWithDrawal(req,res) {
        const {id} = req.body
        const mongooseId = mongoose.Types.ObjectId(id)
        
        const paypalWithDraw = await WithPaypal.findById(mongooseId)
        if(paypalWithDraw){
            return res.status(200).json({paypalWithDraw})
        }
        const cashAppWithDraw = await WithCash.findById(mongooseId)
        if(cashAppWithDraw){
            return res.status(200).json({cashAppWithDraw})
        }
        const bankWithDraw = await WithBank.findById(mongooseId)
        if(bankWithDraw){
            return res.status(200).json({bankWithDraw})
        }
        const cryptoWithDraw = await WithCrypto.findById(mongooseId)
        if(cryptoWithDraw){
            return res.status(200).json({cryptoWithDraw})
        }
    }
 


    async updateWithdrawal(req,res){
        const {id} = req.body

       

        //PAYOAL
        const paypalWithDraw = await WithPaypal.findById(id)
        const cashAppWithDraw = await WithCash.findById(id)
        const bankWithDraw = await WithBank.findById(id)

        if(paypalWithDraw !== null){
            if(paypalWithDraw.status !== "Approved") {
    
                const amountPaid = await AmountPaid.findOne({user: paypalWithDraw.user})
                const updateWithAmount = parseInt(paypalWithDraw.amount)
       
                if(amountPaid.balance < updateWithAmount){
                    return res.status(404).json({message:"FUND YOUR ACCOUNT"})
                }
                
                const balance = amountPaid.balance - updateWithAmount
                
                const withdrawUpdate = await WithPaypal.findByIdAndUpdate(id, {status:"Approved"}, {new:true})
                const updateAmountPaid = await  AmountPaid.findByIdAndUpdate(amountPaid._id, {balance: balance}, {new:true})

                res.status(200).json({withdrawUpdate, updateAmountPaid})
        }else {
            res.status(404).json({message:"Already approved"})
        }
    }

        // CASH
        
        if(cashAppWithDraw !== null ){
            if(cashAppWithDraw.status !== "Approved"){
           const amountPaid = await AmountPaid.findOne({user: cashAppWithDraw.user})
           const updateWithAmount = parseInt(cashAppWithDraw.amount)
           
           if(amountPaid.balance < updateWithAmount){
            return res.status(404).json({message:"FUND YOUR ACCOUNT"})
        }
        
            const balance = amountPaid.balance - updateWithAmount
        
            const withdrawUpdate = await WithCash.findByIdAndUpdate(id, {status:"Approved"}, {new:true})
            const updateAmountPaid = await  AmountPaid.findByIdAndUpdate(amountPaid._id, {balance: balance}, {new:true})

           res.status(200).json({withdrawUpdate, updateAmountPaid})
    }else {
        res.status(404).json({message:"Already approved"})
    }
        }



        // BANK
        
        if(bankWithDraw !== null){
            if(bankWithDraw.status != "Approved"){
            const amountPaid = await AmountPaid.findOne({user: bankWithDraw.user})
            const updateWithAmount = parseInt(bankWithDraw.amount)
               
            if(amountPaid.balance < updateWithAmount){
                return res.status(404).json({message:"FUND YOUR ACCOUNT"})
            }

            const balance = amountPaid.balance - updateWithAmount
        
            const withdrawUpdate = await WithBank.findByIdAndUpdate(id, {status:"Approved"}, {new:true})
            const updateAmountPaid = await  AmountPaid.findByIdAndUpdate(amountPaid._id, {balance: balance}, {new:true})

        
          res.status(200).json({withdrawUpdate, updateAmountPaid})
        }else {
            res.status(404).json({message:"Already approved"})
        }
    }


        // CRYPTO

        const cryptoWithDraw = await WithCrypto.findById(id)
        if(cryptoWithDraw !== null){
            if(cryptoWithDraw.status !== "Approved"){
            const amountPaid = await AmountPaid.findOne({user: cryptoWithDraw.user})
            const updateWithAmount = parseInt(cryptoWithDraw.amount)
                

            if(amountPaid.balance < updateWithAmount){
                return res.status(404).json({message:"FUND YOUR ACCOUNT"})
            }

            const balance = amountPaid.balance - updateWithAmount
        
            const withdrawUpdate = await WithCrypto.findByIdAndUpdate(id, {status:"Approved"}, {new:true})
            const updateAmountPaid = await  AmountPaid.findByIdAndUpdate(amountPaid._id, {balance: balance}, {new:true})

            res.status(200).json({withdrawUpdate, updateAmountPaid})
         }else {
            res.status(404).json({message:"Already approved"})
         }
        }
    }

   
}

module.exports = new AdminUser()