
document.addEventListener('DOMContentLoaded', function() {
    
    function renderMovieCards (movieArray) {

        function makeMovieCardHTML (currentMovie) {
            return `<div class="movies-container">
                        <div class="movie">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title"><a href="http://www.imdb.com/title/${currentMovie.imdbID}">${currentMovie.Title}</a></h5>
                                    <p class="card-text">${currentMovie.Year}</p>
                                    <a href="#" class="btn btn-primary">Add</a>
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

    const results = document.getElementById("results")
    results.innerHTML = renderMovieCards(movieData)

} )


// $(document).ready(function () {
    
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
        
//         let singleMovieHTML = movieArray.map(makeMovieCardHTML).join('')
//         let moviesHTMLS = singleMovieHTML.join('')
//         console.log(movieHTML)
//         return `${moviesHTML}`
    
//     }
    
//     function movies () {
//         let movieResults = $(".results").html(renderMovieCards(movieData))
//     }

// })







// const moviePromise = $.getJSON("data.js")
//         .then(function () {
