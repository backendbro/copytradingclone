const { model, Schema } = require('mongoose')

const WalletSchema = new Schema ({
    symbol:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    walletAddress:{
        type:String,    
        required:true
    },
    tag:String,
    Network:String,
    photo:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = model('Wallet', WalletSchema)