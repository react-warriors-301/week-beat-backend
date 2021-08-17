require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const MongooseItems = require("./MainSchema"); // this one is object cuz i export two things from Main Mongoose


function addBlogHandler(req, res) {
  const {title,desc,email} = req.body;
console.log(desc);
console.log(title);

  MongooseItems.findOne({ email:email}, (err, data) => {
      console.log(data)
    if (err) {
      res.status(500).send("there is error");
    } else {
      data.blog.push({
       title:title,
       blogText:desc
          });
          data.save();
      res.send(data);
        
       console.log(data);

   

} 
 });
}


module.exports = addBlogHandler;