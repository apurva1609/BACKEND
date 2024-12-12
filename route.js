const {add, getdata, deleteuser} = require('./controller');

const express = require('express');

const route = express.Router()

route.post('/registered',add)

route.get('/user',getdata)

route.delete('/deleteuser/:_id',deleteuser)

module.exports = route