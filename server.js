'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getEvents = require("./Modules/Events");
const getMovies=require('./Modules/Movies');
const getRestaurants =require('./Modules/Restaurant');
const getActivity=require('./Modules/Activities')
const getUserSchema = require("./DataBase/MainSchema");
const addBlogHandler=require('./DataBase/AddBlogHandler')
const getBlogHandler=require('./DataBase/GetBlog')
const FavMoviesModel =require('./DataBase/FavMoviesModel')
const deleteData =require('./DataBase/DeleteBlog');
const deleteFav =require('./DataBase/DeleteFav');
const deleteFavRes =require('./DataBase/DeleteFavRes')
const addResHandler=require('./DataBase/FavResModel')
const updateBlog=require('./DataBase/UpdateBlog')
const app = express();
const getAllBlogs=require('./DataBase/GetAllBlogs');

app.use(cors());
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.get('/events',getEvents);
app.get('/movies',getMovies);
app.get('/restaurants',getRestaurants);
app.get('/activity',getActivity); 
app.post('/add_blog',addBlogHandler);
app.get('/blog',getBlogHandler);
app.post('/Favorites',addResHandler)
app.delete('/deleteBlog/:index',deleteData);
app.delete('/deletFav/:index',deleteFav);
app.delete('/deleteRes/:index',deleteFavRes)
app.put('/update/:index', updateBlog);

app.get('/all',getAllBlogs);

app.post('/addmovies',FavMoviesModel);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
