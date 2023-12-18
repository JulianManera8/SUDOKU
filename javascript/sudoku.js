//FUNCIONALIDAD DEL JUEGO

//iniciar las variables que me toman los valores de las celdas y numeros que toco
var numeroSelec = null;
var celdaSelec = null;

//iniciar contador de errores
var errores = 0;

// DISTITNOS tableros de sudoku
//ESTO PROXIMAMENTE PASA PARA LA BASE DE DATOS
var tablero1 = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83--41",
    "81--45-6-"
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

var tablero2 = [
    "--8623---",
    "971---6--",
    "--397-548",
    "85-----97",
    "19-85--6-",
    "36----854",
    "---362---",
    "----85362",
    "36----485"
];
var solucion2 = [
    "548623971",
    "971548623",
    "623971548",
    "854362197",
    "197854362",
    "362197854",
    "485362197",
    "197485362",
    "362197485"
];

var tablero3 = [
    "78---1456",
    "--67-----",
    "3--45---9",
    "978----45",
    "---978--2",
    "13--4-9--",
    "8--231--4",
    "----97---",
    "2315----7"
];
var solucion3 = [
    "789321456",
    "456789321",
    "321456789",
    "978132645",
    "645978132",
    "132645978",
    "897231564",
    "564897231",
    "231564897"
];

var tablero4 = [
    "598741---",
    "23---74--",
    "7--236---",
    "859-----3",
    "-2385----",
    "--46---59",
    "985------",
    "3-298---7",
    "4-------5"
];
var solucion4 = [
    "598741236",
    "236598741",
    "741236598",
    "859174623",
    "623859174",
    "174623859",
    "985417362",
    "362985417",
    "417362985"
];

var tablero5 = [
    "98564----",
    "123--5--7",
    "64712----",
    "598-----2",
    "-12--876-",
    "76---25--",
    "-----231",
    "-31---476",
    "-----1859"
];
var solucion5 = [
    "985647123",
    "123985647",
    "647123985",
    "598764312",
    "312598764",
    "764312598",
    "859476231",
    "231859476",
    "476231859"
];

var tablero6 = [
    "7--986---",
    "3------86",
    "--63217--",
    "5---98--2",
    "1-257----",
    "6-----574",
    "4578-----",
    "21---78--",
    "8---13---"
];
var solucion6 = [
    "745986321",
    "321745986",
    "986321745",
    "574698132",
    "132574698",
    "698132574",
    "457869213",
    "213457869",
    "869213457"
];

var tablero7 = [
    "------714",
    "714--2---",
    "---7--562",
    "2568-----",
    "47-----69",
    "8694--256",
    "62---6147",
    "147------",
    "98--47---"
];
var solucion7 = [
    "562698714",
    "714562698",
    "698714562",
    "256869471",
    "471256869",
    "869471256",
    "625986147",
    "147625986",
    "986147625"
];

var tablero8 = [
    "5----2174",
    "174---632",
    "-3217----",
    "----63--7",
    "---859---",
    "------859",
    "98-------",
    "---9853--",
    "----41985"
];
var solucion8 = [
    "598632174",
    "174598632",
    "632174598",
    "859263417",
    "417859263",
    "263417859",
    "985326741",
    "741985326",
    "326741985"
];

var tablero9 = [
    "854692---",
    "--1854692",
    "692-----4",
    "48-------",
    "---48--69",
    "2----74--",
    "----26-13",
    "7--54----",
    "92------8"
];
var solucion9 = [
    "854692371",
    "371854692",
    "692371854",
    "485269137",
    "137485269",
    "269137485",
    "548926713",
    "713548926",
    "926713548" 
];

var tablero10 = [
    "-5-82-17-",
    "1739-----",
    "8-------6",
    "-----2317",
    "3--69----",
    "4--3-76--",
    "-69---731",
    "73156----",
    "---7315--"
];
var solucion10 = [
    "956824173",
    "173956824",
    "824173956",
    "695482317",
    "317695482",
    "482317695",
    "569248731",
    "731569248",
    "248731569"
];

var tablero11 = [
    "7---623--",
    "39-----62",
    "4623-----",
    "------139",
    "1--8-52--",
    "---139---",
    "-------13",
    "9--------",
    "6-4913---"
];
var solucion11 = [
    "758462391",
    "391758462",
    "462391758",
    "875246139",
    "139875246",
    "246139875",
    "587624913",
    "913587624",
    "624913587"
];

var tablero12 = [
    "4---923--",
    "-----6892",
    "892-----6",
    "6--28---1",
    "7-1645---",
    "-8973--45",
    "564-----3",
    "1-35--9--",
    "92-----64"
];
var solucion12 = [
    "456892317",
    "317456892",
    "892317456",
    "645289731",
    "731645289",
    "289731645",
    "564928173",
    "173564928",
    "928173564"
];

var tablero13 = [
    "4---396--",
    "621-----9",
    "--962----",
    "----73162",
    "162-----3",
    "97316---8",
    "8543----6",
    "---854--7",
    "-----6854"
];
var solucion13 = [
    "485739621",
    "621485739",
    "739621485",
    "548973162",
    "162548973",
    "973162548",
    "854397216",
    "216854397",
    "397216854"
];

var tablero14 = [
    "-----7963",
    "--3458-17",
    "---963---",
    "-----1396",
    "---8457--",
    "721---845",
    "------639",
    "63-------",
    "1--63-5--"
];
var solucion14 = [
    "458217963",
    "963458217",
    "217963458",
    "845721396",
    "396845721",
    "721396845",
    "584172639",
    "639584172",
    "172639584"
];

var tablero15 = [
    "1----6357",
    "--7194---",
    "---357194",
    "4196-27--",
    "735------",
    "------419",
    "-4126----",
    "---941--8",
    "2--57----"
];
var solucion15 = [
    "194826357",
    "357194826",
    "826357194",
    "419682735",
    "735419682",
    "682735419",
    "941268573",
    "573941268",
    "268573941"
];

//apenas cargue la pag, se llena el tablero
window.onload = function () {
    // if (cronometrar) {
    // }
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

        //QUE LEA EL NUMERO QUE SELECCIONAMOS PARA PONERLO DPS EN EL TABLERO
        numeros.addEventListener("click", leerNumeroSelec);

        // si toco en algun lugar q no sea los numeros ni el tablero, me desSelecciona
        numeros.addEventListener("click", function () {
            window.addEventListener('click', (e) => {
                if (!e.target.classList.contains('celda') && !e.target.classList.contains('numero')) {
                    numeros.classList.remove('numeroActivo');
                    numeroSelec = null
                }
            })
        });

        //crear efectivamente los numeros para elegir
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

            //seleccionar celda para completar el numero que falta
            celda.addEventListener("click", function () {
                ponerNumero(celda);

                // si toco en algun lugar q no sea los numeros ni el tablero, me desSelecciona
                window.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('celda') && !e.target.classList.contains('numero')) {
                        celda.classList.remove('celdaActiva');
                    }
                })
            });

            //aca llenamos el tablero con el arreglo del tablero que elijamos
            //ESTE EJEMPLO ES CON EL TABLERO1, SI QUIERO OTRO 
            //TENGO Q PONER TABLERO 2 en la condicion del IF y tmb abajo de eso
            if (tablero1[r][c] != "-" ) {
                celda.innerHTML = tablero1[r][c]
            }
            
            //QUE NO HAGA HOVER CON LAS CELDAS QUE ESTABAN DESDE UN PRINCIPIO
            if (celda.textContent != "") {
                celda.classList.add("conNumeroInicio");
                celda.addEventListener("mouseenter", function() {
                    celda.style.backgroundColor = 'rgba(246, 226, 183, 0.245)'
                });
                
            }
            
            //PONERLE LAS LINEAS QUE SEPARAN CUADRICULAS
            if(r === 2 || r === 5) {
                celda.classList.add("border-bottom");
            }
            if(c === 2 || c === 5) {
                celda.classList.add("border-right");
            }

            //CREAR EFECTIVAMENTE EL TABLERO DEL SUDOKU
            gridSudoku.appendChild(celda);

        };
    };

    //creamos un arreglo con todas las celdas
    let celdas = document.querySelectorAll('.celda');
    celdasArreglo = [];

    
    celdas.forEach(celda => {
        celdasArreglo.push(celda)
    })

    let numeros = document.querySelectorAll('.numero')
    numerosArreglo = [];

    numeros.forEach(numero => {
        numerosArreglo.push(numero)
    })

}

function leerNumeroSelec() {
    numeroSelec = this.textContent;
    return numeroSelec
}


function ponerNumero(celda) {


    //  ahora obtenemos la coordenada de la celda que puse 
    // para corroborar que este bien lo que estoy poniendo
    let coordenadas = celda.id.split('-'); // aca me da dos arreglos distitnos con r y c
    let r = parseInt(coordenadas[0]); //le pasamos a numero el primer parametro del id al r
    let c = parseInt(coordenadas[1]); //le pasamosa a numero el segundo parametro del id a c

    //si seleccionamos un numero, y la celda que tocamos esta vacia, entonces
    // ponemos un numero
    if (numeroSelec != null && celda.textContent == '' || celda.classList.contains('numeroEquivocado')) {

        //comprobamos que el numero este bien segun la solucion
        if (solucion1[r][c] == numeroSelec) {
            //si el nuemro seleccionado coincide con el indice de la solucion, joya
            celda.textContent = numeroSelec
            celda.classList.remove('numeroEquivocado');
            celda.classList.add('numeroBien');
            celda.classList.remove('celdaActiva');

        } else {
            //si no conicide, aumentamos el error
            errores++;
            const divErrores = document.getElementById('errores').innerHTML = errores
            
            ///ponemos el numero pero le damos la categoria de que esta mal
            celda.textContent = numeroSelec;
            celda.classList.add('numeroEquivocado')
            
        }

    } else if (celda.textContent != '') {
        // console.log(tablero)
        // celdasArreglo.forEach(celdaIgual => {
        //     if (celda.textContent == celdaIgual.textContent) {
        //         celda.classList.add('numerosIgualesTablero');
        //     }
        // })
    } 

    //ahora le pasamos que si coincide con la solucion1 en [r][c] el celda.id entonces que me ponga el numero

}


// FUNCIONALIDAD DEL TIMER

let tiempoRef = Date.now()
let cronometrar = false
let acumulado = 0

const btnInicio = document.getElementById('btn-play')
const btnPausa = document.getElementById('btn-pausa')
const btnReset = document.getElementById('btn-reset')
const tableroCss = document.querySelector('.main-sudoku-grid')

eventos();
function eventos() {
    btnInicio.addEventListener('click', () => {
        cronometrar = true
        btnPausa.removeAttribute('hidden')
        btnInicio.setAttribute('hidden', true)

        tableroCss.style.opacity = '100'


    })

    btnPausa.addEventListener('click', () => {
        cronometrar = false
        btnInicio.removeAttribute('hidden')
        btnPausa.setAttribute('hidden', true)

        tableroCss.style.opacity = '20%'


    })

    btnReset.addEventListener('click', resetJuego)


}

setInterval(() => {
    let tiempo = document.getElementById("timer")
    
    if (cronometrar) {
        acumulado += Date.now() - tiempoRef
    } 

    tiempoRef = Date.now();
    tiempo.innerHTML = formatearMS(acumulado)

}, 1000/60)

//ahora hay que formatear el acumulado que nos lo da en milisegundos (MS)
function formatearMS(tiempo_ms) {
    let MS = tiempo_ms % 1000
    let S = Math.floor(((tiempo_ms - MS) / 1000) % 60)
    let M = Math.floor((S / 60) % 60)
    let H = Math.floor( (M / 60 ))

    Number.prototype.ceros = function(n) {
        return (this+"").padStart(n, 0)
    }

    return M.ceros(2) + ":" + S.ceros(2);

}

function resetJuego() {

    var confirmar = confirm('¿Quieres resetear el juego? Se perdera el progreso que hayas hecho')
    
    if (confirmar) {
        cronometrar = false
        acumulado = 0
        btnInicio.removeAttribute('hidden')
        btnPausa.setAttribute('hidden', true)
        tableroCss.style.opacity = '5%'
        errores = 0
        
        // let celdasReset = celdasArreglo.filter(celda => celda.classList.contains('conNumeroInicio'))

        // celdasReset.textContent = '';


        celdasArreglo.forEach(celda => {
           if( !celda.classList.contains('conNumeroInicio') ) {
                celda.textContent = '';
                celda.classList.remove('numeroEquivocado')
                celda.classList.remove('numeroBien')
            }

        })
    }


}





