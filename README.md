# liri-node-app

**Overview**

LIRI is a Language Interpretation and Recognition Interface. This is a command line node app that will return data based on the parameters given.

**MVP**

LIRI will search for parameters given in the command line and return data using the following:

* Spotify for songs
* Bands in Town for concerts
* OMDB for movies

**Parameters**
* node liri.js concert-this <artist/band name> will return:
    - Name of the venue
    - Venu location
    - Date of the event (formated using moment as MM/DD/YYYY)

* node liris.js spotify-this-song '<song name>' will return:
    - Artist(s)
    - Song's name
    - Preview link of the song from Spotify
    - Album of the song
    - If no song is provided, program will default to "The Sign" by Ace of Base

* node liri.js movie-this '<movie name>' will return:
    - Title of the movie
    - Year the movie came out
    - IMDB Rating
    - Rotten Tomatoes Rating
    - Country where the movie was produced
    - Language of the movie
    - Plot of the movie
    - Actors in the movie
    - If movie is not typed in, the program will output data for the movie 'Mr. Nobody'

* node liri.js do-what-it-says:
    - LIRI will take the text inside of random.txt using fs Node package to call one of LIRI's commands
    - Runs spotify-this-song for "I Want it That Way" as folow in the text in random.txt

**How to run the app:**


**Screenshots, gifs or videos of the app functioning:**


**Link to a deployed version of the app:**


**List technologies used in the app:**


**Role in app development:**
    
**Technologies Used**

* Bands in Town API
* OMDB API
* Node-Spotify-API
* Axios NPM
* Moment NPM
* DotEnv NPM