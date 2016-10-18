var _ = require('underscore');
var Backbone = require('backbone');

var Button = Backbone.Model.extend({
  defaults: {
    'clickCount': 0,
    'label': 'Like',
    'str': '0 Like'
  },
  registerClick: function(){
    var currentCount = this.get('clickCount');
    var newCount = currentCount + 1;

    this.set('clickCount', newCount);

    return this;
  },
  // html: function(){
  //   return this.get('clickCount') + ' ' + this.get('label');
  // },
  toJSON: function(options){
    var count = this.get('clickCount');
    var label = count === 1 ? this.get('label') : this.get('label') + 's' ;

    this.set('str', this.get('clickCount') + ' ' + label);

    // return _.clone(this.attributes);
    return Backbone.Model.prototype.toJSON.call(this, options);
  }
});

module.exports = {
  Button: Button
};
