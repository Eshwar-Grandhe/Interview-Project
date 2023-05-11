const express = require('express');
const app = express();

let host = 'localhost';
let port = 3000;

app.get('/number',(req,res,next)=>{
    let number = Math.floor(Math.random() * (100 - 1) + 1)
    res.json(number);
})


app.listen(port,host,()=>{
    console.log('Server is running at port ',port);
})