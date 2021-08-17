require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const MongooseItems = require("./MainSchema"); // this one is object cuz i export two things from Main Mongoose


function getBlogHandler(req, res) {
    let email=req.query.email;
    MongooseItems.find({email:email},function(error,data){
      if(error){
        console.log(" sorry, failed with some errors");
      }
      else{
        res.send(data);
        console.log( data);
      }
    })

   

} 



module.exports = getBlogHandler;