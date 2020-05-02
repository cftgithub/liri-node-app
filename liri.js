// code to read and set any environment variables with the dotenv package
require('dotenv').config()
// code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");
var axios = require("axios");
// access your keys information 
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
moment().format();

var request = process.argv[2];
var param = process.argv[3];
var paramName = "";
var nodeArgs = process.argv;
var param = "";
param = "Ace of Base";
param = paramName;

// Loop through all the words in the node argument to allow names with multiple words
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    paramName = paramName + "+" + nodeArgs[i];
  } else {
    paramName += nodeArgs[i];
  }
}
console.log(paramName);

// concert-this
var query = 'https://rest.bandsintown.com/artists/' + paramName + '/events?app_id=codingbootcamp'
if (request === "concert-this") {
  axios.get(query)
    .then(function (response) {
      console.log("-------------------------------------------------");
      console.log("Event Title: " + response.data[0].artist.name + response.data[0].title);
      console.log("Venue Name: " + response.data[0].venue.name);
      console.log("Venue Location: " + response.data[0].venue.location);
      console.log("Event Date: " + moment(response.data[0].datetime).format('MM DD YYYY'));
      console.log("Country: " + response.data[0].venue.country);
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

// spotify-this-song
if (request === "spotify-this-song") {
  if (!paramName) { paramName = "Ace+of+Base"; }
  spotify
    .search({ type: 'track', query: paramName })
    .then(function (response) {
      console.log("-------------------------------------------------");
      console.log("Artist(s): " + response.tracks.items[0].artists[0].name);
      console.log("Name of Song: " + response.tracks.items[0].name);
      console.log("Preview Link: " + response.tracks.items[0].preview_url);
      console.log("Album: " + response.tracks.items[0].album.name);
    })
    .catch(function (err) {
      console.log(err);
    });
}

// movie-this
if (request === "movie-this") {
  axios.get('http://www.omdbapi.com/?t=' + paramName + '&y=plot=short&apikey=trilogy')
    .then(function (response) {
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotton Tomatoes Rating: " + response.data.Ratings[1].Value);
      console.log("Country where movie was produced: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("-------------------------------------------------");
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

// do-what-it-says
if (request === "do-what-it-says") {
  var fs = require("fs");
  fs.readFile("../liri-node-app/random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    var dataArr = data.split(','); // Change data in random.txt to array
    console.log(dataArr);
    console.log("-------------------------------------------------");

    paramName = "I+Want+It+That+Way"
    spotify.search({ type: 'track', query: paramName })
    .then(function (response) {
      console.log("-------------------------------------------------");
      console.log("Artist(s): " + response.tracks.items[0].artists[0].name);
      console.log("Name of Song: " + response.tracks.items[0].name);
      console.log("Preview Link: " + response.tracks.items[0].preview_url);
      console.log("Album: " + response.tracks.items[0].album.name);
    })
    .catch(function (err) {
      console.log(err);
    });
  });
}
