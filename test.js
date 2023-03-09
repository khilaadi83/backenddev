var express = require('express');
var app = express();
const port = 2000;
app.get('/',(req,res)=>{
    console.log("You are in the homepage")
})
app.listen(port,()=>{
    console.log("you are in live server",port)
})