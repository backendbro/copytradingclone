const {model, Schema} = require('mongoose')

const AmountPaid = new Schema ({
    amount:{type:Array},
    balance:Number,
    user:{ type: Schema.Types.ObjectId, ref:"User" } 
})

module.exports = model('Amount', AmountPaid)