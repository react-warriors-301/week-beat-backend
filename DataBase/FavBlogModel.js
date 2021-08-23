const Users = require( './MainSchema' );


function FavBlogModel( req, res ) {

  let {title,blogText,image,rate,email} = req.body;
  Users.find( {email:email},function( error,data ){
    if( error ){
      console.log( ' sorry, failed with some errors' );
    }
    else{
      data[0].blog.push( {
        title: title,
        blogText: blogText,
        image: image,
        rate:rate,
      } );
      data[0].save();
      res.send( data[0].blog );
      console.log( data );
    }
  } );



}



module.exports = FavBlogModel;
