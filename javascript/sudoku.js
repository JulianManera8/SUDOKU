//funcionalidad del juego
var numeroSelec = null;
var celdaSelec = null;

var errores = 0;

var tablero1 = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]
    
var solucion1 = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]


window.onload = function () {
    poblarTablero();
}

function poblarTablero() {

    //grilla de los numeros para seleccionar
    const gridNumeros = document.querySelector('#grillaNumeros')
    for (i = 1; i <= 9; i++) {
        const numeros = document.createElement("div");
        numeros.innerHTML = i;
        numeros.id = i;
        numeros.classList.add("main-numeros-cell", "numero");

        gridNumeros.appendChild(numeros);
    };

    //grilla de las celdas 9*9
    const gridSudoku = document.querySelector('#tablero')
    for (r = 0; r <= 8; r++) {
        for (c = 0; c <= 8; c++) {
            //<div class="main-sudoku-cell celda border-right border-bottom"></div>
            const celda = document.createElement("div");
            celda.id = r.toString() + "-" + c.toString();
            celda.classList.add("celda");
            
            // SEGUIR DESDE QUE LE DA FUNCIONALIDAD AL JUEGO, DESDE MINUTO 16.28
            celda.innerHTML = r.toString() + "-" + c.toString();

            

            gridSudoku.appendChild(celda);

        };
    };

    let celdas = document.querySelectorAll('.celda');
    celdasArreglo = [];
        celdas.forEach(celda => {
        celdasArreglo.push(celda)
    })

}
