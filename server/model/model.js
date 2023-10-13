const mongoose = require("mongoose");
const dbs = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})

const datas = mongoose.model("data",dbs);
module.exports= datas;

