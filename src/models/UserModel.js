const { Schema, model } = require('mongoose')
const {customCreateToken} = require('../ultis/jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const UserSchema = new Schema ({
    firstName: {
        type:String,
        required:true,
        trim:true
    },
    lastName: {
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
          ]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    currency:{
        type:String,
        enum:['USD', 'GBP', 'EUR','AUR'],
        required:true
    },
    isValidAcct: {
        type:Boolean,
        default:false
    },
    FACode:String,
    FACodeExp:Date 

    }, {timestamps:true})


UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createToken = function(time){
    const token = customCreateToken(this._id, time)
    return token
}


UserSchema.methods.send2FACode = function(){
    const token = crypto.randomBytes(3).toString('hex')
    this.FACode = token

    this.FACodeExp = Date.now() + 10 * 60 * 1000
    return token
}

module.exports = model('User', UserSchema)