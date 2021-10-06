const luis = {
    name: 'Luis',
    age: 35,
    instagram: 'luis.js',
    saludar: function(vozAlta, enDespedida) {
        const saludoOficial = `Hola, soy ${this.name}`
        const despedidaOficial = 'Adios'

        const saludo = vozAlta ? saludoOficial.toUpperCase() : saludoOficial
        const despedida = enDespedida ? despedidaOficial.toUpperCase() : despedidaOficial
        
        console.log(saludo)

        if(enDespedida) {
            console.log(despedida)
        }
    },

    seguirmeEnInstagram: function() {
        console.log(`Hola, seguime en ${this.instagram}`)
    },

    familia: {
        name: 'Mariana',
        age:28,

        saludar: function() {
            console.log(`Hola ${this.name}`)
        },

    }
}

const boton = document.getElementById('button')

boton.addEventListener('click', luis.saludar.bind(luis)) // sirve para buscar el this correcto y ejecutarlo en consola.
//con las Arrow Function JS hace el bind automáticamente. Osea en JS nuevo no hay que hacerlo.