const URL = 'https://rickandmortyapi.com/api/character'

const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.getElementById('search').value
    const data = JSON.parse(localStorage.getItem('characters'))

    if(input) {
        fetch(URL)
        .then(response => response.json())
        .then(character => localStorage.setItem('character', JSON.stringify(character.results)))
    }  
    
    const newArray = data.flatMap(item => ({name: item.name}))
})

window.addEventListener('load', () => {
    const character = document.getElementById('characters')
    const ul = document.createElement('ul')
    const data = JSON.parse(localStorage.getItem('characters'))

   /* const getData = () => {
       return fetch(URL)
       .then(response => response.json())
       // .then(characters => localStorage.setItem('characters', JSON.stringify(characters.results.flatMap(item => item.image))))
       .then(characters => localStorage.setItem('characters', JSON.stringify(characters.results.flatMap(item => ({ name: item.name, image: item.image })))))
   }*/

   /*getData()

   data && data.map(item => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const span = document.createElement('span')
        span.appendChild(document.createTextNode(item.name))
        img.src = item.image
        li.appendChild(img)
        li.appendChild(span)
        ul.appendChild(li)
        character.appendChild(ul)
    })*/

})