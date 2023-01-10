const Wallet = require('../models/Wallet')

class WalletService {

    async getWallet(req,res){
        const wallets = await Wallet.find()
        res.status(200).json({message:"WALLETS", wallets})
    }

    async getSingleWallet (req,res) {
        const {id} = req.body
        const wallet = await Wallet.findById(id)
        if(!wallet){
            res.status(404).json({message:"WALLET NOT FOUND"})
        }

        res.status(200).json({message: 'WALLET FOUND', wallet})
    }

    async addWallet(req,res) {
       const wallet = await Wallet.create(req.body)
       res.status(200).json({message:"WALLET CREATED", wallet})
    }

    async updateWallet(req,res) {
        const {id} = req.body
        const walletExist = await Wallet.findById(id)
        if(!walletExist){
            return res.status(404).json({message:"WALLLET DOES NOT EXIST"})
        }

       const wallet = await Wallet.findByIdAndUpdate(id, req.body, {new:true})
       res.status(200).json({message:"WALLET UPDATED", wallet})
    }

    async uploadWallet(req,res){
        const {walletId} = req.body
        
        if(!req.file){
            return res.status(404).json({message:"PLEASE UPLOAD AN IMAGE"})
        }

        const uploadWallet = req.file
        
        try {
            const uploadWalletPath = uploadWallet.path 
            const uploadWalletUpload = await uploadSingleFile(uploadWalletPath)
            const uploadWalletUrl = uploadWalletUpload.url
          
            const walletProof = await Wallet.findByIdAndUpdate(walletId,  { photo:uploadWalletUrl }, {new:true} )
            res.status(200).json({message:"IMAGE UPLOADED", walletProof})
       } catch (error) {
        return 
       }
    }

    async deleteWallet(req,res){
        const {id} = req.body

       const wallet = await Wallet.findById(id)
       if(!wallet){
        return res.status(404).json({message:"WALLET DOES NOT EXIST"})
       }

       const walletD = await Wallet.findOneAndDelete({_id:id})
       res.status(200).json({message:"WALLET DELETED", walletD})
    }   

}   

module.exports = new WalletService()