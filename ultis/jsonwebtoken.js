const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function customCreateToken(payload, time){
    const token = jwt.sign({payload}, "o2roj34923@QEDSGoo1234", { expiresIn: time });
    return token;
}


function decryptJwt(token){
   try {
    const userId = jwt.verify(token, "o2roj34923@QEDSGoo1234")
    return userId.payload
   } catch (error) {
    return
   }
}

const comparePassword = async (password, hashedPassword) => {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
  };

module.exports = {customCreateToken, decryptJwt, comparePassword}