const {model,Schema} = require('mongoose')

module.exports = model('List', new Schema ({
    crypto:Array,
    stock:Array,
    currency:Array
}))