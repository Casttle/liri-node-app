require("dotenv").config();



// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var query = process.argv[3];
var request = require("request");
// switch(command){
//     case "concert-this":
//     //wright the function;
//     break;
//     case "spotify-this-song":
//     //wright the function;
//     break;
//     case "concert-this":
//     //wright the function;
//     break;
//     case "concert-this":
//     //wright the function;
//     break;
// }
// if (command === "concert-this") {

//     require("jsdom").env(function(err, window) {
//         if (err) {
//             console.error(err);
//             return;
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

if (command === "spotify-this-song") {
    
}
// Command lines for searching Movies-------------------------------------------------
if (command === "movie-this") {
   
    var nodeArgs = process.argv.slice(1);
    var movieName = "";

        for (var i = 2; i < nodeArgs.length; i++) {
        if (i > 2 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        }else {
            movieName += nodeArgs[i];
            }
        }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
         const movieInfo = JSON.parse(body)
        //  console.log(movieInfo);
        console.log("Title: " + movieInfo.Title + "\nYear: " + movieInfo.Year + "\nIMDB Rating: " + movieInfo.Ratings[0].Value +
        "\nRotten Tomatoes Rating: " + movieInfo.Ratings[1].Value + "\nCountry: " + movieInfo.Country + "\nLanguage: " + movieInfo.Language +
        "\nPlot: " + movieInfo.Plot + "\nCast: " + movieInfo.Actors);
      }
    });
} else {
    var movieName = "Mr+Nobody"
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
         const movieInfo = JSON.parse(body)
        //  console.log(movieInfo);
        console.log("Title: " + movieInfo.Title + "\nYear: " + movieInfo.Year + "\nIMDB Rating: " + movieInfo.Ratings[0].Value +
        "\nRotten Tomatoes Rating: " + movieInfo.Ratings[1].Value + "\nCountry: " + movieInfo.Country + "\nLanguage: " + movieInfo.Language +
        "\nPlot: " + movieInfo.Plot + "\nCast: " + movieInfo.Actors);
      }
    });
}
//End Movie Commands---------------------------------------------------------------

if (command === "do-what-it-says") {
    console.log("worked");
}