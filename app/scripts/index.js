var $ = require('jquery');
var Button = require('./models/button').Button;
var models = require('./models/starship');

// DOM Ready
$(function(){

  // REST
  // GET: /starships - Listing of starships (array of objects)
  // POST: /starships - Create a new starship (new object in the array)
  //      {name: 'x-wing', speed: 'fast'}
  // GET: /starships/10 - Retrieve a specific object by its id
  // POST: /starships/10 - Updated the specific object
  //      {name: 'X-Wing'}

  $('.app').append('<ul></ul>');

  var usedStarships = new models.StarshipCollection();

  usedStarships.on("add", function(starship){
    $('.app ul').append('<li>' + starship.get('name') + '</li>');
  });

  usedStarships.fetch();

  /**
   * Like Button Demo
   */
  // var likeButton = new Button();
  //
  // $('#like-button')
  //   .html(likeButton.toJSON().str)
  //   .on('click', function(e){
  //     e.preventDefault();
  //     $(this).html(likeButton.registerClick().toJSON().str);
  //   });
  //
  //
  // console.log(likeButton);
  // console.log(likeButton.toJSON());
  // console.log(likeButton.get('label'));
});
