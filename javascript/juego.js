//que mantenga el color el cuadrante que selecciono
const tablero = document.querySelector('.main-sudoku-grid')
var celda = document.getElementById('celda')

colorCelda();
function colorCelda() {
    console.log('funciona color celda')
    celda.addEventListener('click', mantenerColor)
}

function mantenerColor(e) {
    console.log(e.textContent)
}