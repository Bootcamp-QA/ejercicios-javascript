/**
 * 1. Agrega un boton mostrar alumnos, que al pulsarlo muestre una lista con los nombres de 10 alumnos.
 */
let listaAlumnos = ["Pedro","Juan","Antonia", "Clara", "Susana","Lara", "Marcos", "Iván", "Daniel", "Paco"];


//EJERCICO 1
function mostrarListado() {
    mensaje = "Los alumnos son: " + listaAlumnos;
    imprimir(mensaje,"listadoalumnos");
}

/**
 * 2. Muestra el nombre del alumno de la posicion que elijas. Para ello:
Agrega un campo para elegir el alumno que quieren mostrar, no puede estar vacio y debe ser entre 1 y 10.
Agrega un boton mostrar alumno, que muestre el nombre del alumno elegido.
 */

function posicionLista() {
 
    let posicion = parseInt(document.getElementById("ej2posicion").value);
    let alumnoSeleccionado = listaAlumnos[posicion];
    let mensaje = "El alumno seleccionado es " + alumnoSeleccionado;
    imprimir(mensaje, "ej2resultado");

    
}