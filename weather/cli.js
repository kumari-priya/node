var WeatherAdmin = require("./weatherAdmin.js");
var nodeArgs = process.argv;
var person = nodeArgs[2];
var location = nodeArgs[3];
for (var i = 4; i < process.argv.length; i++) {
  location += " "+process.argv[i];
}

var weatherAdmin = new WeatherAdmin()
switch (person){
  case 'admin':
      weatherAdmin.getData();
    break;
  default:
  weatherAdmin.newUserSearch(person,location);
  break;
}
