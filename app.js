const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs")
let DATA = []
app.use(express.static(__dirname +"/client"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/data",(req,res)=>{
  DATA = JSON.parse(fs.readFileSync("PhoneDirectory.txt","utf-8"))
  res.send(DATA);
});

app.post("/",(req,res)=>{
firstName = req.body.first_name;
lastName = req.body.last_name;
contact = req.body.contact;
email = req.body.email;
DATA.push({firstname:firstName,lastname:lastName,contact:contact,email:email})
res.redirect("/")
fs.writeFileSync("PhoneDirectory.txt",JSON.stringify(DATA))
});



app.listen(3000);