const {model, Schema} = require('mongoose')

const DepositSchema  = new Schema ({
    amount:{
        type:String,
        required:true
    },
    paymentMethod:{
        type:String,
        enum:['LTC Litecoin', 'USDT Tether', 'BTC BITCOIN', 'ETH ETHEREUM'],
        required:true
    },
    to:{
        type:String,
        enum:['Trading', 'Bitcoin Minning', 'Ethereum Minning', 'Dogecoin Minning', 'Binance Coin Minning'],
        required:true
    },
    depositImage:String,
    status:{
        type:String,
        default:'Pending'
    },  
    failedStatusDate:Date,
    user:{ type: Schema.Types.ObjectId, ref:"User" }
}, {timestamps:true})

module.exports = model('Deposit', DepositSchema)