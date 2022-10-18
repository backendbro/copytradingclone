const Deposit = require('../models/Deposits')
const UserModel = require('../models/UserModel')
const uploadSingleFile = require('../config/cloudinary')



class Deposits {

    async getDeposits (req,res) {
        const start = Date.now()
        let deposits;
        deposits = await Deposit.find()
        deposits.forEach(async deposit  => {
            if(new Date(deposit.failedStatusDate).getTime() < start){
              await Deposit.findByIdAndUpdate(deposit.id, {status:"failed"}, {new:true})
            }
        } )
        
        res.status(200).json({message:"DEPOSITS MADE", deposits})
    }

    async makeDeposits (req,res) {
        
        const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
        req.body.user = userId
        const date = new Date()
        req.body.failedStatusDate = date.setTime(date.getTime() + (2*60*60*1000)); 
        console.log(req.body)

        const deposit = await Deposit.create(req.body)
        res.status(200).json({message:"DEPOSIT MADE", deposit})
    }

    async uploadProof(req,res){
        const userId = req.user.id
        const depositId = req.params.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"USER NOT FOUND"})
        }

        const start = Date.now()
        const deposit = await Deposit.findById(depositId)
        if(new Date(deposit.failedStatusDate).getTime() < start){
          return res.status(404).json({message:"PAYMENT LINK EXPIRED"})
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