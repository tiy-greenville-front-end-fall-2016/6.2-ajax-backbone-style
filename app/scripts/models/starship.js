var Backbone = require('backbone');

var Starship = Backbone.Model.extend({

});

var StarshipCollection = Backbone.Collection.extend({
  model: Starship,
  url: 'http://swapi.co/api/starships/',
  parse: function(data){
    return data.results;
  }
});

module.exports = {
  Starship: Starship,
  StarshipCollection: StarshipCollection
};
