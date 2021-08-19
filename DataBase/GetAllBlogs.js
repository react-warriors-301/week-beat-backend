require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const MongooseItems = require("./MainSchema"); // this one is object cuz i export two things from Main Mongoose


function getAllBlogs(req, res) {
    let arr = [];
    MongooseItems.find({}, function (error, data) {
        if (error) {
            console.log(" sorry, failed with some errors");
        }
        else {

            res.send(data);
            console.log(data)

        }
    })



}



module.exports = getAllBlogs;