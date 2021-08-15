const axios = require('axios');

getMovies = function (req, res) {
    const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOV_API}`

    axios
        .get(URL)
        .then(item => {
           const moviesArr=  item.data.genres[0];

            const URLS = `https://api.themoviedb.org/4/discover/movie?api_key=${process.env.MOV_API}&with_genres=${moviesArr.id}`
            // console.log(item.data);
            
          


            axios
                .get(URLS)
                .then(items => {
                    let dataMov = items.data.results;
                    // console.log(dataMov);


                    // res.send(dataMov)
                    let moviesJson = [];
                    dataMov.map(element=>{

                        const title = element.title;
                const releaseData = element.release_date;
                const popularity = element.popularity;
                const voteAverage = element.vote_average;
                const vote_count = element.vote_count;
                const overView = element.overview;
                const posterPath = element.poster_path;
                        moviesJson.push(title,releaseData,popularity,voteAverage,vote_count,overView,posterPath);
                        
                    })
                    console.log(moviesJson);
                    res.send(moviesJson)
                    return moviesJson;
                }).catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error)
        })



}
module.exports = getMovies;