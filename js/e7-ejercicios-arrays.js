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

/**
 * 3. Agrega un boton mostrar alumnos ordenados, que muestre los alumnos ordenados por nombre.
 */

function alumnosOrdenados() {
    listaAlumnos.sort();
    mostrarListado();
}

/**
 * 4. Agrega una nueva opcion para agregar un nuevo alumno. Para ello:
Agrega un campo para introducir el nombre del alumno. No puede estar vacio y debe tener maximo 30 caracteres.
Agrega un boton agregar, que al pulsarlo agrege al nuevo alumno a la lista y muestre la lista de alumnos actualizada.
 */

function agregarAlumno(){
    let nuevoAlumno = document.getElementById("ej4nombre").value;
    listaAlumnos.push(nuevoAlumno);
    let mensaje = "La nueva lista es " + listaAlumnos;
    imprimir(mensaje, "respuesta4");
    //mostrarListado();
}