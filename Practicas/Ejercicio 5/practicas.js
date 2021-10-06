
let num = parseInt(prompt('Escribe un número mayor que cero'))
let resultado = 1

for(let i=num; i>0; i--) {
    resultado *= i
}

console.log(`El factorial de ${num} es ${resultado}`)