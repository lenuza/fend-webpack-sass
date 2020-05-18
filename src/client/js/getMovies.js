    const url= 'https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=86e4ae72951df30e8b2aa210d5338c8d'
    const movieHolder = document.getElementById('latest-movies')

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            for( let i = 0; i < 15; i++) {
                const parag = document.createElement('p')
                parag.innerHTML = data.results[i].title
                movieHolder.appendChild(parag)
            }

    })
        .catch(err => console.log('no movies found'))
