const {model, Schema} = require('mongoose')

const WithDrawalSchemaPaypal = new Schema ({
    from:{
        type:String,
        required:true
    },
    withdrawalCode:{
        type:Number,
        required:true
    },
    paypalEmail:{
        type:String,
        required:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
          ]
    },
    amount:{
        type:String,
        required:true
    },
    approved:{
        type:String,
        default:"pending"
    },
    user:{ type: Schema.Types.ObjectId, ref:"User" }
}, {timestamps:true})

module.exports = model('WithDrawPaypal', WithDrawalSchemaPaypal)