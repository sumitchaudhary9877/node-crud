const express = require('express');
const app = express();


app.get('/', (req,res)=> res.send('hello world'))
app.get('/home',(req,res)=>res.send('oh hi home'))
app.listen(3000,()=>console.log('workings'))