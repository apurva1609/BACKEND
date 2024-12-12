const express = require('express');
const app = express();
app.use(express.json())
const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/card");

const route =require('./route')
app.use('/',route)

app.get(('/'),(req,res) => 
    res.send("database conected"));

app.listen(8000, () =>{
    console.log('app listening on port 8000')
})

