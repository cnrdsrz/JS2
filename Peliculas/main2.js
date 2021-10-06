
const MyForm = event => {
    event.preventDefault()

    const movie = document.getElementById('movie')
    const lanzamiento = document.getElementById('lanzamiento')
    const resultado = []
    let alertas = []
    const container = document.querySelector('#data-container')
    const ulElement = document.createElement('ul')
    
      
    if(movie.value === "") {
        alertas.push('Debes escribir la película')
    }
    if(lanzamiento.value === "") {
        alertas.push('\n Debes escribir el año')
    }
    if(alertas.length !== 0){
        window.alert(alertas)
        if(movie.value !== null && lanzamiento.value !== null){
            alertas = []
        }
    }
    else if(resultado.length === 5){
        window.alert('¡Que buenos gustos tienes!')
    }
    else {

        resultado.push({movie, lanzamiento})

            let liElement = document.createElement('li')

            liElement.appendChild(
                document.createTextNode(`${movie.value} ${lanzamiento.value}`)
            )
            ulElement.appendChild(liElement)   
            container.appendChild(ulElement)     
    }
        const message = document.getElementById('message')
        
        resultado.length === 5 && message.appendChild(document.createTextNode('Tienes buenos gustos'))
        

        movie.value = '';
        lanzamiento.value = '';

          
    } 

    
    


