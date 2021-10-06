/*const llamandoaLuis = () => {

    console.log(this)
}

const datos = {
    nombre: 'Conrado',
    apellido: 'Suarez',

    activo: function() {
        console.log(this.nombre)
    }
}

console.log(datos.activo())*/

const datos = [
    {
        id: 1,
        title: 'Batman Return',
        year: 1992
    },
    {
        id: 2,
        title: 'Advengers',
        year: 2010
    },
    {
        id: 3,
        title: 'Spiderman',
        year: 2018
    },
]


//si queres filtrar un objeto --> console.log(datos.filter(item => item.title === 'Batman Return'))
//si queres filtrar por id ---> console.log(datos.filter(item => item.id > 2))
// si queres agregar un objeto ---> datos.push({ id: 4, title: 'Wonder Woman', year: 1988})
// si queres que se haga un solo objeto ---> console.log(datos.flatMap(item => item.year))

setTimeout(() => {
    console.log(datos)
}, 1500);

//tambien podes incluirlo dentro de una función

const getDato = () => {
    setTimeout(() => {
        console.log(datos)
    }, 1500);
}

getDato()

//Request ---> se realiza mediante promise

/*const getDato = () => {
    return new Promise({resolve, rejected} => {
        setTimeout(() => {
            resolve(datos)
        }, 1500);
    })
}

getDato()*/




