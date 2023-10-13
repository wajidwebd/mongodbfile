const axios = require('axios')
exports.indexcode = (req,res)=>{
    res.render('index');
}
exports.formcode = (req,res)=>{
    // res.render('form');
    axios.get("http://localhost:10000/api/users")
      
    .then(function(response){
        console.log(response);
        res.render('form', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}


// exports.datafilecalling = (req,res)=>{
//     axios.get("http://localhost:1000/api/users")
      
//     .then(function(response){
//         console.log(response);
//         res.render('form', { users : response.data });
//     })
//     .catch(err =>{
//         res.send(err);
//     })
// }