
const api = {
    Crypto: {
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
    },
    Currency:{
        AUD_CAD:{
            id:1,
            name:"BSV",
            tradeValue:"$0.87"
        }
    }
}



const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const app = express()


const connectDB = require('./database/database')
const notFound = require('./middlewares/notFound')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

dotenv.config()

connectDB()


app.get('/', (req,res) => {
    res.send('Hello world 5')
})



const auth = require('./routes/auth')
const verifyId = require('./routes/verifyId')
const withDraw = require('./routes/WithdrawalService')
const Referral = require('./routes/referral')
const Services = require('./routes/AccountService')
const Deposits = require('./routes/Deposits')
const Wallet = require('./routes/Wallet')
const Trader = require('./routes/Trader')
const AdminUsers = require('./routes/AdminUsers')
const Action = require('./routes/Action')
const Copier = require('./routes/Copiers')
const Stock = require('./routes/Stock')

app.use('/api/user', auth)
app.use('/api/verify-id', verifyId)
app.use('/api/withdraw', withDraw)
app.use('/api/referral', Referral)
app.use('/api/account-service', Services)
app.use('/api/deposits', Deposits)
app.use('/api/wallet', Wallet)
app.use('/api/trader', Trader)
app.use('/api/admin-user', AdminUsers)
app.use('/api/action', Action)
app.use('/api/copiers', Copier)
app.use('/api/stock', Stock)

app.use(notFound)



const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`port started on: http://localhost:${port}`)
})
