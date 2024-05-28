function imprimir(mensaje,id){
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

//EJEMPLO 1: FOR. Mostrar el mismo mensaje 100 veces
//1. Iniciamos el contador a 0. 2. Definimos el numero de repeticiones. 3. Incrementamos con i++ para que el contandor vaya avanzando
function mostrarFrase(){
    let mensaje = "Hello world ";
    let mensajeFinal = "";
    let repeticiones = 100;

    for(let i=0; i<repeticiones;i++){
        //+= significa que se agrega texto al final, no se sustituye como el =
        mensajeFinal += i + mensaje;
    }

    imprimir(mensajeFinal,"e1solucion");
    
}

//EJEMPLO 2: FOR
function mostrarTabla() {
    let numero = parseInt(document.getElementById("e2tablamultiplicar").value);
    let repeticiones = 11;
    let mensaje = "";
    for (let i=0;i<repeticiones; i++){
        let resultado = numero * i;
        mensaje += "Tabla de multiplicar" + numero + "x"+ i + "=" + resultado + "\n";
    }
    imprimir(mensaje,"e2solucion");
}

