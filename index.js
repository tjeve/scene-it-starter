
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

function init () {      //function init
    function renderMovieCards (movieArray) {

        function makeMovieCardHTML (currentMovie) {
            return `<div class="movies-container">
                        <div class="movie">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title"><a href="http://www.imdb.com/title/${currentMovie.imdbID}">${currentMovie.Title}</a></h5>
                                    <p class="card-text">${currentMovie.Year}</p>
                                    <a href="#" class="btn btn-primary onclick="saveToWatchlist(${currentMovie.imdbID})">Add</a>
                                </div>
                            </div>
                        </div>
                    </div>`
        }
        
        const moviesList = movieArray.map(makeMovieCardHTML)
        const finalHTML = moviesList.join('')
        console.log(finalHTML)
        return `${finalHTML}`
    
    }

    function saveToWatchList(movie) {
        //This function needs to save a movie to a list 
    }

    const searchForm = document.getElementById("search-form")   //names the search-form location in the DOM

    searchForm.addEventListener("click", function (evt) {   //listens for a click on the search button
        evt.preventDefault();   //this prevents the movies from going away once appearing                                 
        const results = document.getElementById("results")
        results.innerHTML = renderMovieCards(movieData)     //enters the HTML created above into the 
    })
}