const stockTrade = require('../models/Stock')
const moment = require('moment')
const AmountPaid = require('../models/AmountPaid')

class Stock {

    async getCurrencies(req,res) {
        const currency = {
            Currency:{
                AUD_CAD:{
                    id:1,
                    name:" AUD/CAD",
                    tradeValue:"$0.87",
                    amount:{
                        num:1,
                        max:3455418.15 
                    }
                },
                AUD_CHF:{
                    id:2,
                    name:"AUD/CHF",
                    tradeValue:"$0.64",
                    amount:{
                        num:1,
                        max:4723292.93 
                    }
                },
                AUD_JPY:{
                    id:3,
                    name:"AUD/JPY",
                    tradeValue:"$94.12",
                    amount:{
                        num:1,
                        max:32087.17 
                    }
                },
                AUD_NZD:{
                    id:4,
                    name:"AUD/NZD",
                    tradeValue:"$1.09",
                    amount:{
                        num:1,
                        max:2764593.91 
                    }
                },
                AUD_SGD:{
                    id:5,
                    name:"AUD/NZD",
                    tradeValue:"$0.91",
                    amount:{
                        num:1,
                        max:3335982.81 
                    }
                },
                AUD_USD:{
                    id:6,
                    name:"AUD/USD",
                    tradeValue:"$0.64",
                    amount:{
                        num:1,
                        max:4713635.20 
                    }
                },
                CAD_CHF:{
                    id:7,
                    name:"CAD/CHF",
                    tradeValue:"$0.73",
                    amount:{
                        num:1,
                        max:4127958.39 
                    }
                },
                CAD_HKD:{
                    id:8,
                    name:"CAD/HKD",
                    tradeValue:"$5.75",
                    amount:{
                        num:1,
                        max:524844.07 
                    }
                },
                CAD_JPY:{
                    id:9,
                    name:"CAD/JPY",
                    tradeValue:"$107.68",
                    amount:{
                        num:1,
                        max:28044.65 
                    }
                },
                CAD_SGD:{
                    id:10,
                    name:"CAD/SGD",
                    tradeValue:"$1.04",
                    amount:{
                        num:1,
                        max:2915526.79 
                    }
                },
                EUR_AUD:{
                    id:11,
                    name:"EUR/AUD",
                    tradeValue:"$1.54",
                    amount:{
                        num:1,
                        max:1958336.93 
                    }
                },
                EUR_CAD:{
                    id:12,
                    name:"EUR/CAD",
                    tradeValue:"$1.35",
                    amount:{
                        num:1,
                        max:2240721.05 
                    }
                },
                EUR_CHF:{
                    id:13,
                    name:"EUR/CAD",
                    tradeValue:"$0.99",
                    amount:{
                        num:1,
                        max:3062717.97
                    }
                },
                EUR_GBP:{
                    id:14,
                    name:"EUR/GBP",
                    tradeValue:"$0.87",
                    amount:{
                        num:1,
                        max:3489395.00 
                    }
                },
                EUR_JPY:{
                    id:15,
                    name:"EUR/JPY",
                    tradeValue:"$144.63",
                    amount:{
                        num:1,
                        max:20880.04
                    }
                },
                EUR_NZD:{
                    id:16,
                    name:"EUR/NZD",
                    tradeValue:"$1.69",
                    amount:{
                        num:1, 
                        max:1784935.16 
                    }
                },
                EUR_USD:{
                    id:17,
                    name:"EUR/USD",
                    tradeValue:"$0.98",
                    amount:{
                        num:1,
                        max:3095334.14 
                    }
                },
                GBP_AUD:{
                    id:18,
                    name:"GBP/AUD",
                    tradeValue:"$$1.79",
                    amount:{
                        num:1,
                        max:1685559.01
                    }
                },
                GBP_CAD:{
                    id:19,
                    name:"GBP/CAD",
                    tradeValue:"$1.55",
                    amount:{
                        num:1,
                        max:1946321.43 
                    }
                },
                GBP_NZD:{
                    id:20,
                    name:"GBP/NZD",
                    tradeValue:"$1.95",
                    amount:{
                        num:1,
                        max:1544951.32 
                    }
                },
                GBP_USD:{
                    id:21,
                    name:"GBP/USD",
                    tradeValue:"$1.13",
                    amount:{
                        num:1,
                        max:2679002.00 
                    }
                },
                USD_CAD:{
                    id:22,
                    name:"USD/CAD",
                    tradeValue:"$1.38",
                    amount:{
                        num:1,
                        max:2193968.48 
                    }
                },
                USD_CHF:{
                    id:23,
                    name:"USD/CHF",
                    tradeValue:"$1.01",
                    amount:{
                        num:1,
                        max:2983149.57
                    }
                },
                USD_JPY:{
                    id:24,
                    name:"USD/JPY",
                    tradeValue:"$148.23",
                    amount:{
                        num:1,
                        max:20372.73 
                    }
                },
                USD_MXN:{
                    id:25, 
                    name:"USD/MXN",
                    tradeValue:"$I48.23",
                    amount:{
                        num:1,
                        max:153338.14 
                    }
                },
                USD_SGD:{
                    id:26,
                    name:"USD/SGD",
                    tradeValue:"$1.42",
                    amount:{
                        num:1,
                        max:2123915.55 
                    }
                },
                USD_TRY:{
                    id:27,
                    name:"USD/TRY",
                    tradeValue:"$18.6",
                    amount:{
                        num:1,
                        max:162171.33
                    }
                },
                USD_THB:{
                    id:28,
                    name:"USD/THB",
                    tradeValue:"$38.01",
                    amount:{
                        num:1,
                        max:79459.34
                    }
                },
                USD_ZAR:{
                    id:29,
                    name:"USD/ZAR",
                    tradeValue:"$18.42",
                    amount:{
                        num:1,
                        max:163919.42 
                    }
                }
            }
        
        }
        res.status(200).json({message:"Currency", currency})
    }

    async getCrypto(req,res) {
        const crypto = {  Crypto: {
            Aave: {
                id:1,
                name:"Aave",
                tradeValue:"$84.57",
                amount:{
                    num:1,
                    max:35707.19
                }
            },
            Cardano: {
                id:2,
                name:"Ada",
                tradeValue:"$0.40",
                amount:{
                    num:1,
                    max:7552848.75 
                }
            },
            Algorand:{
                id:3,
                name:"ALGO",
                tradeValue: "$0.35",
                amount:{
                    num:1,
                    max: 8540386.19
                }
            },
            Bitcoin_Cash: {
                id:4,
                name:"Bcash",
                tradeValue: "$114.91",
                amount:{
                    num:1,
                    max:26281.53
                }
            },
            Binance_Coin: {
                id:5,
                name: "BNB",
                tradeValue: "$310.69",
                amount: {
                    num:1,
                    max:9719.98
                }
            },
            Bitcoin: {
                id:6,
                name:"BTC",
                tradeValue: "$2,049.05",
                amount: {
                    num: 1,
                    max: 147.38
                }
            },
            PanCake_Swap : {
                id:7,
                name:"Cake",
                tradeValue: "$4.66",
                amount: {
                    num:1,
                    max: 647928.90
                }
            },
            Compound: {
                id:8,
                name:"COMP",
                tradeValue:"$50.06",
                amount: {
                    num:1,
                    max:60331.07
                }
            },
            Dash: {
                id:9,
                name:"DASH",
                tradeValue:"$41.44",
                amount: {
                    num:1,
                    max:72879.20
                }
            },
            DogeCoin: {
                id:10,
                name:"doge",
                tradeValue:"$0.02",
                amount: {
                    num:1,
                    max:160355498.11
                }
            },
            Polkadot:{
                id:11,
                name:"DOT",
                tradeValue:"$6.67",
                amount:{
                    num:1,
                    max:452425.60
                }
            },
            EOS:{
                id:12,
                name:"EOS",
                tradeValue:"$1.11",
                amount:{
                    num:1,
                    max:2711961.46
                }
            },
            Ethereum: {
                id:13,
                name:"ETH",
                tradeValue:"$1,583.72",
                amount:{
                    num:1,
                    max: 1906.85 
                }
            },
            Filecoin:{
                id:14,
                name:"FIL",
                tradeValue:"$5.37",
                amount: {
                    num:1,
                    max: 562580.44 
                }
            },
            FTX_Token:{
                id:15,
                name:"FTT",
                tradeValue:"$25.56",
                amount:{
                    num:1,
                    max: 118140.57
                }
            },
            Litecoin : {
                id:16,
                name:"LTC",
                tradeValue:"$54.84",
                amount: {
                    num:1,
                    max:55065.44
                }
            },
            Polygon: {
                id:17,
                name:"Matic",
                tradeValue:"$0.91",
                amount: {
                    num:1,
                    max:3326677.77
                }
            },
            Thorchain: {
                id:18,
                name:"Rune",
                tradeValue:"$1.56",
                amount: {
                    num:1,
                    max: 1941716.21
                }
            },
            Shiba_Inu:{
                id:19,
                name:"SHIB",
                tradeValue:"$0.00",
                amount: {
                    num:1,
                    max:251018793586.4
                }
            },
            Solana: {
                id:20,
                name:"SOL",
                tradeValue:"$33.33",
                amount: {
                    num:1,
                    max:90615.17
                }
            },
            Theta: {
                id:21,
                name:"THETA",
                tradeValue:"$1.15",
                amount:{
                    num:1,
                    max:2633966.20
                }
            },
            Tron:{
                id:22,
                name:"TRX",
                tradeValue:"$62.83",
                amount:{
                    num:1,
                    max:48061529.70 
                }
            },
            Uniswap: {
                id:23,
                name:"UNI",
                tradeValue:"$6.84",
                amount:{
                    num:1,
                    max:441690.01 
                }
            },
            Stellar: {
                id: 23,
                name: "XLM",
                tradeValue:"$0.11",
                amount:{
                    num:1,
                    max:27241196.47 
                }
            },
            Monero: {
                id:25,
                name:"XMR",
                tradeValue:"$149.06",
                amount:{
                    num:1,
                    max:20259.91 
                }
            },
            Tezos: {
                id:26,
                name:"XTZ",
                tradeValue:"$1.42",
                amount:{
                    num:1,
                    max:2122692.87 
                }
            },
            ZCASH: {
                id:27,
                name:"ZEC",
                tradeValue:"$52.92",
                amount:{
                    num:1,
                    max:57066.09 
                }
            },
            Bitcoin_SV:{
                id:28,
                name:"BSV",
                tradeValue:"$47.37",
                amount:{
                    num:1,
                    max:63754.82 
                }
            }
        }
        }
        res.status(200).json({message:"CRYPTO", crypto})
    }


    async getStocks(req,res) {
        const user = req.user.id
    }

    async simulateTrade(req,res) {
        const {time, id} = req.body
        const date = Date.now()
        const newDateObj = moment(date).add(time, 'm').toDate();
        
        req.body.user = id 
        req.body.setTimer =  newDateObj
        
        let amountPaid = await AmountPaid.findOne({user:id})
        
        const balance = amountPaid.balance 
        const newBalance = parseInt(balance) + parseInt(closeTrade.profit) 
        amountPaid = await AmountPaid.findByIdAndUpdate(amountPaid.id, {balance:newBalance}, {new:true})
        
        const trade = await stockTrade.create(req.body)
        res.status(200).json({amountPaid, trade})
    }

    async getOpenTradeV1 (req,res) {
        const openTrade = await stockTrade.find({ setTimer:{$gt: Date.now()} })
        res.status(200).json({openTrade})
    }

    async getCloseTradeV2(req,res) {
        const closeTrade =  await stockTrade.find({status:"Close" })
        res.status(200).json({closeTrade})
    }

}

module.exports = new Stock()