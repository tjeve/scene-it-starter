$(document).ready(initWatchlist)

function initWatchlist () {

    var watchlistStorageString = localStorage.getItem('watchlist') //names the watchlist stored in local storage
    var watchlistStorageArray = JSON.parse(watchlistStorageString)
    console.log(watchlistStorageArray)
    function renderMovieCards (watchListArray) {
        // var watchlistStorageString = localStorage.getItem('watchlist') //names the watchlist stored in local storage
        function makeMovieCardHTML (currentMovie) {
                return `<div class="movie">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title"><a href="http://www.imdb.com/title/${'currentMovie.imdbID'}">${currentMovie.Title}</a></h5>
                                    <p class="card-text">${currentMovie.Year}</p>
                                </div>
                            </div>
                        </div>`
        }
        // var watchlistStorageString = localStorage.getItem('watchlist') //names the watchlist stored in local storage
        console.assert(typeof watchlistStorageString === 'string', 'Watchlist is not a string')
        console.assert(typeof watchlistStorageArray === 'array', 'Watchlist is not an array')
        const moviesList = watchlistStorageArray.map(makeMovieCardHTML)
        const finalHTML = moviesList.join('')
        return `${finalHTML}`
        
    }


     
    const showWatchlist = document.getElementById("show-watchlist")   //names the button location in the HTML
    console.log(watchlistStorageString)
    showWatchlist.addEventListener("click", function (evt) {   //listens for a click on the search button
                evt.preventDefault();   //this prevents the movies from going away once appearing                                 
                const watchlistResults = document.getElementById("watchlist-results") //
                watchlistResults.innerHTML = renderMovieCards(watchlistStorageString)     //enters the HTML created above into the
                // addEvent()
            })
}







//Index JS code is beneath this line

// function init () {   
//     function renderMovieCards (movieArray) {

//         function makeMovieCardHTML (currentMovie) {
//                 return `<div class="movie">
//                             <div class="card" style="width: 18rem;">
//                                 <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
//                                 <div class="card-body">
//                                 <h5 class="card-title"><a href="http://www.imdb.com/title/${'currentMovie.imdbID'}">${currentMovie.Title}</a></h5>
//                                     <p class="card-text">${currentMovie.Year}</p>
//                                     <button  class="btn btn-primary" onclick=saveToWatchList("${currentMovie.imdbID}")>Add</button>
//                                 </div>
//                             </div>
//                         </div>`
//         }
        
//         const moviesList = movieArray.map(makeMovieCardHTML)
//         const finalHTML = moviesList.join('')
//         return `${finalHTML}`
    
//     }

 

//     const searchForm = document.getElementById("search-form")   //names the search-form location in the DOM

//     searchForm.addEventListener("click", function (evt) {   //listens for a click on the search button
//         evt.preventDefault();   //this prevents the movies from going away once appearing                                 
//         const results = document.getElementById("results")
//         results.innerHTML = renderMovieCards(movieData)     //enters the HTML created above into the
//         // addEvent()
//     })
//