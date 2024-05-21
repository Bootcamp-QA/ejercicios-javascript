/**
 * 1. Calcular Edad
 * Agrega un elemento al formulario para introducir un numero. Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es mayor de edad, si su edad es igual o mayor a 18 años y un mensaje es menor de edad de lo contrario.
 */
function calcularEdad() {
    let numero = parseInt(document.getElementById("ex1number").value);
    let mensaje = "";

    if (numero >= 18) {
        mensaje = "Es mayor de edad";
    }
    else {
        mensaje = "Es menor de edad";
    }

    imprimir(mensaje, "ex1resultado");

}

/**
 * 2. Cual es mayor
 */

function cualMayor() {
    let numero = parseFloat(document.getElementById("ej2Numero").value);
    let numero2 = parseFloat(document.getElementById("ej2Numer").value);
    let mensaje = "";

    if (numero > numero2) {
        mensaje = "El numero mayor es " + numero;

    }
    else if (numero === numero2){
        mensaje = "Los numeros son iguales " + numero;
    }
    else {
        mensaje = "El numero mayor es " + numero2;
    }
    imprimir(mensaje, "ej2Mayor");

}