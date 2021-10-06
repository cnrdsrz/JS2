const colors = ['azul', 'amarillo', 'rojo', 'verde', 'rosa']


const parola = prompt('Introduce un color').toLowerCase()
parola === 'azul' || parola === 'amarillo'|| parola === 'rojo' || parola === 'verde' || parola === 'rosa' ? console.log('Tu palabra se encuentra dentro del array'):
console.log('Tu palabra no se encuentra dentro del array')

/* //Otra opción

if(parola === 'azul' || parola === 'amarillo'|| parola === 'rojo' || parola === 'verde' || parola === 'rosa') {
    console.log('Tu palabra se encuentra dentro del array')
}
else {
    console.log('Tu palabra NO se encuentra dentro del array')
}*/