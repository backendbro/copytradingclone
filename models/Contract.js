const {model, Schema} = require('mongoose')

const ContractSchema
  = new Schema ({
    amount:{
        type:String,
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
    confirmed:{
        type:Boolean,
        default:false
    },
    user:{ type: Schema.Types.ObjectId, ref:"User" }
}, {timestamps:true})

module.exports = model('Contract', ContractSchema)