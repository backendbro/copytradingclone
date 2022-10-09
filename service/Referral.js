const UserModel = require("../models/UserModel")

class Referral {

    async getRefferalLink(req,res){
        const userId = req.user.id
        const link = `${req.protocol}://${req.get('host')}/api/user/register/referral/${userId}`
        res.status(200).json({message:"Referral Link", link})
    }

    async getReferral(req,res) {
        const {userId} = req.params
        const referral = await UserModel.findById(userId).populate('referredUser')
        res.status(200).json({referrals: referral.referredUser})
    }

}

module.exports = new Referral()