const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 

const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

const app = express();

app.set("views",path.join(__dirname,'/public/pages/'));
app.set("view engine","twig");

//Below two lines can be copied from GitHub page of 'body-parser'
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/form',(req,res) => {
    res.render('basicForm',{title : "Form Validation",sample_content:"Validation",owner :"chandan"});
});

app.post('/',[
    check('checkemail','Invalid Email').trim().isEmail(),
    check('checkphone','Invalid Mob No').trim().isMobilePhone("en-IN")
],(req,res,next) => {

    const errors = validationResult(req);
    //console.log(errors.mapped())

    if(!errors.isEmpty()){
        console.log("If there is error");
        console.log(errors.mapped());
        const userdata = matchedData(req);
        res.render('basicForm',{title:"Form Validation checking", errors:errors.mapped(),userdata:userdata})
    }

    else{
        const data1 = matchedData(req);
        res.render('storeData',{ user : data1 });
        console.log("On Successful validation");
        console.log(data1);
    }
    
});

app.listen(8000);