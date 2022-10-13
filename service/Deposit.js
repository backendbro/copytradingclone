const Deposit = require('../models/Deposits')
const UserModel = require('../models/UserModel')
const uploadSingleFile = require('../config/cloudinary')
const Contract = require('../models/Contract')
const Trade = require('../models/Trade')


class Deposits {

    async getDeposits (req,res) {
        const userId = req.user.id  
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
        
        const deposits = await Deposit.find()
        const contracts = await Contract.find()
        const trade = await Trade.find()

        
        res.status(200).json({message:"DEPOSITS MADE", deposits, contracts, trade})
    }

    async makeDeposits (req,res) {
        
        const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
        req.body.user = userId
        const deposit = await Deposit.create(req.body)
        res.status(200).json({message:"DEPOSIT MADE", deposit})
    }

    async uploadProof(req,res){
        const userId = req.user.id
        const depositId = req.params.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }

        if(!req.file){
            return res.status(404).json({message:"PLEASE UPLOAD AN IMAGE"})
        }

        const uploadProof = req.file

        try {
            const uploadProofPath = uploadProof.path 
            const uploadProofUpload = await uploadSingleFile(uploadProofPath)
            const uploadProofUrl = uploadProofUpload.url
           
            const depositProof = await Deposit.findByIdAndUpdate(depositId,  { depositImage:uploadProofUrl }, {new:true} )
            res.status(200).json({message:"IMAGE UPLOADED", depositProof})
       } catch (error) {
        console.log(error)
       }

    }
}

module.exports = new Deposits()