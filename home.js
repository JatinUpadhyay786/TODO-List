const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.use(express.urlencoded()); 
app.set('view engine' , 'ejs')
app.set('views' , './views'); 
app.use(express.static('assets'));
app.use('/' , require('./routes/home'));





app.listen(port , function(err){
    if(err){
        console.log('Error is runnning on server' , err);
    }
    console.log('Yes! my server is running on port:' , port);
}) 