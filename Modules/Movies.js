const axios = require('axios');

async function getMovies (req, res) {
   const with_genres=req.query.with_genres

            const URLS = `https://api.themoviedb.org/4/discover/movie?api_key=${process.env.MOV_API}&with_genres=${with_genres}`
            axios
                .get(URLS)
                .then(items => {

                    let dataMov = items.data;
                    res.send(moviesObject(dataMov));
                }).catch(error => {
                    res.send(error)
                })
        
      }
const moviesObject = (moviesArr) => {
let movieArray=moviesArr.results;
console.log(movieArray)
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