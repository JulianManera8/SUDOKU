// HACER QUE MANTENGA EL COLOR LA CELDA SELECCIONADA

const tablero = document.getElementById('tablero');
const numero = document.getElementById('grillaNumeros');

//crear arreglo con todas las celdas



crearEventos();
function crearEventos() {
    tablero.addEventListener('click', colorCelda);
    numero.addEventListener('click', colorNumero); 
}


function colorCelda(e) {

    limpiarColorCeldas();

    var celdaSeleccionada = e.target;
    if (celdaSeleccionada.classList.contains('celda')) {
        celdaSeleccionada.classList.add('celdaActiva');
    }

    //HACER QUE ME SELECCIONE LOS OTROS NUMEROS SI TENGO YA UN NUMERO BIEN PUESTO

}

function colorNumero(e) {
    limpiarColorNumeros();

    var numeroSeleccionado = e.target;
    if (numeroSeleccionado.classList.contains('numero')) {
        numeroSeleccionado.classList.add('numeroActivo');
    }
}


function limpiarColorCeldas(e) {
    //selecciono todos los elementos que tengan la clase celda para recorrerlos 
    // y ver sacarle el activo, para luego darselo al que yo toque en colorCelda();
   
    // if (e.target != tablero || e.target != numero) {
    //     console.log('se ejecutaria el de celdas')
    // }

    celdasArreglo.forEach(celda => {
        celda.classList.remove('celdaActiva');

    });

}

function limpiarColorNumeros() {

    // if (e.target != numero) {
    //     console.log('se ejecutaria el de numeros')
    // }
    
    numerosArreglo.forEach(numero => {
        numero.classList.remove('numeroActivo')
    });

}

