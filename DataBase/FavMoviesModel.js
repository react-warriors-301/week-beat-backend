const Users = require( './MainSchema' );
function FavMoviesModel ( req,res ){
  const {title,posterPath,email,releaseData,popularity,voteAverage,vote_count,overView} = req.body;
  Users.find( {email:email},( err,movieData )=>{
    if( err ){
      res.send( 'error from backEnd side Post Method ' );
      console.log( 'hello from post function' );
    }
    else {
      movieData[0].movies.push( {
        title:title,
        posterPath:posterPath,
        releaseData:releaseData,
        popularity:popularity,
        voteAverage:voteAverage,
        vote_count:vote_count,
        overView:overView
      } );
      movieData[0].save();
      res.send( movieData[0].movies );
      console.log( movieData );
    }
  } );
}
module.exports = FavMoviesModel;