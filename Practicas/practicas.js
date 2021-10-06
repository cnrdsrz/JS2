const array1 = [1,2,3,4,5]
let pares = []
let impares = []

for(const array1 of numbers) {

    let random = Math.round(Math.random() *10 + 1 )
   const resultado = array1 * random

   console.log(`${numbers} * ${random} = ${resultado}`);

    if(resultado %2 === 0) {
        pares.push(resultado)
    }
    else {
        impares.push(resultado)
    }
}

console.log(pares)
console.log(impares)