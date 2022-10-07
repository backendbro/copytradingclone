const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

const connectDB = require('./database/database')
const notFound = require('./middlewares/notFound')

//app.use(cors());
const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
app.use(express.json())
app.use(express.urlencoded({extended:false}))


dotenv.config()

connectDB()


app.get('/', (req,res) => {
    res.send('Hello world')
})


const auth = require('./routes/auth')
const verifyId = require('./routes/verifyId')
const withDraw = require('./routes/WithdrawalService')
const Referral = require('./routes/referral')
const Services = require('./routes/AccountService')
const Deposits = require('./routes/Deposits')
const Contract = require('./routes/Contract')
const Wallet = require('./routes/Wallet')

app.use('/api/user', auth)
app.use('/api/verify-id', verifyId)
app.use('/api/withdraw', withDraw)
app.use('/api/referral', Referral)
app.use('/api/account-service', Services)
app.use('/api/deposits', Deposits)
app.use('/api/contract', Contract)
app.use('/api/wallet', Wallet)

app.use(notFound)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`port started on: http://localhost:${port}`)
})
