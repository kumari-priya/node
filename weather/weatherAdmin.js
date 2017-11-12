var UserSearch = require("./userSearch.js");
var fs = require("fs")

var WeatherAdmin = function(){
  this.newUserSearch = function(name,location){
  var user = new UserSearch(name,location);
  user.getWeather();
  var logText = user.name + " " + user.location+ " "+ user.date +"\n";
  fs.appendFile('log.txt',logText, function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("Content Logged!")
    }
  });
};
this.getData = function(){
fs.readFile('log.txt','utf8', function(error,data){
  if(error){
  return console.log(error);
  }
  console.log(data);
});
};
}

// var weather = new WeatherAdmin();
// weather.getData();
// weather.newUserSearch("Priya",'San Francisco, CA');
// places.getWeather();
module.exports = WeatherAdmin;
