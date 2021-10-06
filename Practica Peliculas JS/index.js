const form = document.getElementById('form')
const movieContainer = document.getElementById('movie-container')
let resultado = []
let i = 0

const MovieYear = resultado => {
    const li = document.createElement('li')

    for(i; i< resultado.lenght; i++) {
        li.appendChild(document.createTextNode(`${resultado[i].movie} - ${resultado[i].year}`))
        movieContainer.appendChild(li)
    }
    
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const movies = document.getElementById('movies')
    const year = document.getElementById('year')
    const message = document.querySelector('mensajes')

    resultado.push({movie: movies, year:year})

    resultado.length <= 5 && MovieYear(resultado)
    resultado.length === 5 && message.appendChild(document.createTextNode('Buenos Gustos!'))
})