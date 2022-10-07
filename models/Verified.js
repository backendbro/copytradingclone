const {model, Schema} = require('mongoose')

const VerifiedSchema = new Schema ({
    email:String,
    IdentityVerification:String,
    AddressVerification:String,
    user:{ type: Schema.Types.ObjectId, ref:"User" }
}, {timestamps:true})

module.exports = model('Verified', VerifiedSchema)