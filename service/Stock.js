const stockTrade = require('../models/Stock')
const moment = require('moment')
const AmountPaid = require('../models/AmountPaid')

class Stock {

    async getCurrencies(req,res) {
        const currency = {
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
        res.status(200).json({message:"Currency", currency})
    }

    async getCrypto(req,res) {
        const crypto = { 
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
        res.status(200).json({message:"CRYPTO", crypto})
    }


    async getStocks(req,res) {
        const stocks = {
                Apple:{
                    id:1,
                    name:"AAPL",
                    tradeValue:"$138.11",
                    amount:{
                        num:1,
                        max:21880.62 
                    }
                },
                Adobe:{
                    id:2,
                    name:"ADBE",
                    tradeValue:"$286.00",
                    amount:{
                        num:1,
                        max:10566.20 
                    }
                },
                Analog_Devices:{
                    id:3,
                    name:"ADI",
                    tradeValue:"$144.29",
                    amount:{
                        num:1,
                        max:20943.46 
                    }
                },
                American_International_Group:{
                    id:4,
                    name:"AIG",
                    tradeValue:"$57.69",
                    amount:{
                        num:1,
                        max:52382.25 
                    }
                },
                AMC_Holding:{
                    id:5,
                    name:"AMC",
                    tradeValue:"$5.55",
                    amount:{
                        num:1,
                        max:544492.22 
                    }
                },
                Amazon:{
                    id:6,
                    name:"AMZN",
                    tradeValue:"$91.14",
                    amount:{
                        num:1,
                        max:33157.03 
                    }
                },
                ASML:{
                    id:7,
                    name:"ASML",
                    tradeValue:"$468.99",
                    amount:{
                        num:1,
                        max:6443.49 
                    }
                },
                American_Express:{
                    id:8,
                    name:"AXP",
                    tradeValue:"$144.60",
                    amount:{
                        num:1,
                        max:20898.56 
                    }
                },
                Boeing:{
                    id:9,
                    name:"BA",
                    tradeValue:"$159.93",
                    amount:{
                        num:1,
                        max:18895.34  
                    }
                },
                Alibaba:{
                    id:10,
                    name:"HKG",
                    tradeValue:"$69.83",
                    amount:{
                        num:1,
                        max:43275.55 
                    }
                },
                Bank_Of_America:{
                    id:11,
                    name:"BOA",
                    tradeValue:"$36.80",
                    amount:{
                        min:1,
                        max:82117.71 
                    }
                },
                CitiGroup:{
                    id:12,
                    name:"C",
                    tradeValue:"$45.10",
                    amount:{
                        min:1,
                        max:67005.14 
                    }
                },
                Caterpiller:{
                    id:13,
                    name:"CAT",
                    tradeValue:"$227.21",
                    amount:{
                        min:1,
                        max:13300.17 
                    }
                },
                Chamber_Energy:{
                    id:14,
                    name:"CEI",
                    tradeValue:"$0.12",
                    amount:{
                        min:1,
                        max:24194810.25 
                    }
                },
                Colgate_Palmolive:{
                    id:15,
                    name:"CL",
                    tradeValue:"$73.30",
                    amount:{
                        min:1,
                        max:41226.90 
                    }
                },
                Comcast:{
                    id:16,
                    name:"CMCSA",
                    tradeValue:"$31.02",
                    amount:{
                        min:1,
                        max:97419.13 
                    }
                },
                COSTCO:{
                    id:17,
                    name:"COST",
                    tradeValue:"$484.70",
                    amount:{
                        min:1,
                        max:6234.58 
                    }
                },
                SalesForce:{
                    id:18,
                    name:"CRM",
                    tradeValue:"$139.82",
                    amount:{
                        min:1,
                        max:21613.02 
                    }
                },
                Chevron:{
                    id:19,
                    name:"CVX",
                    tradeValue:"$183.14",
                    amount:{
                        min:1,
                        max:16500.67 
                    }
                },
                Disney:{
                    id:20,
                    name:"DIS",
                    tradeValue:"$99.58",
                    amount:{
                        min:1,
                        max:30346.77 
                    }
                },
                eBay:{
                    id:21,
                    name:"EBAY",
                    tradeValue:"$39.84",
                    amount:{
                        min:1,
                        max:75851.70 
                    }
                },
                Fastly:{
                    id:22,
                    name:"FSLY",
                    tradeValue:"$8.69",
                    amount:{
                        min:1,
                        max:347748.19 
                    }
                },
                Google:{
                    id:23,
                    name:"GOOGL",
                    tradeValue:"$86.49",
                    amount:{
                        min:1,
                        max:34939.67 
                    }
                },
                Goldman_Sachs:{
                    id:24,
                    name:"GS",
                    tradeValue:"$357.60",
                    amount:{
                    min:1,
                    max: 8450.59 
                }
                },
                IBM:{
                    id:25,
                    name:"IBM",
                    tradeValue:"$137.00",
                    amount:{
                        min:1,
                        max:22057.90 
                    }
                },
                JP_Morgan:{
                    id:26,
                    name:"JP",
                    tradeValue:"$130.65",
                    amount:{
                        min:1,
                        max:23129.98 
                    }
                },
                Coca_Cola:{
                    id:27,
                    name:"KO",
                    tradeValue:"$59.05",
                    amount:{
                        min:1,
                        max:51175.81 
                    }
                },
                MasterCard:{
                    id:28,
                    name:"MA",
                    tradeValue:"$317.51",
                    amount:{
                        min:1,
                        max:9517.60
                    }
                },
                McDonald:{
                    id:29,
                    name:"MCD",
                    tradeValue:"$274.31",
                    amount:{
                        min:1,
                        max:11016.48 
                    }
                },
                MicroSoft:{
                    id:30,
                    name:"MSFT",
                    tradeValue:"$221.33",
                    amount:{
                        min:1,
                        max:13653.51 
                    }
                },
                Motorola:{
                    id:31, 
                    name:"MSI",
                    tradeValue:"$254.87",
                    amount:{
                        min:1,
                        max:11856.76 
                    }
                },
                Netflix:{
                    id:32,
                    name:"NFLX",
                    tradeValue:"$261.00",
                    amount:{
                        min:1,
                        max:11578.28 
                    }
                },
                Nike:{
                    id:33,
                    name:"NKE",
                    tradeValue:"$95.60",
                    amount:{
                        min:1,
                        max:31610.17 
                    }
                },
                Pfizer:{
                    id:34,
                    name:"PFE",
                    tradeValue:"$47.29",
                    amount:{
                        min:1,
                        max:63902.13 
                    }
                },
                Paypal:{
                    id:35,
                    name:"PYPL",
                    tradeValue:"$74.94",
                    amount:{
                        min:1,
                        max:40324.68 
                    }
                },
                Ferrari:{
                    id:36,
                    name:"RACE",
                    tradeValue:"$199.20",
                    amount:{
                        min:1,
                        max:15170.34 
                    }
                },
                Ralph_Lauren:{
                    id:37,
                    name:"RL",
                    tradeValue:"$95.06",
                    amount:{
                        min:1,
                        max:31789.73 
                    }
                },
                Star_Bucks:{
                    id:38,
                    name:"SBUX",
                    tradeValue:"$91.66",
                    amount:{
                        min:1,
                        max:32968.93 
                    }
                },
                At_t:{
                    id:39,
                    name:"T",
                    tradeValue:"$18.29",
                    amount:{
                        min:1,
                        max:165223.17 
                    }
                },
                Toyota_Motor:{
                    id:40,
                    name:"TYO",
                    tradeValue:"$137.55",
                    amount:{
                        min:1,
                        max:21969.70 
                    }
                },
                Tesla:{
                    id:41,
                    name:"TSLA",
                    tradeValue:"$208.68",
                    amount:{
                        min:1,
                        max:14481.18 
                    }
                },
                Twitter:{
                    id:42,
                    name:"TWTR",
                    tradeValue:"$53.86",
                    amount:{
                        min:1,
                        max:56107.16
                    }
                },
                Visa:{
                    id:43,
                    name:"V",
                    tradeValue:"$196.98",
                    amount:{
                        min:1,
                        max:15341.31 
                    }
                },
                Verizon:{
                    id:44,
                    name:"VZ",
                    tradeValue:"$37.30",
                    amount:{
                        min:1,
                        max:81016.94 
                    }
                },
                Wells_Fargo:{
                    id:45,
                    name:"WFC",
                    tradeValue:"$46.65",
                    amount:{
                        min:1,
                        max:64778.82 
                    }
                },
                Walmart:{
                    id:46,
                    name:"WMT",
                    tradeValue:"$140.97",
                    amount:{
                        min:1,
                        max:21436.70 
                    }
                },
                Exxon_Mobil:{
                    id:47,
                    name:"XOM",
                    tradeValue:"$112.20",
                    amount:{
                        min:1,
                        max:26933.44 
                    }
                }
            }
        res.status(200).json({message:"Stocks", stocks})
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
        const {id} = req.body 
        const openTrade = await stockTrade.find({ user:id, setTimer:{$gt: Date.now()} })
        res.status(200).json({openTrade})
    }

    async getCloseTradeV2(req,res) {
        const {id} = req.body
        const closeTrade =  await stockTrade.find({user:id, setTimer:{$lt: Date.now()} })
        res.status(200).json({closeTrade})
    }

}

module.exports = new Stock()