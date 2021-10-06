/*
setTimeout(() => {
    console.log('Hola')
}, 3000); */

/*const callback = () => console.log('Callback a llamar')*/

/*setTimeout(callback, 4000);

const saludo = name => console.log('Hola ${name}')
const mensaje = message => console.log(message)
const despedida = name => console.log('Hola ${name}')

const mycallBack = () => {
    setTimeout(saludo ('Luis'), 2000)
    setTimeout(mensaje('Estas dando clases'), 4000)
    setTimeout(despedida('Amigo'), 5000)
}

mycallBack()*/

const saludo = name => console.log('Hola ${name}')
const mensaje = message => console.log(message)
const despedida = name => console.log('Hola ${name}')

console.log('entre en la funcion')
setTimeout(saludo,2000)
setTimeout(mensaje,2000)
setTimeout(despedida,2000)

