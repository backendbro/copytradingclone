const {model, Schema} = require('mongoose')

module.exports = model('Stock',  new Schema ({
    profit:Number,
    time:Number,
    setTimer:Date,
    user:{type:Schema.Types.ObjectId, ref:"User"},
    trader:{type:Schema.Types.ObjectId, ref:"Trader"},
    change:String,
    tradeType:String,
    coin:String,
    status:String
}))