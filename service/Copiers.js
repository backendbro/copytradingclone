const UserModel = require("../models/UserModel")
const Trader = require('../models/Trader')

class Copiers {

    async addCopiers (req,res) {
        const { traderId, userId } = req.body 

        const user = await UserModel.findById(userId)
        const trader = await Trader.findById(traderId)
        if(!user && !trader){
            return res.status(404).json({message:"TRADER OR USER DOES NOT EXIST"})
        }

        const options =   '$addToSet'

        const updatedUser = await UserModel.findByIdAndUpdate(userId, {[options]: {copying: traderId}}, {new:true})
        const updatedTrader = await Trader.findByIdAndUpdate(traderId, {[options]:{ copiers: userId}}, {new:true})

        res.status(200).json({message:"COPIED", updatedUser, updatedTrader})
    }

    async removeCopier(req,res) {
        const {traderId, userId} = req.body

        const user = await UserModel.findById(userId)
        let userBoolean;
        user.copying.forEach(trader => {
            if(trader == traderId){
                userBoolean = true 
            }
        })
    
    
        const trader = await Trader.findById(traderId)
        let traderBoolean;
        trader.copiers.forEach(user => {
            if(user == userId){
                traderBoolean = true
            }
        })

        if(userBoolean && traderBoolean){
            const newTrader = await Trader.findByIdAndUpdate(traderId, {$pull: {copiers:userId}}, {new:true})
            const newUser = await UserModel.findByIdAndUpdate(userId, {$pull:{ copying: traderId}}, {new:true})

            return res.status(200).json({message:"REMOVED", newTrader, newUser})
         }


        res.status(200).json({message:"NO TRADE OR USER FOUND"})
    }

    async getCopiers (req,res) {
        const {id} = req.body 
        const user = await UserModel.findById(id)
        const trader = await Trader.findById(id)

        if(user !== null){
            const user = await UserModel.findById(id).populate("copying")
            return res.status(200).json({copying: user.copying})
        }

        if(trader !== null){
            const trader = await Trader.findById(id).populate("copiers")
            return res.status(200).json({copiers: trader.copiers})
        }
    
        res.status(404).json({message:"SOMETHING WENT WRONG!"})
    }

    async declineCopiers (req,res) {
        const { traderId, userId } = req.body 
        
        const user = await UserModel.findById(userId)
        let targetUser;
        user.copying.forEach(copy => {
            if(copy == traderId){
                targetUser = true
            }
        })
       


        const trader = await Trader.findById(traderId)        
        let targetTrader;
        trader.copiers.forEach(copy => {
            if(copy == userId){
                targetTrader = true
            }
        })
       
        
        const options =  targetUser && targetTrader ? "$pull" : '$addToSet'
       
        const updatedUser = await UserModel.findByIdAndUpdate(userId, {[options]: {copying: traderId}}, {new:true})
        const updatedTrader = await Trader.findByIdAndUpdate(traderId, {[options]:{ copiers: userId}}, {new:true})

        res.status(200).json({message:"REQUEST DECLINED", updatedUser, updatedTrader})
    
    }
}

module.exports = new Copiers()