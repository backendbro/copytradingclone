const UserModel = require("../models/UserModel")
const WithdrawalModelBank = require("../models/WithdrawalModelBank")
const WithdrawalModelCashApp = require("../models/WithdrawalModelCashApp")
const WithdrawalModelCrypto = require("../models/WithdrawalModelCrypto")
const WithdrawalModelPaypal = require("../models/WithdrawalModelPaypal")

class WithDrawalService {
    
    async bank(req,res){
        const userId = req.user.id
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        req.body.user = userId
        const withDrawalDetails = await WithdrawalModelBank.create(req.body)
        res.status(200).json({withDrawalDetails})
    }   

    async crypto(req,res) {
        const userId = req.user.id
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({nessage: "USER DOES"})
        }
        req.body.user = userId
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