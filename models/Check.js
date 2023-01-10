const {model, Schema} = require('mongoose')

const CheckSchema  = new Schema ({
    user:{ type: Schema.Types.ObjectId, ref:"User" }
}, {timestamps:true})

module.exports = model('Check', CheckSchema)