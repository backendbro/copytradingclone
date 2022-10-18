const {model, Schema} = require('mongoose')

const WithDrawalSchemaCashApp = new Schema ({
    from:{
        type:String,
        required:true
    },
    withdrawalCode:{
        type:Number,
        required:true
    },
    cashTag:{
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

module.exports = model('WithDrawCashApp', WithDrawalSchemaCashApp)