const UserModel = require("../models/UserModel")

class Referral {

    async getRefferalLink(req,res){
        const userId = req.user.id
        res.status(200).json({message:"Referral Id", userId})
    }

    async getReferral(req,res) {
        const {userId} = req.params
        const referral = await UserModel.findById(userId).populate('referredUser')
        res.status(200).json({referrals: referral.referredUser})
    }

}

module.exports = new Referral()