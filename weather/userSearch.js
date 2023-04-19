var weather = require("weather-js");

var UserSearch = function(name,location){
  this.name = name;
  this.location = location;
  this.date = Date.now();
  this.getWeather = function(){
  weather.find({search: location, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
  console.log(JSON.stringify(result, null, 2));
});
};
}

// var places = new UserSearch("Priya",'San Francisco, CA')
// places.getWeather();
module.exports = UserSearch;