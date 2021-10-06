

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

const alfredo = { name: 'Alfredo'}
alfredo.saludar = luis.saludar /* ----> alfredo.saludar() ---> creas un evento y "copia" el código del objeto anterior (reasigna método)*/

//CALL
luis.saludar.call(alfredo) /* -----> no genera quilombo con los THIS... sería la forma correcta*/

//APPLY

luis.saludar.apply(alfredo, [true, true]) /*es lo mismo que el anterior pero otra forma de escribirlo*/

