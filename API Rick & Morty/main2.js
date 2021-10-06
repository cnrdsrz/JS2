
const URL = 'https://rickandmortyapi.com/api/character'

window.addEventListener('load', () => {

    const character = document.getElementById('characters')
    const ul = document.createElement('ul')
    const dato = [JSON.parse(JSON.stringify(localStorage.getItem('characters')))]

    const data = () => {
    return fetch(URL)
    .then(response => response.json())
    //.then(characters => localStorage.setItem('characters', JSON.stringify(characters.results.flatMap(item => item.image)))) 
    .then(characters => localStorage.setItem('characters', JSON.stringify(characters.results.flatMap(item => ({id: item.id, image: item.image})))))    
    }

    console.log(data())


    dato && dato.map(item => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const span = document.createElement('span')
        span.appendChild(document.createTextNode(item.name))
        img.src = item.image
        li.appendChild(img)
        li.appendChild(span)
        ul.appendChild(li)
        character.appendChild(ul)
    })





})