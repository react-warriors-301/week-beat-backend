'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/weekbeat', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
const myFavMovies = new mongoose.Schema({
    title: String,
    releaseData: String,
    popularity: Number,
    voteAverage: Number,
    vote_count: Number,
    overView: String,
    posterPath: String,
});
const myFavRes = new mongoose.Schema({
    name: String,
    image: String,
    rating: Number,
    price: Number,
});

const myBlog = new mongoose.Schema({
    title: String,
    blogText: String,
    rate: String,
})


const userSchema = new mongoose.Schema({
    email: String,
    movies: [myFavMovies],
    res: [myFavRes],
    blog: [myBlog]
});

const Users = mongoose.model('Users', userSchema);
function weekSeeds() {


    const user1 = new Users({
        email: 'farahsarese@gmail.com',
        movies: [],
        res: [],
        blog: []
    })
    user1.save();
    const user2 = new Users({
        email: 'obadanaser135@gmail.com',
        movies: [],
        res: [],
        blog: []
    })
    user2.save();

    const user3 = new Users({
        email: 'gleave.alshater@hotmail.com',
        movies: [],
        res: [],
        blog: []
    })
    user3.save();

    const user4 = new Users({
        email: 'dst08itm@yahoo.com',
        movies: [],
        res: [],
        blog: []
    })
    user4.save();
    const user5 = new Users({
        email: 'shkokany98@gmail.com',
        movies: [],
        res: [],
        blog: []
    })
    user5.save();
    const user6 = new Users({
        email: 'farahsarese98@gmail.com',
        movies: [],
        res: [],
        blog: []
    })
    user6.save();
}






weekSeeds();


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected!');
});
module.exports = Users;