require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const MongooseItems = require("./MainSchema"); // this one is object cuz i export two things from mongoose-books

function deleteData(req,res) {


try{
    const id=req.params.index;
    const email=req.query.email;
    //console.log(id);
    MongooseItems.findOne({ email: email }, (err, data) => {
        console.log(id)
        data.blog.splice(id,0);
        console.log('this is blog data',data.blog.splice(id,1))
        data.save();
            res.send(data); 

    })
    
    
}
catch(err){
    res.send(err.info);
}
}

module.exports = deleteData;