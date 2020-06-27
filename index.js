const express = require('express');
const app = express();
app.use(express.static('static'));

app.get('/',(req,res)=>{
    res.redirect('/index.html')
})

app.listen(8848,()=>{
    console.log('listen port 8848')
})