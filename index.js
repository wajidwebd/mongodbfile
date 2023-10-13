const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyparser=require("body-parser");
mongoose.connect("mongodb+srv://two:two@cluster0.jprlyvs.mongodb.net/dd",{}).then((con)=>{
    console.log("db connected");
})
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine',"ejs");

app.use('/',require('./server/routes/route'));

app.listen(10000,console.log("connected"))
