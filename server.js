const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser');


const app = express()
dotenv.config()

// app.set('view engine', 'hbs');
// app.engine('hbs', handlebars({ layoutsDir: __dirname + '/views/layouts', extname: 'hbs' }));

const connectDB = require('./database/database')
const notFound = require('./middlewares/notFound')

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());


connectDB()


app.get('/', (req,res) => {
    res.send('Hello world 6')
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
const Contact = require('./routes/Contact')
const Delete_Action = require('./routes/Delete_Action')

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
app.use('/api/contact-us', Contact)
app.use('/api/delete', Delete_Action)

app.use(notFound)



const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`port started on: http://localhost:${port}`)
})

