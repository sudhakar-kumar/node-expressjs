const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); //why ? coz, i'm on windows

const app = express();

app.set("views",path.join(__dirname,'/public/pages/'));
app.set("view engine","twig");

//Below two lines can be copied from github page of 'body-parser'
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/form',(req,res)=>{
    res.render('form',{title : "Login Page",sample_content:"Login Form",owner :"chandan"});

});

app.post('/',(req,res) => {
    res.render('storeData',{ user : req.body});
});

app.listen(8000);