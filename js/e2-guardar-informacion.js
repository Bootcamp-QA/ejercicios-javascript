//1. DECLARAR UNA VARIABLE
//Nombre de variable recomendado en minuscula
let variable;
//Nombre de variable si tiene espacio, usar camelCase, que es la primera palabra minuscula y la siguiente mayuscula sin espacios
let miVariable;
//Podeis usar guiones para separar los espacios pero es mas recomendable camelCase.
let mi_variable;
//Los nombres de las variables no pueden comenzar por un numero 2Nombre
//Los nombres de las variables pueden tener un numero siempre y cuando no empiece por el
let variable2;

//2.INICIAR UNA VARIABLE
//Primero declarar la variable y luego iniciarla.
document.write("EJEMPLO 1: INICIAR UNA VARIABLE CIUDAD </br>");

let ciudad1;
ciudad1 = "Madrid";
document.write("La variable ciudad tiene el valor: " + ciudad1);

//Declarar la variable e iniciarla a la vez
document.write("</br> EJEMPLO 2: INICIAR UNA VARIABLE EDAD </br>");
let edad1 = 33;
//cambiamos el valor de la variable edad
edad1 = 34;
document.write("La variable edad tiene el valor: " + edad1);


//TIPOS DE VARIABLES
//NUMERO ENTERO O CON DECIMALES. LOS DECIMALES VAN CON PUNTO. Y SIEMPRE SIN COMILLAS LOS NUMEROS.
document.write("</br> EJEMPLO 3: CREAR UNA VARIABLE DE TIPO NUMERO </br>");
let numero = 5;
let numeroDecimales = 5.5;
document.write("El numero sin decimales es:" + numero);
document.write("</br>");
document.write("El numero con decimales es "+ numeroDecimales);
//CADENAS. Pueden usarse comillas simples o dobles. No las mezcles, usa solo una de ellas. Cuidado con caracteres especiales, no pueden ir comillas del mismo tipo dentro del texto.
document.write("</br> EJEMPLO 4: CREAR UNA VARIABLE DE TIPO TEXTO - STRING </br>");
let saludo = "Hola que tal?";
let despedida = "Adios me voy";
let numeroEnTexto = "33";
document.write("La variable de texto saludo es: "+ saludo);
document.write("</br>");
document.write(despedida);
document.write("</br>");
document.write(numeroEnTexto);
//BOOLEANOS. true o false. En minuscula y sin comillas.
document.write("</br> EJEMPLO 5: CREAR UNA VARIABLE DE TIPO BOOLEANO </br>");
let estaSoleado = true;
let esDeDia = false;
document.write("La variable booleana esta soleado es: " + estaSoleado);
document.write("</br>");
document.write("La variable booleana es de dia es:" + esDeDia);

//EJERCICIOS PARA PRACTICAR
document.write("</br> EJERCICIOS PARA PRACTICAR </br>");

document.write("EJERCICIO 1</br>");
let nombre;
let apellidos;
let edad;
let altura;
let ciudad;
let gustaPlaya;
let gustaMontaña;
let gustaChocolate;
let tieneMascota;

nombre = "Samanta";
apellidos = "Ramos";
edad = 39;
altura = 1.70;
ciudad = "Malaga";
gustaPlaya = true;
gustaMontaña = true;
gustaChocolate = false;
tieneMascota = true;

document.write("Información de la persona:</br>");
document.write("Nombre:" + nombre + "</br>");
document.write("Apellidos:" + apellidos + "</br>");
document.write("Edad:" + edad + "</br>");
document.write("Altura:" + altura + "</br>");
document.write("Ciudad:" + ciudad + "</br>");
document.write("¿Le gusta la playa?</br>" + gustaPlaya + "</br>");
document.write("¿Le gusta la montaña?</br>" + gustaMontaña + "</br>");
document.write("¿Le gusta el chocolate?</br>" + gustaChocolate + "</br>");
document.write("¿Tienes mascota?</br>" + tieneMascota + "</br>");
document.write("</br>")

document.write("INFORMACION DE UN CONOCIDO</br>")
nombre = "Francisco";
apellidos = "Coronado";
edad = 58;
altura = 1.78;
ciudad = "Malaga";
gustaPlaya = false;
gustaMontaña = false;
gustaChocolate = false;
tieneMascota = true;

document.write("Información de la persona:</br>");
document.write("Nombre:" + nombre + "</br>");
document.write("Apellidos:" + apellidos + "</br>");
document.write("Edad:" + edad + "</br>");
document.write("Altura:" + altura + "</br>");
document.write("Ciudad:" + ciudad + "</br>");
document.write("¿Le gusta la playa?</br>" + gustaPlaya + "</br>");
document.write("¿Le gusta la montaña?</br>" + gustaMontaña + "</br>");
document.write("¿Le gusta el chocolate?</br>" + gustaChocolate + "</br>");
document.write("¿Tienes mascota?</br>" + tieneMascota + "</br>");
document.write("</br>");



document.write("</br> EJERCICIO 2</br>");
document.write("</br> asígnale los valores de tu película favorita y muéstrala en tu página </br>");
let movieTitle = "Ataque del Titan";
let director = "Tetsurō Araki";
let genero = "anime";
let yaerRelease = 2013;
let duration = 72;
let awards = true;

document.write("El anime es " + movieTitle + ", el director es el " + director + ", su año de lanzamiento fue en " + yaerRelease + " y tiene " + duration + " episodios.");
document.write("El genero es: " + genero);
document.write("</br>");
document.write("Tiene premios?: " + awards);
document.write("</br>");

document.write("</br> Cambiar titulo y genero a ingles </br>");
movieTitle = "Attack on Titan";
genero = "animation";

document.write("El anime es " + movieTitle + ", el director es el " + director + ", su año de lanzamiento fue en " + yaerRelease + " y tiene " + duration + " episodios.");
document.write("El genero es: " + genero);
document.write("</br>");
document.write("Tiene premios?: " + awards);
document.write("</br>");

document.write("</br> EJERCICIO  3 - DECLARAR VARIABLES SOBRE UNA CANCIÓN </br>");

let songTitle = "Sweet Child o Mine";
let artist = "Guns N'Roses";
let album = "Appetite For Destruction";
let releaseYear = 1987;
let minDuration = 5.6;
let hasVideoclip = true;
document.write("<br>");
document.write("The title of the song is:" + songTitle + "<br>");
document.write("The name of the artist is:" + artist + "<br>");
document.write("The name of the of the album is:" + album + "<br>");
document.write("What is the year of release?:" + releaseYear + "<br>");
document.write("How long is the song?:" + minDuration + "<br>");
document.write("Does the song a videoclip?:" + hasVideoclip + "<br>");

document.write("</br> EJERCICIO  3.1 - CAMBIAR LOS VALORES POR OTRA CANCIÓN </br>");

songTitle = "Su culo es miel";
artist ="Extermoduro";
album = "Canciones Prohibidas";
releaseYear = 1998;
minDuration = 5.5;
hasVideoclip = false;
document.write("<br>");
document.write("The title of the song is:" + songTitle + ", ");
document.write("The name of the artist is:" + artist + "<br>");
document.write("The name of the of the album is:" + album + "<br>");
document.write("What is the year of release?:" + releaseYear + "<br>");
document.write("How long is the song?:" + minDuration + "<br>");
document.write("Does the song a videoclip?:" + hasVideoclip + "<br>");

