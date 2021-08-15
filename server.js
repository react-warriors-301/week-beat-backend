'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const getEvents = require("./Modules/Events");
// const getMovies=require('./Modules/Movies');
const getRestaurants =require('./Modules/Restaurant');
// const getActivity=require('./Modules/Activities')
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;
app.use(express.json());
// app.get('/events',getEvents);
// app.get('/movies',getMovies);
app.get('/restaurants', getRestaurants);
// app.get('/activity',getActivity);




app.listen(PORT, () => console.log(`listening on ${PORT}`));
