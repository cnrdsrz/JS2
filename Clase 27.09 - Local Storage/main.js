const button = document.getElementById('set-local-storage')

const names = [
    {name: 'Conrado'},
    {name: 'Pablo'}
]

button.addEventListener('click', () => {
    // set item --> para guardar info en local storage

    localStorage.setItem('Nucba', JSON.stringify(names))
    //console.log(JSON.parse(localStorage.getItem('Nucba')))
    const list = JSON.parse(localStorage.getItem('Nucba'))

    list.forEach(item => {
        const results = document.getElementById('results')
        let p = document.createElement('p')

        p.appendChild(document.createTextNode(item.name))

        results.appendChild(p)
        
    });
}) // el resultado está en APPLICATIONS del browser/Local Storage

// exite también .removeItem (para borrar) o .reset (para borrar todo)

// clases: 1) setItem; 2) getItem; 3)removeItem; 4)clear()



