const {model, Schema} = require('mongoose')

const WithDrawalSchemaBank = new Schema ({
    from:{
        type:String,
        required:true
    },
    withdrawalCode:{
        type:Number,
        required:true
    },
    bankName:{
        type:String,
        required:true
    },
    accountNumber:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
    user:{ type: Schema.Types.ObjectId, ref:"User" }
}, {timestamps:true})

module.exports = model('WithDrawBank', WithDrawalSchemaBank)