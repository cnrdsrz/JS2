const parola = prompt('Introduce una palabra').toLowerCase()

let consonantes = 0
let vocales = 0

for(const letra of parola) {
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra ==='u'){
        vocales++
    }
    else {
        consonantes++
    }
}

console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y una extensión de ${parola.length} letras`)