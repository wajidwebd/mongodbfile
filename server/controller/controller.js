let datas = require("../model/model");


exports.create= (req,res)=>{
    const chk=new datas({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone

    });
    chk.save().then(doc=>{
        console.log(doc)
        res.redirect("/form");
    })
}

exports.find=(req,res)=>{
    datas.find()
    .then(user=>{
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}