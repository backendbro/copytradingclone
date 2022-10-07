const {model, Schema} = require('mongoose')

const ActionSchema = new Schema ({
    name:String,
    from:String,
    amount:Number,
    action:{type:String, enum:['withDrew', 'invested']},
    currency:{type:String, enum:['USD', 'GBP', 'EUR']}
},{timestamps:true})

module.exports = model("Action", ActionSchema)