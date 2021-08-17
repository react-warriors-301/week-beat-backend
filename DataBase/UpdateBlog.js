require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const MongooseItems = require("./MainSchema"); // this one is object cuz i export two things from mongoose-books

function updateBlog(req,res) {
    const index = req.params.index;
    const {title,desc,email} = req.body;
    console.log(title)
    console.log(desc)
    console.log(email)



    MongooseItems.findOne({email:email},(err,resultData) => {
        
         resultData.blog.splice(index,1,{
            title:title,
            blogText:desc
        }) 
        resultData.save();
        res.send(resultData.book);
    })

  }
  






module.exports = updateBlog;