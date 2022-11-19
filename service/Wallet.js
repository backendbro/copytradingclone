const Wallet = require('../models/Wallet')
const UserModel = require('../models/UserModel')

class WalletService {

    async getWallet(req,res){
        const wallets = await Wallet.find()
        res.status(200).json({message:"WALLETS", wallets})
    }

    async getSingleWallet (req,res) {
        const {id} = req.params
        const wallet = await Wallet.findById(id)
        if(!wallet){
            res.status(404).json({message:"WALLET NOT FOUND"})
        }

        res.status(200).json({message: 'WALLET FOUND', wallet})
    }
    async addWallet(req,res) {
        const userId = req.user.id
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"USER DOES NOT EXIST"})
        }

       const wallet = await Wallet.create(req.body)
       res.status(200).json({message:"WALLET CREATED", wallet})
    }

    async updateWallet(req,res) {
        const {id} = req.params
        const walletExist = await Wallet.findById(id)
        if(!walletExist){
            return res.status(404).json({message:"WALLLET DOES NOT EXIST"})
        }

       const wallet = await Wallet.findByIdAndUpdate(id, req.body, {new:true})
       res.status(200).json({message:"WALLET UPDATED", wallet})
    }

    async deleteWallet(req,res){
        const userId = req.user.id
        const {id} = req.params

        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({message:"USER DOES NOT EXIST"})
        }

       const wallet = await Wallet.findById(id)
       if(!wallet){
        return res.status(404).json({message:"WALLET DOES NOT EXIST"})
       }

       const walletD = await Wallet.deleteOne({id})
       res.status(200).json({message:"WALLET DELETED", walletD})
    }   

}   

module.exports = new WalletService()