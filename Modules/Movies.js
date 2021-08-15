const axios = require('axios');

async function getMovies (req, res) {
    const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOV_API}`

    axios
        .get(URL)
        .then(item => {
            const moviesArr = item.data.genres[0];

            const URLS = `https://api.themoviedb.org/4/discover/movie?api_key=${process.env.MOV_API}&with_genres=${moviesArr.id}`
            // console.log(item.data);
            axios
                .get(URLS)
                .then(items => {

                    let dataMov = items.data;
                    console.log(URLS);
                    res.send(moviesObject(dataMov));
                }).catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error)
        })



}
const moviesObject = (moviesArr) => {
let movieArray=moviesArr.results;

    const moviesJson = [];
    movieArray.map(element => {
console.log(element.title);
        const title = element.title;
        const releaseData = element.release_date;
        const popularity = element.popularity;
        const voteAverage = element.vote_average;
        const vote_count = element.vote_count;
        const overView = element.overview;
        const posterPath = element.poster_path;
        moviesJson.push(new Movies(title, releaseData, popularity, voteAverage, vote_count, overView, posterPath));


    })
    return moviesJson;

    
}

class Movies {
    constructor(title, releaseData, popularity, voteAverage, vote_count, overView, posterPath) {

            this.title = title,
            this.releaseData = releaseData,
            this.popularity = popularity,
            this.voteAverage = voteAverage,
            this.vote_count = vote_count,
            this.overView = overView,
            this.posterPath=posterPath
            


    }
}

module.exports = getMovies;