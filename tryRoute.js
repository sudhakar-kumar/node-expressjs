const  express = require('express');
const app = express();

var name ="some name";
// app.get('/arrival/:fromCode/:toCode',(req,res) => {
     
//     let from_obj=req.params.fromCode;
//     let to_obj=req.params.toCode;
//     //res.send('from data',req.params.fromCode);
//     console.log("From:",req.params.fromCode);
//     console.log("To:",req.params.toCode);
//     res.send(`FROM: ${from_obj} TO: ${to_obj}`);

// });

app.get('/flightinfo/:from?/:to?',(req,res) =>{

    console.log(req.params);
    if(req.params==undefined) 
        res.send("No data entered");
    else if((req.params.from ==undefined) && (req.params.to == undefined)) 
        res.send("Print all the available details.");
    else
        res.send(`From : ${req.params.from} To : ${req.params.to}`); 

});



app.listen(3001,() => console.log('Listening at port 3001'));


