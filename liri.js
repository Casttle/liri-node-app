require("dotenv").config();



// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
// var query = process.argv[3];
var nodeArgs = process.argv.slice(1);
var request = require("request");
const keys = require("./keys.js")


//-----Command lines for searching the bands in town API------------------------------------
// if (command === "concert-this") {

//     require("jsdom").env(function(err, window) {
//         if (err) {
//             console.error(err);
//           return;
//         }
//         var $ = require("jquery")(window);
//     $.ajax({
//         url:"https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp",
//         method: "GET"
//     }).then(function (response) {
//             console.log(response);
//     });
// });
// } else{ console.log("Nope");}
//-----End Bands in town Commands-----------------------------------------------------------
function liri (){

//-----Command lines for searching songs with Spotify--------------------------------------
if (command === "spotify-this-song") {

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var songName = "";

        for (var i = 2; i < nodeArgs.length; i++) {
            if (i > 2 && i < nodeArgs.length) {
                songName = songName + "+" + nodeArgs[i];
            }else {
                songName += nodeArgs[i];
                }
            }
 
    spotify.search({ type: 'track', query: songName, limit: 1 }).then(function(response) {
              console.log(response.tracks);
            }).catch(function(err) {
              console.log(err);
            });

 } else {

 }
//-----End Spotify Commands---------------------------------------------------------------





//-----Command lines for searching Movies-------------------------------------------------
// if (command === "movie-this") {
   
//     var nodeArgs = process.argv.slice(1);
//     var movieName = "";

//         for (var i = 2; i < nodeArgs.length; i++) {
//         if (i > 2 && i < nodeArgs.length) {
//             movieName = movieName + "+" + nodeArgs[i];
//         }else {
//             movieName += nodeArgs[i];
//             }
//         }
//     var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//     request(queryUrl, function(error, response, body) {
//       if (!error && response.statusCode === 200) {
//          const movieInfo = JSON.parse(body)
//         //  console.log(movieInfo);
//         console.log("Title: " + movieInfo.Title + "\nYear: " + movieInfo.Year + "\nIMDB Rating: " + movieInfo.Ratings[0].Value +
//         "\nRotten Tomatoes Rating: " + movieInfo.Ratings[1].Value + "\nCountry: " + movieInfo.Country + "\nLanguage: " + movieInfo.Language +
//         "\nPlot: " + movieInfo.Plot + "\nCast: " + movieInfo.Actors);
//       }
//     });
// } else {
//     var movieName = "Mr+Nobody"
//     var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//     request(queryUrl, function(error, response, body) {
//       if (!error && response.statusCode === 200) {
//          const movieInfo = JSON.parse(body)
//         //  console.log(movieInfo);
//         console.log("Title: " + movieInfo.Title + "\nYear: " + movieInfo.Year + "\nIMDB Rating: " + movieInfo.Ratings[0].Value +
//         "\nRotten Tomatoes Rating: " + movieInfo.Ratings[1].Value + "\nCountry: " + movieInfo.Country + "\nLanguage: " + movieInfo.Language +
//         "\nPlot: " + movieInfo.Plot + "\nCast: " + movieInfo.Actors);
//       }
//     });
// }
//-----End Movie Commands---------------------------------------------------------------

if (command === "do-what-it-says") {
    var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);
  command = dataArr[0];
  nodeArgs = toString(dataArr[1]);

liri();
        });
    }
};
liri();