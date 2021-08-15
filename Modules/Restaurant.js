var axios = require( 'axios' );


//http://localhost:3001/restaurants?location=Houston

async function getRestaurants( request, response ) {

  let location = request.query.location;

  let config = {
    method: 'get',
    url: `https://api.yelp.com/v3/businesses/search?location=${location}`,
    headers: {
      'Authorization': `Bearer ${process.env.RES_API}`
    }
  };


  axios( config )
    .then( result => {
      let restaurantsData = result.data.businesses;
      response.send(resObject(restaurantsData));

      

      console.log( restaurantArr );
      response.send( restaurantArr );


    } )
    .catch( function ( error ) {
      console.log( error );
    } );

}

const resObject = (resArr) => {
  let resArray=resArr;
  
  let restaurantArr = [];
  resArray.map( item=>{
    const name = item.name;
    const image = item.image_url;
    const rating = item.rating;
    const price = item.price;

 restaurantArr.push(new Res(name, image, rating, price));
  
  
      })
      return restaurantArr;
  
      
  }
  
  class Res {
      constructor(name, image, rating, price) {
  
              this.name = name,
              this.image = image,
              this.rating = rating,
              this.price = price
            }
  }
  


module.exports = getRestaurants;
