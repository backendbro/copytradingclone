const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

const connectDB = require('./database/database')
const notFound = require('./middlewares/notFound')

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
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
