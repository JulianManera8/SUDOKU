// HACER QUE MANTENGA EL COLOR LA CELDA SELECCIONADA

const tablero = document.getElementById('tablero');
//crear arreglo con todas las celdas
let celdas = document.querySelectorAll('.celda');
celdasArreglo = [];
celdas.forEach(celda => {
    celdasArreglo.push(celda)
})


crearEventos();
function crearEventos() {
    tablero.addEventListener('click', colorCelda);
}


function colorCelda(e) {

    limpiarColorCeldas();

    var celdaSeleccionada = e.target;
    if (celdaSeleccionada.classList.contains('celda')) {
        celdaSeleccionada.classList.add('celdaActiva');
        fycActiva(celdaSeleccionada);
    }

    

    //HACER QUE ME SELECCIONE LOS OTROS NUMEROS SI TENGO YA UN NUMERO BIEN PUESTO



}

function limpiarColorCeldas() {
    //selecciono todos los elementos que tengan la clase celda para recorrerlos 
    // y ver sacarle el activo, para luego darselo al que yo toque en colorCelda();

    celdasArreglo.forEach(celda => {
        celda.classList.remove('celdaActiva');
        celda.classList.remove('fycActiva');

    });

}

function fycActiva(celdaSeleccionada) {
    //HACER QUE ME SELECCIONE LA FILA Y LA COLUMNA Y EL CUADRANTE SI NO TIENE NUMERO ASIGNADA
    // usar estilo fycActiva para darle color a las otras celdas
    // console.log(celdas[3].textContent); ASI SELECCIONO UNA SOLA CELDA POR EJ
    // recordar que el arreglo arranca desde 0, posicion 0 = 1


    //sacar index d la celda seleccionada
    const posicionCelda = celdasArreglo.indexOf(celdaSeleccionada);

    //buscar los otros indices en base a esa posicion
    
    


}