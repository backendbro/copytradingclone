const {model, Schema} = require('mongoose')

const VerifiedSchema = new Schema ({
    email:{type:String},
    IdentityVerification:{type:String, default:"Pending"},
    AddressVerification:{type:String, default:"Pending"},
    user:{ type: Schema.Types.ObjectId, ref:"User" }
}, {timestamps:true})

module.exports = model('Verified', VerifiedSchema)