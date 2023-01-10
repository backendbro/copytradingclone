const stockTrade = require('../models/Stock')
const moment = require('moment')
const AmountPaid = require('../models/AmountPaid')

class Stock {

    async getCurrencies(req,res) {
        const currency = {
                AUD_CAD:{
                    id:1,
                    name:" AUD/CAD",
                    tradeValue:0.87,
                    startingTrade:"0.8787 - 0.8877",
                    optionsUrl:`shorturl.at/HLOT1`,
                    amount:{
                        num:1,
                        max:3455418.15 
                    }
                },
                AUD_CHF:{
                    id:2,
                    name:"AUD/CHF",
                    tradeValue:0.64,
                    startingTrade:"0.6361 - 0.6421",
                    optionsUrl:`shorturl.at/HLOT1`,
                    amount:{
                        num:1,
                        max:4723292.93 
                    }
                },
                AUD_JPY:{
                    id:3,
                    name:"AUD/JPY",
                    tradeValue:94.12,
                    startingTrade:"92.64 - 94.25",
                    optionsUrl:"shorturl.at/HLOT1",
                    amount:{
                        num:1,
                        max:2764593.91 
                    }
                },
                AUD_SGD:{
                    id:5,
                    name:"AUD/SDG",
                    tradeValue:0.91,
                    startingTrade:"0.9115 - 0.9198",
                    optionsUrl:"shorturl.at/HLOT1",
                    amount:{
                        num:1,
                        max:3335982.81 
                    }
                },
                AUD_USD:{
                    id:6,
                    name:"AUD/USD",
                    tradeValue:0.64,
                    startingTrade:"0.6579 - 0.6679",
                    optionsUrl:"shorturl.at/HLOT1",
                    amount:{
                        num:1,
                        max:4713635.20 
                    }
                },
                CAD_CHF:{
                    id:7,
                    name:"CAD/CHF",
                    tradeValue:0.73,
                    startingTrade:"0.7205 - 0.7253",
                    optionsUrl:"https://image.shutterstock.com/image-vector/canada-flag-vector-graphic-rectangle-260nw-1718246821.jpg",
                    amount:{
                        num:1,
                        max:4127958.39 
                    }
                },
                CAD_HKD:{
                    id:8,
                    name:"CAD/HKD",
                    tradeValue:5.75,
                    startingTrade:"5.8694 - 5.9023",
                    optionsUrl:"https://image.shutterstock.com/image-vector/canada-flag-vector-graphic-rectangle-260nw-1718246821.jpg",  
                    amount:{
                        num:1,
                        max:524844.07 
                    }
                },
                CAD_JPY:{
                    id:9,
                    name:"CAD/JPY",
                    tradeValue:107.68,
                    startingTrade:"104.43 - 106.72",
                    optionsUrl:"https://image.shutterstock.com/image-vector/canada-flag-vector-graphic-rectangle-260nw-1718246821.jpg",
                    amount:{
                        num:1,
                        max:28044.65 
                    }
                },
                CAD_SGD:{   
                    id:10,
                    name:"CAD/SGD",
                    tradeValue:1.04,
                    startingTrade:"1.0343 - 1.0389",
                    optionsUrl:"https://image.shutterstock.com/image-vector/canada-flag-vector-graphic-rectangle-260nw-1718246821.jpg",
                    amount:{
                        num:1,
                        max:2915526.79 
                    }
                },
                EUR_AUD:{
                    id:11,
                    name:"EUR/AUD",
                    tradeValue:1.54,
                    startingTrade:"1.5360 - 1.5462",
                    optionsUrl:"https://image.shutterstock.com/image-vector/flag-europe-european-union-260nw-1931628827.jpg",
                    amount:{
                        num:1,
                        max:1958336.93 
                    }
                },
                EUR_CAD:{
                    id:12,
                    name:"EUR/CAD",
                    tradeValue:1.35,
                    startingTrade:"1.3573 - 1.3670",
                    optionsUrl:"https://image.shutterstock.com/image-vector/flag-europe-european-union-260nw-1931628827.jpg",
                    amount:{
                        num:1,
                        max:2240721.05 
                    }
                },
                EUR_CHF:{
                    id:13,
                    name:"EUR/CAD",
                    tradeValue:0.99,
                    startingTrade:"0.9829 - 0.9876",
                    optionsUrl:"https://image.shutterstock.com/image-vector/flag-europe-european-union-260nw-1931628827.jpg",
                    amount:{
                        num:1,
                        max:3062717.97
                    }
                },
                EUR_GBP:{
                    id:14,
                    name:"EUR/GBP",
                    tradeValue:0.87,
                    startingTrade:"0.8700 - 0.8756",
                    optionsUrl:"https://image.shutterstock.com/image-vector/flag-europe-european-union-260nw-1931628827.jpg",
                    amount:{
                        num:1,
                        max:3489395.00 
                    }
                },
                EUR_JPY:{
                    id:15,
                    name:"EUR/JPY",
                    tradeValue:144.63,
                    startingTrade:"142.68 - 145.04",
                    optionsUrl:"https://image.shutterstock.com/image-vector/flag-europe-european-union-260nw-1931628827.jpg",
                    amount:{
                        num:1,
                        max:20880.04
                    }
                },
                EUR_NZD:{
                    id:16,
                    name:"EUR/NZD",
                    tradeValue:1.69,
                    startingTrade:"1.6911 - 1.7013",
                    optionsUrl:"https://image.shutterstock.com/image-vector/flag-europe-european-union-260nw-1931628827.jpg",
                    amount:{
                        num:1, 
                        max:1784935.16 
                    }
                },
                EUR_USD:{
                    id:17,
                    name:"EUR/USD",
                    tradeValue:0.98,
                    startingTrade:"1.0164 - 1.0279",
                    optionsUrl:"https://image.shutterstock.com/image-vector/flag-europe-european-union-260nw-1931628827.jpg",
                    amount:{
                        num:1,
                        max:3095334.14 
                    }
                },
                GBP_AUD:{
                    id:18,
                    name:"GBP/AUD",
                    tradeValue:1.79,
                    startingTrade:"1.7584 - 1.7738",
                    optionsUrl:"shorturl.at/akS78",
                    amount:{
                        num:1,
                        max:1685559.01
                    }
                },
                GBP_CAD:{
                    id:19,
                    name:"GBP/CAD",
                    tradeValue:1.55,
                    startingTrade:"1.5548 - 1.5652",
                    optionsUrl:"shorturl.at/akS78",
                    amount:{
                        num:1,
                        max:1946321.43 
                    }
                },
                GBP_NZD:{
                    id:20,
                    name:"GBP/NZD",
                    tradeValue:1.95,
                    startingTrade:"1.9388 - 1.9468",
                    optionsUrl:"shorturl.at/akS78",
                    amount:{
                        num:1,
                        max:1544951.32 
                    }
                },
                GBP_USD:{
                    id:21,
                    name:"GBP/USD",
                    tradeValue:1.13,
                    startingTrade:"1.1648 - 1.1774",
                    optionsUrl:"shorturl.at/akS78",
                    amount:{
                        num:1,
                        max:2679002.00 
                    }
                },
                USD_CAD:{
                    id:22,
                    name:"USD/CAD",
                    tradeValue:1.38,
                    startingTrade:"1.3284 - 1.3361",
                    optionsUrl:"https://image.shutterstock.com/image-vector/american-flag-4th-july-illustration-260nw-1422095750.jpg",
                    amount:{
                        num:1,
                        max:2193968.48 
                    }
                },
                USD_CHF:{
                    id:23,
                    name:"USD/CHF",
                    tradeValue:1.01,
                    startingTrade:"0.9582 - 0.9683",
                    optionsUrl:"https://image.shutterstock.com/image-vector/american-flag-4th-july-illustration-260nw-1422095750.jpg",
                    amount:{
                        num:1,
                        max:2983149.57
                    }
                },
                USD_JPY:{
                    id:24,
                    name:"USD/JPY",
                    tradeValue:148.23,
                    startingTrade:"139.79 - 142.49",
                    optionsUrl:"https://image.shutterstock.com/image-vector/american-flag-4th-july-illustration-260nw-1422095750.jpg",
                    amount:{
                        num:1,
                        max:20372.73 
                    }
                },
                USD_MXN:{
                    id:25, 
                    name:"USD/MXN",
                    tradeValue:48.23,
                    startingTrade:"19.2659 - 19.4213",
                    optionsUrl:"https://image.shutterstock.com/image-vector/american-flag-4th-july-illustration-260nw-1422095750.jpg",
                    amount:{
                        num:1,
                        max:153338.14 
                    }
                },
                USD_TRY:{
                    id:27,
                    name:"USD/TRY",
                    tradeValue:18.6,
                    startingTrade:"18.4627 - 18.5885",
                    optionsUrl:"https://image.shutterstock.com/image-vector/american-flag-4th-july-illustration-260nw-1422095750.jpg",
                    amount:{
                        num:1,
                        max:162171.33
                    }
                },
                USD_THB:{
                    id:28,
                    name:"USD/THB",
                    tradeValue:36.17,
                    startingTrade:"35.690 - 36.210",
                    optionsUrl:"https://image.shutterstock.com/image-vector/american-flag-4th-july-illustration-260nw-1422095750.jpg",
                    amount:{
                        num:1,
                        max:79459.34
                    }
                },
                USD_ZAR:{
                    id:29,
                    name:"USD/ZAR",
                    tradeValue:18.42,
                    startingTrade:"17.2123 - 17.4672",
                    optionsUrl:"https://image.shutterstock.com/image-vector/american-flag-4th-july-illustration-260nw-1422095750.jpg",
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
                displayName : "Aave",
                name:"Aave",
                tradeValue:67.10,
                startingTrade:"63.24 - 70.63",
                optionsUrl:"https://assets.coingecko.com/coins/images/12645/small/AAVE.png?1601374110",
                amount:{
                    num:1,
                    max:35707.19
                }
            },
            Cardano: {
                id:2,
                displayName:"Cardano",
                name:"Ada",
                tradeValue:0.3623,
                startingTrade:"0.3454 - 0.3793",
                optionsUrl:"https://assets.coingecko.com/coins/images/975/small/cardano.png?1547034860",
                amount:{
                    num:1,
                    max:7552848.75 
                }
            },
            Algorand:{
                id:3,
                displayName:"Algorand",
                name:"ALGO",
                tradeValue: 0.3133,
                startingTrade:"0.2894 - 0.3378",
                optionsUrl:"https://assets.coingecko.com/coins/images/4380/small/download.png?1547039725",
                amount:{
                    num:1,
                    max: 8540386.19
                }
            },
            Bitcoin_Cash: {
                id:4,
                displayName:"Bitcoin Cash",
                name:"BCH",
                tradeValue: 101.31,
                startingTrade:"91.48 - 106.01",
                optionsUrl:"https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png?1594689492",
                amount:{
                    num:1,
                    max:26281.53
                }
            },
            Binance_Coin: {
                id:5,
                displayName:"Binance Coin",
                tradeValue:310.69,
                name: "BNB",
                startingTrade:"265.51 - 310.96",
                optionsUrl:"https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1644979850",
                amount: {
                    num:1,
                    max:9719.98
                }
            },
            Bitcoin: {
                id:6,
                displayName:"Bitcoin",
                name:"BTC",
                tradeValue: "17,340",
                startingTrade:"16,226.0 - 18,156.0",
                optionsUrl:"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
                amount: {
                    num: 1,
                    max: 147.38
                }
            },
            PanCake_Swap : {
                id:7,
                displayName:"Pancake Swap",
                name:"Cake",
                tradeValue: 4.153,
                startingTrade:"4.094 - 4.316",
                optionsUrl:"https://assets.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png?1629359065",
                amount: {
                    num:1,
                    max: 647928.90
                }
            },
            Compound: {
                id:8,
                displayName:"Compound",
                name:"COMP",
                tradeValue:50.06,
                startingTrade:"36.83 - 42.00",
                optionsUrl:"https://assets.coingecko.com/coins/images/10775/small/COMP.png?1592625425",
                amount: {
                    num:1,
                    max:60331.07
                }
            },
            Dash: {
                id:9,
                displayName:"Dash",
                name:"DASH",
                tradeValue:36.61,
                startingTrade:"33.85 - 37.70",
                optionsUrl:"https://assets.coingecko.com/coins/images/19/small/dash-logo.png?1548385930",
                amount: {
                    num:1,
                    max:72879.20
                }
            },
            DogeCoin: {
                id:10,
                displayName:"Doge Coin",
                name:"doge",
                tradeValue:0.02,
                startingTrade:"0.081200 - 0.094610",
                optionsUrl:"https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547792256",
                amount: {
                    num:1,
                    max:160355498.11
                }
            },
            Polkadot:{
                id:11,
                displayName:"Polkadot",
                name:"DOT",
                tradeValue:5.821,
                startingTrade:"5.651 - 5.976",
                optionsUrl:"https://assets.coingecko.com/coins/images/12171/small/polkadot.png?1639712644",
                amount:{
                    num:1,
                    max:452425.60
                }
            },
            EOS:{
                id:12,
                displayName:"EOS",
                name:"EOS",
                tradeValue:0.9330,
                startingTrade:"0.8620 - 0.9620",
                optionsUrl:"https://assets.coingecko.com/coins/images/738/small/eos-eos-logo.png?1547034481",
                amount:{
                    num:1,
                    max:2711961.46
                }
            },
            Ethereum: {
                id:13,
                displayName:"Ethereum",
                name:"ETH",
                tradeValue:"$1,278.43",
                startingTrade:"1,175.13 - 1,350.00",
                optionsUrl:"https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
                amount:{
                    num:1,
                    max: 1906.85 
                }
            },
            Filecoin:{
                id:14,
                displayName:"File Coin",
                name:"FIL",
                tradeValue:4.51,
                startingTrade:"4.32 - 4.79",
                optionsUrl:"https://assets.coingecko.com/coins/images/12817/small/filecoin.png?1602753933",
                amount: {
                    num:1,
                    max: 562580.44 
                }
            },
            FTX_Token:{
                id:15,
                displayName:"FTX Token",
                name:"FTT",
                tradeValue:3.4870,
                startingTrade:"2.5708 - 4.4136",
                optionsUrl:"https://assets.coingecko.com/coins/images/9026/small/F.png?1609051564",
                amount:{
                    num:1,
                    max: 118140.57
                }
            },
            Litecoin : {
                id:16,
                displayName:"Litecoin",
                name:"LTC",
                tradeValue:62.420,
                startingTrade:"59.400 - 64.210",
                optionsUrl:"https://assets.coingecko.com/coins/images/2/small/litecoin.png?1547033580",
                amount: {
                    num:1,
                    max:55065.44
                }
            },
            Polygon: {
                id:17,
                displayName:"Polygon",
                name:"Matic",
                tradeValue:1.077,
                startingTrade:"0.906 - 1.162",
                optionsUrl:"https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912",
                amount: {
                    num:1,
                    max:3326677.77
                }
            },
            Thorchain: {
                id:18,
                displayName:"Thorchain",
                name:"Rune",
                tradeValue:1.196,
                startingTrade:"1.109 - 1.258",
                optionsUrl:"https://assets.coingecko.com/coins/images/6595/small/RUNE.png?1614160507",
                amount: {
                    num:1,
                    max: 1941716.21
                }
            },
            Shiba_Inu:{
                id:19,
                displayName:"Shiba Inu",
                name:"SHIB",
                tradeValue:0.00,
                startingTrade:"0.00000968 - 0.00001053",
                optionsUrl:"https://assets.coingecko.com/coins/images/23969/small/shibm.png?1645868517",
                amount: {
                    num:1,
                    max:251018793586.4
                }
            },
            Solana: {
                id:20,
                displayName:"Solana",
                name:"SOL",
                tradeValue:18.056,
                startingTrade:"15.861 - 18.265",
                optionsUrl:"https://assets.coingecko.com/coins/images/4128/small/solana.png?1640133422",
                amount: {
                    num:1,
                    max:90615.17
                }
            },
            Theta: {
                id:21,
                displayName:"Theta",
                name:"THETA",
                tradeValue:0.9820,
                startingTrade:"0.9320 - 1.0310",
                optionsUrl:"https://assets.coingecko.com/coins/images/2538/small/theta-token-logo.png?1548387191",
                amount:{
                    num:1,
                    max:2633966.20
                }
            },
            Tron:{
                id:22,
                displayName:"Tron",
                name:"TRX",
                tradeValue:0.057,
                startingTrade:"0.05564 - 0.06236",
                optionsUrl:"https://assets.coingecko.com/coins/images/1094/small/tron-logo.png?1547035066",
                amount:{
                    num:1,
                    max:48061529.70 
                }
            },
            Uniswap: {
                id:23,
                displayName:"Uniswap",
                name:"UNI",
                tradeValue:5.76,
                startingTrade:"5.3600 - 5.9100",
                optionsUrl:"",
                amount:{
                    num:1,
                    max:441690.01 
                }
            },
            Stellar: {  
                id: 23,
                displayName:"Stellar",
                name: "XLM",
                tradeValue:0.09,
                startingTrade:"0.08450 - 0.10270",
                optionsUrl:"https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604",
                amount:{
                    num:1,
                    max:27241196.47 
                }
            },
            Monero: {
                id:25,
                displayName:"Monero",
                name:"XMR",
                tradeValue:129.06,
                startingTrade:"124.200 - 135.000",
                optionsUrl:"https://assets.coingecko.com/coins/images/69/small/monero_logo.png?1547033729",
                amount:{
                    num:1,
                    max:20259.91 
                }
            },
            Tezos: {
                id:26,
                displayName:"Tezos",
                name:"XTZ",
                tradeValue:1.07,
                startingTrade:"1.06100 - 1.15900",
                optionsUrl:"https://assets.coingecko.com/coins/images/976/small/Tezos-logo.png?1547034862",
                amount:{
                    num:1,
                    max:2122692.87 
                }
            },
            ZCASH: {
                id:27,
                displayName:"ZCASH",
                name:"ZEC",
                tradeValue:39.37,
                startingTrade:"36.19 - 40.23",
                optionsUrl:"https://assets.coingecko.com/coins/images/486/small/circle-zcash-color.png?1547034197",
                amount:{
                    num:1,
                    max:57066.09 
                }
            },
            Bitcoin_SV:{
                id:28,
                displayName:"Bitcoin SV",
                name:"BSV",
                tradeValue:39.15,
                startingTrade:"36.78 - 39.94",
                optionsUrl:"https://assets.coingecko.com/coins/images/6799/small/BSV.png?1558947902",
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
                    displayName:"Apple",
                    name:"AAPL",
                    tradeValue:146.87,
                    startingTrade:"139.50 - 146.87",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/apple--big.svg",
                    amount:{
                        num:1,
                        max:21880.62 
                    }
                },
                Adobe:{
                    id:2,
                    displayName:"Adobe",
                    name:"ADBE",
                    tradeValue:329.95,
                    startingTrade:"317.87 - 330.37",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/adobe--big.svg",
                    amount:{
                        num:1,
                        max:10566.20 
                    }
                },
                Analog_Devices:{
                    id:3,
                    displayName:"Analog Devices",
                    name:"ADI",
                    tradeValue:160.37,
                    startingTrade:"154.50 - 160.76",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/analog-devices--big.svg",
                    amount:{
                        num:1,
                        max:20943.46 
                    }
                },
                American_International_Group:{
                    id:4,
                    displayName:"American International Group",
                    name:"AIG",
                    tradeValue:60.59,
                    startingTrade:"59.61 - 60.92",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/american-international-group--big.svg",
                    amount:{
                        num:1,
                        max:52382.25 
                    }
                },
                AMC_Holding:{
                    id:5,
                    displayName:"AMC Holding",
                    name:"AMC",
                    tradeValue:6.13,
                    startingTrade:"5.35 - 6.27",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/amc-entertainment-holdings--big.svg",
                    amount:{
                        num:1,
                        max:544492.22 
                    }
                },
                Amazon:{
                    id:6,
                    displayName:"Amazon",
                    name:"AMZN",
                    tradeValue:96.63,
                    startingTrade:"91.65 - 98.69",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/amazon--big.svg",
                    amount:{
                        num:1,
                        max:33157.03 
                    }
                },
                ASML:{
                    id:7,
                    displayName:"ASML",
                    name:"ASML",
                    tradeValue:560.79,
                    startingTrade:"520.35 - 561.82",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/asml--big.svg",
                    amount:{
                        num:1,
                        max:6443.49 
                    }
                },
                American_Express:{
                    id:8,
                    displayName:"American Express",
                    name:"AXP",
                    tradeValue:154.75,
                    startingTrade:"151.31 - 155.79",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/american-express--big.svg",
                    amount:{
                        num:1,
                        max:20898.56 
                    }
                },
                Boeing:{
                    id:9,
                    displayName:"Boeing",
                    name:"BA",
                    tradeValue:177.58,
                    startingTrade:"171.75 - 179.32",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/boeing--big.svg",
                    amount:{
                        num:1,
                        max:18895.34  
                    }
                },
                Alibaba:{
                    id:10,
                    displayName:"Alibaba",
                    name:"BABA",
                    tradeValue:69.77,
                    startingTrade:"68.00 - 69.99",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/alibaba--big.svg", 
                    amount:{
                        num:1,
                        max:43275.55 
                    }
                },
                Bank_Of_America:{
                    id:11,
                    displayName:"Bank of America",
                    name:"BAC",
                    tradeValue:38.13,
                    startingTrade:"37.14 - 38.22",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/bank-of-america--big.svg",
                    amount:{
                        min:1,
                        max:82117.71 
                    }
                },
                CitiGroup:{
                    id:12,
                    displayName:"CitiGroup",
                    name:"C",
                    tradeValue:48.42,
                    startingTrade:"46.56 - 48.76",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/citigroup--big.svg",
                    amount:{
                        min:1,
                        max:67005.14 
                    }
                },
                Caterpillar:{
                    id:13,
                    displayName:"Caterpillar",
                    name:"CAT",
                    tradeValue:232.45,
                    startingTrade:"226.33 - 232.59",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/caterpillar--big.svg",
                    amount:{
                        min:1,
                        max:13300.17 
                    }
                },
                Chamber_Energy:{
                    id:14,
                    displayName:"Chamber Energy",
                    name:"CEI",
                    tradeValue:0.12,
                    startingTrade:"0.1250 - 0.1297",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/camber-energy--big.svg",
                    amount:{
                        min:1,
                        max:24194810.25 
                    }
                },
                Colgate_Palmolive:{
                    id:15,
                    displayName:"Colgate Palmolive",
                    name:"CL",
                    tradeValue:74.97,
                    startingTrade:"73.79 - 75.11",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/colgate-palmolive--big.svg",
                    amount:{
                        min:1,
                        max:41226.90 
                    }
                },
                Comcast:{
                    id:16,
                    displayName:"Comcast",
                    name:"CMCSA",
                    tradeValue:32.77,
                    startingTrade:"32.16 - 32.90",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/comcast--big.svg",
                    amount:{
                        min:1,
                        max:97419.13 
                    }
                },
                COSTCO:{
                    id:17,
                    displayName:"Costco",
                    name:"COST",
                    tradeValue:513.13,
                    startingTrade:"501.40 - 514.85",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/costco-wholesale--big.svg",
                    amount:{
                        min:1,
                        max:6234.58 
                    }
                },
                SalesForce:{
                    id:18,
                    displayName:"SalesForce",
                    name:"CRM",
                    tradeValue:156.30,
                    startingTrade:"149.73 - 156.37",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/salesforce--big.svg",
                    amount:{
                        min:1,
                        max:21613.02 
                    }
                },
                Chevron:{
                    id:19,
                    displayName:"Chevron",
                    name:"CVX",
                    tradeValue:181.30,
                    startingTrade:"178.04 - 182.33",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/chevron--big.svg",
                    amount:{
                        min:1,
                        max:16500.67 
                    }
                },
                Disney:{
                    id:20,
                    displayName:"Disney",
                    name:"DIS",
                    tradeValue:90.46,
                    startingTrade:"87.61 - 90.50",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/walt-disney--big.svg",
                    amount:{
                        min:1,
                        max:30346.77 
                    }
                },
                eBay:{
                    id:21,
                    displayName:"eBay",
                    name:"EBAY",
                    tradeValue:44.66,
                    startingTrade:"42.26 - 44.79",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/ebay--big.svg",
                    amount:{
                        min:1,
                        max:75851.70 
                    }
                },
                Fastly:{
                    id:22,
                    displayName:"Fastly",
                    name:"FSLY",
                    tradeValue:9.58,
                    startingTrade:"8.60 - 9.63",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/fastly-inc--big.svg",
                    amount:{
                        min:1,
                        max:347748.19 
                    }
                },
                Google:{
                    id:23,
                    displayName:"Google",
                    name:"GOOGL",
                    tradeValue:93.94,
                    startingTrade:"91.61 - 94.39",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/alphabet--big.svg",
                    amount:{
                        min:1,
                        max:34939.67 
                    }
                },
                Goldman_Sachs:{
                    id:24,
                    displayName:"Goldman Sachs",
                    name:"GS",
                    tradeValue:378.31,
                    startingTrade:"369.74 - 380.43",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/golden-sachs-etf-trust-goldman--big.svg",
                    amount:{
                    min:1,
                    max: 8450.59 
                }
                },
                IBM:{
                    id:25,
                    displayName:"IBM",
                    name:"IBM",
                    tradeValue:141.23,
                    startingTrade:"138.29 - 141.37",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/international-bus-mach--big.svg",
                    amount:{
                        min:1,
                        max:22057.90 
                    }
                },
                JP_Morgan:{
                    id:26,
                    displayName:"JP Morgan",
                    name:"JPM",
                    tradeValue:135.08,
                    startingTrade:"132.53 - 135.25",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/jpmorgan-chase--big.svg",
                    amount:{
                        min:1,
                        max:23129.98 
                    }
                },
                Coca_Cola:{
                    id:27,
                    displayName:"Coca Cola",
                    name:"KO",
                    tradeValue:60.88,
                    startingTrade:"59.68 - 61.04",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/coca-cola--big.svg",
                    amount:{
                        min:1,
                        max:51175.81 
                    }
                },
                MasterCard:{
                    id:28,
                    displayName:"MasterCard",
                    name:"MA",
                    tradeValue:337.27,
                    startingTrade:"329.16 - 337.40",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/mastercard--big.svg",
                    amount:{
                        min:1,
                        max:9517.60
                    }
                },
                McDonald:{
                    id:29,
                    displayName:"McDonald",
                    name:"MCD",
                    tradeValue:275.88,
                    startingTrade:"272.58 - 281.67",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/mcdonalds--big.svg",
                    amount:{
                        min:1,
                        max:11016.48 
                    }
                },
                MicroSoft:{
                    id:30,
                    displayName:"MicroSoft",
                    name:"MSFT",
                    tradeValue:242.98,
                    startingTrade:"235.00 - 243.33",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/microsoft--big.svg",
                    amount:{
                        min:1,
                        max:13653.51 
                    }
                },
                Motorola:{
                    id:31, 
                    displayName:"Motorola",
                    name:"MSI",
                    tradeValue:242.98,
                    startingTrade:"235.00 - 243.33",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/motorola-solutions--big.svg",
                    amount:{
                        min:1,
                        max:11856.76 
                    }
                },
                Netflix:{
                    id:32,
                    displayName:"Netflix",
                    name:"NFLX",
                    tradeValue:274.97,
                    startingTrade:"260.09 - 275.36",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/netflix--big.svg",
                    amount:{
                        min:1,
                        max:11578.28 
                    }
                },
                Nike:{
                    id:33,
                    displayName:"Nike",
                    name:"NKE",
                    tradeValue:99.49,
                    startingTrade:"96.23 - 99.68",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/nike--big.svg",
                    amount:{
                        min:1,
                        max:31610.17 
                    }
                },
                Pfizer:{
                    id:34,
                    displayName:"Pfizer",
                    name:"PFE",
                    tradeValue:47.38,
                    startingTrade:"46.85 - 47.75",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/pfizer--big.svg",
                    amount:{
                        min:1,
                        max:63902.13 
                    }
                },
                Paypal:{
                    id:35,
                    displayName:"Paypal",
                    name:"PYPL",
                    tradeValue:86.80,
                    startingTrade:"83.11 - 86.90",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/paypal--big.svg",
                    amount:{
                        min:1,
                        max:40324.68 
                    }
                },
                Ferrari:{
                    id:36,
                    displayName:"Ferrari",
                    name:"RACE",
                    tradeValue:212.80,
                    startingTrade:"210.82 - 214.23",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/ferrari--big.svg",
                    amount:{
                        min:1,
                        max:15170.34 
                    }
                },
                Ralph_Lauren:{
                    id:37,
                    displayName:"Ralph Lauren",
                    name:"RL",
                    tradeValue:95.45,
                    startingTrade:"93.13 - 97.58",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/ralph-lauren--big.svg",
                    amount:{
                        min:1,
                        max:31789.73 
                    }
                },
                Star_Bucks:{
                    id:38,
                    displayName:"StarBucks",
                    name:"SBUX",
                    tradeValue:96.26,
                    startingTrade:"93.33 - 96.42",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/starbucks--big.svg",
                    amount:{
                        min:1,
                        max:32968.93 
                    }
                },
                At_t:{
                    id:39,
                    displayName:"AT&T",
                    name:"T",
                    tradeValue:18.84,
                    startingTrade:"18.58 - 18.97",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/at-and-t--big.svg",
                    amount:{
                        min:1,
                        max:165223.17 
                    }
                },
                Toyota_Motor:{
                    id:40,
                    displayName:"Toyota",
                    name:"TM",
                    tradeValue:140.52,
                    startingTrade:"137.56 - 140.57",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/toyota--big.svg",
                    amount:{
                        min:1,
                        max:21969.70 
                    }
                },
                Tesla:{
                    id:41,
                    displayName:"Tesla",
                    name:"TSLA",
                    tradeValue:190.72,
                    startingTrade:"180.03 - 191.00",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/tesla--big.svg",
                    amount:{
                        min:1,
                        max:14481.18 
                    }
                },
                Twitter:{
                    id:42,
                    displayName:"Twitter",
                    name:"TWTR",
                    tradeValue:53.86,
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/twitter--big.svg",
                    amount:{
                        min:1,
                        max:56107.16
                    }
                },
                Visa:{
                    id:43,
                    displayName:"Visa",
                    name:"V",
                    tradeValue:205.57,
                    startingTrade:"200.02 - 205.76",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/visa--big.svg",
                    amount:{
                        min:1,
                        max:15341.31 
                    }
                },
                Verizon:{
                    id:44,
                    displayName:"Verizon",
                    name:"VZ",
                    tradeValue:38.52,
                    startingTrade:"37.81 - 38.55",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/verizon--big.svg",
                    amount:{
                        min:1,
                        max:81016.94 
                    }
                },
                Wells_Fargo:{
                    id:45,
                    displayName:"Wells Fargo",
                    name:"WFC",
                    tradeValue:47.95,
                    startingTrade:"46.93 - 48.11",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/wells-fargo--big.svg",
                    amount:{
                        min:1,
                        max:64778.82 
                    }
                },
                Walmart:{
                    id:46,
                    displayName:"Walmart",
                    name:"WMT",
                    tradeValue:142.36,
                    startingTrade:"140.50 - 142.69",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/walmart--big.svg",
                    amount:{
                        min:1,
                        max:21436.70 
                    }
                },
                Exxon_Mobil:{
                    id:47,
                    displayName:"Exxon Mobil",
                    name:"XOM",
                    tradeValue:110.50,
                    startingTrade:"107.57 - 110.70",
                    optionsUrl:"https://s3-symbol-logo.tradingview.com/exxon--big.svg",
                    amount:{
                        min:1,
                        max:26933.44 
                    }
                }
            }
        res.status(200).json({message:"Stocks", stocks})
    }



    async simulateTrade(req,res) {
        console.log('Hello world')
        const {time, user, profit} = req.body

        const futureDate = new Date();
        const newDateObj = futureDate.setMinutes(futureDate.getMinutes() + time);
        console.log(new Date(newDateObj))
        return

        req.body.user = user 
        req.body.setTimer =  newDateObj
       
        let amountPaid = await AmountPaid.findOne({user})
        if(!amountPaid){
            return res.status(404).json({message:"BALANCE NOT FOUND"})
        }    
        const balance = amountPaid.balance 
        const newBalance = parseInt(balance) + parseInt(profit) 
        amountPaid = await AmountPaid.findByIdAndUpdate(amountPaid.id, {balance:newBalance}, {new:true})
        
        const trade = await stockTrade.create(req.body)
        res.status(200).json({amountPaid, trade})
    }

    
    async getOpenTradeV1 (req,res) {
        const {id} = req.body 
        const openTrade = await stockTrade.find({setTimer:{$gt: Date.now()} })
        res.status(200).json({openTrade})
    }


    async getCloseTradeV2(req,res) {
        const {id} = req.body
        const closeTrade =  await stockTrade.find({user:id, setTimer:{$lt: Date.now()} })
        res.status(200).json({closeTrade})
    }


}

module.exports = new Stock()