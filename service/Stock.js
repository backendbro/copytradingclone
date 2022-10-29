const stockTrade = require('../models/Stock')
const moment = require('moment')

class Stock {

    async getCurrencies(req,res) {
       return res.json(req.body)
    }

    async getCrypto(req,res) {
        const user = req.user.id
    }

    async getStocks(req,res) {
        const user = req.user.id
    }

    async openTrade(req,res) {
        const {time} = req.body
        const date = Date.now()
        const newDateObj = moment(date).add(time, 'm').toDate();
        
        req.body.setTimer =  newDateObj
        req.body.status = "Open"
        const openTrade = await stockTrade.create(req.body)
        res.status(200).json({message:"TRADE OPENED", openTrade})
    }

    async closeTrade(req,res) {
        const user = req.user.id
    }

}

module.exports = new Stock()