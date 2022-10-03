const Deposit = require('../models/Deposits')

class Deposits {

    async getDeposits (req,res) {
        const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }
        
        const deposits = await Deposit.find({confirmed:"true"})
        res.status(200).json({message:"DEPOSITS MADE", deposits})
    }

    async makeDeposits (req,res) {
        const userId = req.user.id
        let user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({user})
        }

        const deposit = await Deposit.create(req.body)
        res.status(200).json({message:"DEPOSIT MADE", deposit})
    }
}

module.exports = new Deposits()