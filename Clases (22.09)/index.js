/*
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
} */

//todo nombre de la clase debe iniciarse con Mayúscula

window.addEventListener("load", () => {

    class Smartphone {
        constructor(marca) {
            this.marca = marca;
        }

        mensaje(){
            return `Ha llegado tu smartphone de la marca ${this.marca}`
        }
        //no necesitamos escribir function dentro de la clase
    }
    //Herencia de clase
    class Modelo extends Smartphone {
        constructor(marca, modelo) {
            super(marca)
            this.modelo = modelo;
        }

        mensajeCompleto() {
            return `${this.mensaje()}, y el modelo es ${this.modelo}`
        }
    }

    //let mySmartphone = new Smartphone('Apple')
    let mySmartphone = new Modelo('Apple', 'Iphone')
    document.getElementById('results').innerHTML = mySmartphone.mensajeCompleto()


}, true)

//el constructor recibe las variables