const Deposit = require('../models/Deposits')
const UserModel = require('../models/UserModel')
const uploadSingleFile = require('../config/cloudinary')
const AmountPaid = require('../models/AmountPaid')

class Deposits {

    async getBalance (req,res) {
        const {id} = req.body
        const balance = await AmountPaid.findOne({user:id})
        if(!balance){
            return res.status(400).json({message:"NO BALANCE FOUND"})
        }
        res.status(200).json({balance}) 
    }

    async getDeposits (req,res) {
        const id = req.user.id
        let deposits = await Deposit.find({user:id})
        res.status(200).json({message:"DEPOSITS MADE", deposits})
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
        const depositId = req.body.id
       
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"USER NOT FOUND"})
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
        return 
       }

    }
}

module.exports = new Deposits()