
let figure = prompt('Sobre que figura quieres calcular el área?: triangle, rectangle o circle').toLocaleLowerCase()

let base;
let height;
let radius;

switch(figure) {
    case 'triangle':
        base = prompt('Introduce la base del triángulo')
        height = prompt('Introduce la altura del triángulo')
        console.log(`el área del triángulo es ${(base*height)/2}`)
    break
    case 'rectangle':
        base = prompt('Introduce la base del rectángulo')
        height = prompt('Introduce la altura del rectángulo')
        console.log(`el área del rectángulo es ${(base*height)}`)
    case 'circle':
        radius = prompt('Introduce el radio del círculo')
        console.log(`el área del círculo es ${(Math.PI * Math.pow(radius,2))}`)
    break
    default: console.log('La figura geométrica no es válida')

}