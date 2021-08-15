var axios = require( 'axios' );


//http://localhost:3001/restaurants?location=Houston

function getRestaurants( request, response ) {

  let location = request.query.location;

  let config = {
    method: 'get',
    url: `https://api.yelp.com/v3/businesses/search?location=${location}`,
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  };


  axios( config )
    .then( result => {
      let restaurantsData = result.data.businesses;

      let restaurantArr = [];
      restaurantsData.map( item=>{
        const name = item.name;
        const image = item.image_url;
        const rating = item.rating;
        const price = item.price;
        const phone = item.phone;

        restaurantArr.push( name, image, rating, price, phone );

      } );
      console.log( restaurantArr );
      response.send( restaurantArr );


    } )
    .catch( function ( error ) {
      console.log( error );
    } );

}



module.exports = getRestaurants;
