const express = require('express');
const app = express();
const path = require('path');

//var imgPath = path.join(__dirname,"public");
//console.log(imgPath);
app.use(express.static(imgPath));

app.listen(3001,() => { console.log("Server is up and running...")});



