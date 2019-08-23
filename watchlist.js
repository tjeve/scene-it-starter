$(document).ready(initWatchlist)

function initWatchlist () {

    var watchlistStorageString = localStorage.getItem('watchlist') //names the watchlist stored in local storage
    console.assert(typeof watchlistStorageString === 'string', 'Watchlist is not a string')
    var watchlistStorageArray = JSON.parse(watchlistStorageString) //The watchlist is pulled from storage as a string. Remember to Parse it!!!
    console.assert(typeof watchlistStorageArray === "object", 'Check the datatype of watchlistStorageArray. It may be a string')
    function renderMovieCards (watchListArray) {

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

        const moviesList = watchlistStorageArray.map(makeMovieCardHTML)
        const finalHTML = moviesList.join('')
        return `${finalHTML}`
        
    }

    const watchlistResults = document.getElementById("watchlist-results") //
    watchlistResults.innerHTML = renderMovieCards(watchlistStorageString)     //enters the HTML created above into the

}