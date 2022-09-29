const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function createSignInTokenRegister(payload){
    const token = jwt.sign({payload}, process.env.secretKey, { expiresIn: process.env.registerExpTime });
    return token;
}

function createSignInTokenLogin(payload){
    const token = jwt.sign({payload}, process.env.secretKey, { expiresIn: process.env.loginExpTime });
    return token;
}


function decryptJwt(token){
   
   try {
    const userId = jwt.verify(token, process.env.secretKey)
    return userId.payload
   } catch (error) {
    console.log(error)
   }
}

const comparePassword = async (password, hashedPassword) => {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
  };

module.exports = {createSignInTokenRegister, decryptJwt, createSignInTokenLogin, comparePassword}