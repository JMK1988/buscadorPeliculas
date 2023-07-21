document.getElementById('searchButton').addEventListener('click',searchMovie);
let api_key = 'e249ac925b9790f04f6f6009cba4c638';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w500';
let resultContainter = document.getElementById('results');
function searchMovie(){
    resultContainter.innerHTML = 'Cargando...';
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
    .then(response => response.json())
    .then(response => displayMovie(response.results))
}

function displayMovie(movies){
    
    resultContainter.innerHTML = '';
    if(movies.length === 0){
        resultContainter.innerHTML = '<p>No se encontraron resultados para tu busqueda</p>'
        return
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        let title = document.createElement('h2')
        title.textContent = movie.title


        let releaseDate = document.createElement('p');
        releaseDate.textContent = `La fecha de lanzamiento fue` +movie.release_date

        let overview = document.createElement('p');
        overview.textContent = movie.overview;

        let poster = document.createElement('img');
        let posterPath = urlImg+movie.poster_path;
        poster.src=posterPath;

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainter.appendChild(movieDiv)
        

    });
}