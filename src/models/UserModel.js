const { Schema, model } = require('mongoose')
const {createSignInTokenRegister, createSignInTokenLogin} = require('../ultis/jsonwebtoken')
const bcrypt = require('bcryptjs')

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
    FACode:Number,
    FACodeExp:Date 

    }, {timestamps:true})


UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createToken = function(){
    const token = createSignInTokenRegister(this._id)
    return token
}

UserSchema.methods.createTokenLogin = function(){
    const token = createSignInTokenLogin(this._id)
    return token
}

UserSchema.methods.send2FACode = function(){
    
}

module.exports = model('User', UserSchema)