const {model, Schema} = require('mongoose')

const TradeSchema  = new Schema ({
    amount:{
        type:Number,
        required:true
    },
    paymentMethod:{
        type:String,
        enum:['LTC Litecoin', 'USDT Tether ERC20', 'BTC BITCOIN', 'ETH ETHEREUM'],
        required:true
    },
    to:{
        type:String,
        enum:['Trading', 'Bitcoin Minning', 'Ethereum Minning', 'Dogecoin Minning', 'Binance Coin Minning'],
        required:true
    },
    depositImage:String,
    user:{ type: Schema.Types.ObjectId, ref:"User" },
    confirmed:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = model('Trade', TradeSchema)