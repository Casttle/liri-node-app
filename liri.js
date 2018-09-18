require("dotenv").config();

var command = process.argv[2];
var argCheck = process.argv[3];
var nodeArgs = process.argv.slice(3).join(" ");
const request = require("request");
const keys = require("./keys.js");
const moment = require("moment");

switch (command) {
    case "concert-this":
       concert();
        break;
    case "spotify-this-song":
        spot();
        break;
    case "movie-this":
        movie();
        break;   
    case "do-what-it-says":
        random();
      
}

//-----Command lines for searching the bands in town API------------------------------------
function concert (){
    
    var queryUrl = "https://rest.bandsintown.com/artists/" + nodeArgs + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        
        const artistInfo = JSON.parse(body)[0]

        console.log("\n-------------------------------------------\n");
        console.log("Venue: " + artistInfo.venue.name +
        "\nVenue Location: " + artistInfo.venue.city + ", " + artistInfo.venue.country +
        "\nDate of event: "+ moment(artistInfo.datetime).format("MMM DD YYYY"));
        console.log("\n-------------------------------------------\n");
      }
    });
};
//-----End Bands in town Commands-----------------------------------------------------------

//-----Command lines for searching songs with Spotify--------------------------------------
function spot(){
if ( argCheck !== undefined ) {

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify); 

    spotify.search({ type: 'track', query: nodeArgs, limit: 1 }).then(function(response) {
        
        var trackInfo = response.tracks.items[0];
        
        console.log("\n-------------------------------------------\n");
        console.log("Artist Name: " + trackInfo.album.artists[0].name +
                    "\nSong Name: " + trackInfo.name +
                    "\nPreview link: " + trackInfo.preview_url +        
                    "\nAlbum: " + trackInfo.album.name);
        console.log("\n-------------------------------------------\n");
        }).catch(function(err) {
            console.log(err);
        });

 } else {
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);
     
        spotify.search({ type: 'track', query: "The Sign", limit: 1 }).then(function(response) {
            // console.log(response.tracks);
            var trackInfo = response.tracks.items[0];
            console.log("\n-------------------------------------------\n");
            console.log("----Oops no song name was entered. Here is a good one though----\n");
            console.log("Artist Name: " + trackInfo.album.artists[0].name +
                        "\nSong Name: " + trackInfo.name +
                        "\nPreview link: " + trackInfo.preview_url +        
                        "\nAlbum: " + trackInfo.album.name);
            console.log("\n-------------------------------------------\n");            
            }).catch(function(err) {
                console.log(err);
            });
};
};
//-----End Spotify Commands---------------------------------------------------------------


//-----Command lines for searching Movies-------------------------------------------------
function movie() {
if (argCheck != undefined ) {
   
    var queryUrl = "http://www.omdbapi.com/?t=" + nodeArgs + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
         const movieInfo = JSON.parse(body)
        console.log("\n-------------------------------------------\n");
        console.log("Title: " + movieInfo.Title + "\nYear: " + movieInfo.Year + "\nIMDB Rating: " + movieInfo.Ratings[0].Value +
        "\nRotten Tomatoes Rating: " + movieInfo.Ratings[1].Value + "\nCountry: " + movieInfo.Country + "\nLanguage: " + movieInfo.Language +
        "\nPlot: " + movieInfo.Plot + "\nCast: " + movieInfo.Actors);
        console.log("\n-------------------------------------------\n");
      };
    });
} else {
    var queryUrl = "http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
         const movieInfo = JSON.parse(body)
        console.log("\n-------------------------------------------\n");
        console.log("----Oops no movie name was entered. Here is a good one though----\n");
        console.log("Title: " + movieInfo.Title + "\nYear: " + movieInfo.Year + "\nIMDB Rating: " + movieInfo.Ratings[0].Value +
        "\nRotten Tomatoes Rating: " + movieInfo.Ratings[1].Value + "\nCountry: " + movieInfo.Country + "\nLanguage: " + movieInfo.Language +
        "\nPlot: " + movieInfo.Plot + "\nCast: " + movieInfo.Actors);
        console.log("\n-------------------------------------------\n");
      }
    });
};
}
//-----End Movie Commands---------------------------------------------------------------

//-----Random.txt Commands--------------------------------------------------------------
function random(){
    var fs = require("fs");

    fs.readFile("random.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  
  var dataArr = data.split(",");

  command = dataArr[0];
  nodeArgs = ["","", dataArr[1]];
spot();
        });   
};