
const respuesta = prompt('Quieres ir al cine?').toLowerCase()


if(respuesta === 'si') {
    console.log('Elige la película')
}
else if(respuesta === 'no') {
    console.log('Otro día...')
}
else{
    console.log('No has respondido ninguna de las dos')
}