const mongoose = require('mongoose')

const Register = mongoose.Schema({
    fname:String,
    email:String,
    password:String,
    mobile:Number,
    address:String,
})

module.exports = mongoose.model('user',Register);