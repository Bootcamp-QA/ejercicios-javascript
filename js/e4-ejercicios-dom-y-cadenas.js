/*
EJERCICIO 1
Crea una variable con la frase Hola que tal, bienvenida a QA, y muestrala junto con:

Su longitud

La posición de la palabra QA

La primera letra de la frase.

La última letra de la frase.

Muestra la frase completa en mayúscula

Muestra la frase completa en minúscula

Crea una variable con tu nombre, y modifica la frase para que diga Hola seguido de tu nombre

Crea una nueva palabra, con la misma frase quitando la palabra que tal.
*/


let mensajeBienvenidaE1 = "Hola que tal, bienvenida a QA";
let longitud = mensajeBienvenidaE1.length;
let posicionQa = mensajeBienvenidaE1.indexOf("QA");
let letraPrimera = mensajeBienvenidaE1[0];
let letraUltima = mensajeBienvenidaE1[longitud -1];
let fraseMayuscula = mensajeBienvenidaE1.toUpperCase();
let fraseMinuscula = mensajeBienvenidaE1.toLowerCase();
let studentName = "Rebeca";
let welcomeMessage = mensajeBienvenidaE1.replace("que tal, bienvenida a QA", studentName);
let welcomeMessage2 = mensajeBienvenidaE1.replace("Hola ","Hola "+ studentName);
let palabra2 = "";
let mensajeBienvenidaSinQueTal = mensajeBienvenidaE1.replace("que tal", palabra2);

let parrafo = document.getElementById("e1longitud");
parrafo.innerText = "La longitud de la frase " + mensajeBienvenidaE1 + " es " + longitud;

parrafo = document.getElementById("e1posicionQA");
parrafo.innerText = "La posicion de la palabra QA es " + posicionQa;

parrafo = document.getElementById("e1letraPrimera");
parrafo.innerText = "La primera letra de la frase " + mensajeBienvenidaE1 + " es " + letraPrimera;

parrafo = document.getElementById("e1letraUltima");
parrafo.innerText = "La ultima letra de la frase " + mensajeBienvenidaE1 + " es " + letraUltima;

parrafo = document.getElementById("e1fraseMayuscula");
parrafo.innerText = "La frase en mayuscula es" + fraseMayuscula;


parrafo = document.getElementById("e1fraseMinuscula");
parrafo.innerText = "La frase en minuscula es " + fraseMinuscula;


parrafo = document.getElementById("e1fraseNombre");
parrafo.innerText = "La frase con el nombre es " + welcomeMessage;

parrafo = document.getElementById("e1fraseSinQueTal");
parrafo.innerText = "La frase sin que tal es " + mensajeBienvenidaSinQueTal;

//OPCION 2 PARA IMPRIMIR
//IMPORTANTE, ESTE MODO VA A AGREGAR EL TEXTO SIEMPRE AL FINAL, EL ANTERIOR VA A ESTAR DONDE TU ELIJAS PONERLO EN EL HTML
let divEjercicios = document.getElementById("contenidoEjercicios");
let nuevoParrafo2;

nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerText = "La frase sin que tal es " + mensajeBienvenidaSinQueTal;
divEjercicios.appendChild(nuevoParrafo2);

nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerText = "La frase con el nombre es " + welcomeMessage;
divEjercicios.appendChild(nuevoParrafo2);





