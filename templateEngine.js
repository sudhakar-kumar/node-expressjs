const express = require('express');
const app = express();
const path=require('path');

app.set('views',path.join(__dirname,'public/pages'));
app.set('view engine','twig');

app.get('/welcome',(req,res)=>{
    res.render("firstPage",{title:"First Page",name:"Welcome everyone.Chandan"});
});

app.listen(3000);
