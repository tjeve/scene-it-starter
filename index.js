
// document.addEventListener('DOMContentLoaded', function() {
    
//     function renderMovieCards (movieArray) {

//         function makeMovieCardHTML (currentMovie) {
//             return `<div class="movies-container">
//                         <div class="movie">
//                             <div class="card" style="width: 18rem;">
//                                 <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
//                                 <div class="card-body">
//                                 <h5 class="card-title"><a href="http://www.imdb.com/title/${currentMovie.imdbID}">${currentMovie.Title}</a></h5>
//                                     <p class="card-text">${currentMovie.Year}</p>
//                                     <a href="#" class="btn btn-primary">Add</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//         }
        
//         const moviesList = movieArray.map(makeMovieCardHTML)
//         const finalHTML = moviesList.join('')
//         console.log(finalHTML)
//         return `${finalHTML}`
    
//     }

//     const results = document.getElementById("results")
//     results.innerHTML = renderMovieCards(movieData)

// } )

$(document).ready(init) // As soon as the document is ready, the init (initialize) function is ran.

const searchForm = document.getElementById("search-form")//names the search-form location in the DOM
const searchBar = document.getElementsByClassName("search-bar")
// var searchString = document.getElementById("search-bar")
console.log(searchString)

function init () {      //function init
    function renderMovieCards (movieArray) {

        function makeMovieCardHTML (currentMovie) {
                return `<div class="movie">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title"><a href="http://www.imdb.com/title/${'currentMovie.imdbID'}">${currentMovie.Title}</a></h5>
                                    <p class="card-text">${currentMovie.Year}</p>
                                    <button  class="btn btn-primary" onclick=saveToWatchList("${currentMovie.imdbID}")>Add</button>
                                </div>
                            </div>
                        </div>`
        }

        const moviesList = movieArray.map(makeMovieCardHTML)
        const finalHTML = moviesList.join('')
        return `${finalHTML}`
    
    }

    searchForm.addEventListener("click", function (evt) {   //listens for a click on the search button
        evt.preventDefault();   //this prevents the movies from going away once appearing
        
        var searchString = $(".search-bar").value //This should also work. Try it out when you have time
        var searchString = document.getElementById("search-bar").value
        console.log(searchString)
        urlEncodedSearchString = encodeURIComponent(searchString) //you can't put empty spaces in urls, this makes it 

        let moviePromise = axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString)
            .then(function(response){
                console.log(response.data)
            })


        

        const results = document.getElementById("results")
        results.innerHTML = renderMovieCards(movieData)     //enters the HTML created above into the
        // addEvent()
    })
}
// function addEvent() { //We got onclick to work, but it is no longer considered best practices because it mixes html and javascript. No one likes that. 
//     var container = document.getElementById("results");
//     results.addEventListener("click", function(event) {
//         var target = event.target;

//         console.log(target);
//     }) 
// }

var watchlist = []

function saveToWatchList(imdbID) {
    //This function needs to save a movie to a list
    var movie = movieData.find(function(currentMovie) { //uses the .find() method to find the current movie in movieData array.
        if (currentMovie.imdbID == imdbID) {
            return true;
        } else {
            return false;
        } //this anonymous function passes the current movie inside of it and returns the imdbID number
    })
    //gets the JSON data from the local storage under watchlist but it comes in as a string
    //var watchlistJSON = localStorage.getItem('watchlist')
    //parses the JSON string into an object that we can use
    //var watchlist=  JSON.parse(watchlistJSON);
    //if the item 'watchlist' is non-existent it turns it into an array that we can fill with movies
    // if (typeof watchlist === "null") {
    //     watchlist = []
    // }

    //pushes the movie to the watchlist which is now an array
    watchlist.push(movie)
    //turns the watchlist array into a string so that it can be placed back in local storage
    watchlistJSON = JSON.stringify(watchlist)
    //sets our new array as the new storage item
    localStorage.setItem('watchlist', watchlistJSON)
    console.log('save to watchlist!', movie)
    
}