require( 'dotenv' ).config();
const express = require( 'express' );
const cors = require( 'cors' );
const app = express();
app.use( cors() );
app.use( express.json() );


const Users = require( './MainSchema' );




function addRestaurantsHandler ( request,response ) {
  const {email,name, image, rating, price} = request.body;

  Users.findOne( {email : email} , ( error, restaurantArr ) => {
    if ( error ){
      response.send( 'error' );
    } else {
    //   console.log( 'find result:', restaurantArr );
      restaurantArr.res.push( {

        name: name,
        image: image,
        rating: rating,
        price: price
      } );
      restaurantArr.save();
    }
    response.send( restaurantArr.res );
    console.log( 'find result:', restaurantArr );

  } );

}




module.exports = addRestaurantsHandler;