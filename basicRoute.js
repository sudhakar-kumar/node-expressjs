const express = require('express');
const app = express();

app.get('/',(req,res) => {
   res.send("hello this is get request");
});

app.get('/profile',(req,res) => {
   res.send("hello this is profile page");
});

app.listen(3001,() => { console.log("Server is up and running...")});
