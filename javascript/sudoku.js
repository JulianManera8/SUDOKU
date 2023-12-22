//FUNCIONALIDAD DEL JUEGO

//iniciar las variables que me toman los valores de las celdas y numeros que toco
var numeroSelec = null;
var celdaSelec = null;

//grilla de los numeros para seleccionar
const gridNumeros = document.querySelector('#grillaNumeros')
const gridSudoku = document.querySelector('#tablero')

//iniciar contador de errores
var errores = 0;

//AL PRINCIPIO ARRANCA TODO COMO NO CLICKEABLE PQ HAY Q DARLE PLAY
let esPicable = false;


// ARREGLO PARA LOS NUMEROS QUE ESTEN BIEN PUESTOS
let numerosBien = [];

// DISTINTOS tableros de sudoku
//ESTO PROXIMAMENTE PASA PARA LA BASE DE DATOS
var tablero1 = [
    // "--74916-5",
    // "2---6-3-9",
    // "-----7-1-",
    // "-586----4",
    // "--3----9-",
    // "--62--187",
    // "9-4-7---2",
    // "67-83--41",
    // "81--45-6-"

    //PARA  DARLE LA FUNCIONALIDAD DE TERMINAR EL JUEGO

    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "81294576-"
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
    "548-23---",
    "76---458-",
    "--2578---",
    "--49-27-6",
    "3758----9",
    "---715348",
    "2563---17",
    "---4572-3",
    "4--261--5"
];

var solucion2 = [
    "548623971",
    "763194582",
    "192578634",
    "814932756",
    "375846129",
    "629715348",
    "256389417",
    "981457263",
    "437261895"
];

var tablero3 = [
    "78932----",
    "--164-792",
    "64275----",
    "96--1-57-",
    "1---836--",
    "324---18-",
    "-7319----",
    "---87--31",
    "81-----47"
];
var solucion3 = [
    "789321456",
    "531648792",
    "642759318",
    "968412573",
    "157983624",
    "324567189",
    "273194865",
    "496875231",
    "815236947"
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
    "-----231-",
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
    poblarTablero();
}

function poblarTablero() {
    
    // GRID DE LOS NUMEROS

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
                    limpiarNumIguales();
                }
            })
        });

        //crear efectivamente los numeros para elegir
        gridNumeros.appendChild(numeros);
    };


    //  GRID DE LAS CELDAS
    for (r = 0; r <= 8; r++) {
        for (c = 0; c <= 8; c++) {
            //<div class="main-sudoku-cell celda border-right border-bottom"></div>
            const celda = document.createElement("div");
            celda.id = r.toString() + "-" + c.toString();
            celda.classList.add("celda");

            //seleccionar celda para completar el numero que falta
            celda.addEventListener("click", function () {
                if (esPicable) {
                    ponerNumero(celda);
                }
                
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

                celda.classList.add("conNumeroInicio", "bien");
                sumarArrBien(celda)
                
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

    //creamos un arreglo con todos los nummeros
    let numeros = document.querySelectorAll('.numero')
    numerosArreglo = [];

    numeros.forEach(numero => {
        numerosArreglo.push(numero)
    })

}

function leerNumeroSelec() {
    numeroSelec = this.textContent;
    
    limpiarNumIguales()
    let numerosIguales = celdasArreglo.filter( celda => celda.textContent == numeroSelec)

    numerosIguales.forEach(numero => {
        numero.style.backgroundColor = 'rgba(80, 162, 255, 0.500)'
    })


    return numeroSelec
}

function limpiarNumIguales() {
    numerosIguales = [];

    celdasArreglo.forEach(celda => {

        if (celda.classList.contains('conNumeroInicio')) {
            celda.style.backgroundColor = 'rgba(246, 226, 183, 0.245)'
        } else {
            celda.style.backgroundColor = '#ffffff'
        }    

    })
    
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
            celda.classList.add('numeroBien', "bien");
            celda.classList.remove('celdaActiva');

            sumarArrBien(celda);

        } else if (numeroSelec == null) {
            celda.textContent = '';
            celda.classList.remove('numeroEquivocado');

        } else {
            //si no conicide, aumentamos el error
            errores++;
            const divErrores = document.getElementById('errores').innerHTML = errores
            
            ///ponemos el numero pero le damos la categoria de que esta mal
            celda.textContent = numeroSelec;
            celda.classList.add('numeroEquivocado')
            
        }
        

    } else if (celda.textContent != '') {

        let numeroCelda = celda.textContent
                
        limpiarNumIguales()
        let numerosIguales = celdasArreglo.filter( celda => celda.textContent == numeroCelda)

        numerosIguales.forEach(numero => {
            numero.style.backgroundColor = 'rgba(80, 162, 255, 0.500)'
        })
    } 

}



function sumarArrBien(celda) {
    if (celda.classList.contains('bien')) {
        numerosBien.push(celda.textContent);
        
        const num1 = numerosBien.filter( num => num === '1' );
        let num1Completo = num1.length

        if (num1Completo === 9) {
            let numero1 = document.getElementById('1')
            numero1.removeEventListener('click', leerNumeroSelec);
            numero1.classList.add('numeroCompleto');
        }

        const num2 = numerosBien.filter( num => num === '2' );
        let num2Completo = num2.length

        if (num2Completo === 9) {
            let numero2 = document.getElementById('2')
            numero2.removeEventListener('click', leerNumeroSelec);
            numero2.classList.add('numeroCompleto');
        }

        const num3 = numerosBien.filter( num => num === '3' );
        let num3Completo = num3.length

        if (num3Completo === 9) {
            let numero3 = document.getElementById('3')
            numero3.removeEventListener('click', leerNumeroSelec);
            numero3.classList.add('numeroCompleto');
        }

        const num4 = numerosBien.filter( num => num === '4' );
        let num4Completo = num4.length

        if (num4Completo === 9) {
            let numero4 = document.getElementById('4')
            numero4.removeEventListener('click', leerNumeroSelec);
            numero4.classList.add('numeroCompleto');
        }

        const num5 = numerosBien.filter( num => num === '5' );
        let num5Completo = num5.length

        if (num5Completo === 9) {
            let numero5 = document.getElementById('5')
            numero5.removeEventListener('click', leerNumeroSelec);
            numero5.classList.add('numeroCompleto');
        }

        const num6 = numerosBien.filter( num => num === '6' );
        let num6Completo = num6.length

        if (num6Completo === 9) {
            let numero6 = document.getElementById('6')
            numero6.removeEventListener('click', leerNumeroSelec);
            numero6.classList.add('numeroCompleto');
        }

        const num7 = numerosBien.filter( num => num === '7' );
        let num7Completo = num7.length

        if (num7Completo === 9) {
            let numero7 = document.getElementById('7')
            numero7.removeEventListener('click', leerNumeroSelec);
            numero7.classList.add('numeroCompleto');
        }

        const num8 = numerosBien.filter( num => num === '8' );
        let num8Completo = num8.length

        if (num8Completo === 9) {
            let numero8 = document.getElementById('8')
            numero8.removeEventListener('click', leerNumeroSelec);
            numero8.classList.add('numeroCompleto');
        }

        const num9 = numerosBien.filter( num => num === '9' );
        let num9Completo = num9.length

        if (num9Completo === 9) {
            let numero9 = document.getElementById('9')
            numero9.removeEventListener('click', leerNumeroSelec);
            numero9.classList.add('numeroCompleto');
        }

        if (numerosBien.length == 81) {

            cronometrar = false;

            celdasArreglo.forEach( celda => {

                setTimeout(() => {
                    celda.classList.add('win');

                    gridNumeros.style.opacity = '0';
                    gridNumeros.style.transition = 'all 2s ease-in';

                    errorBtnTimer.style.opacity = '0';
                    errorBtnTimer.style.transition = 'all 2s ease-in';

                }, 500);

                // Y ACA CREO UN CARTEL EN EL MEDIO DEL SUDOKU
                // CON EL SUDOKU DE FONDO, QUE APAREZCA FELICITACIONES!
                // EL TIEMPO QUE HIZO, LOS ERRORES, Y SI QUIERE REINICIAR EL NIVEL
                // O ELEGIR OTRO NIVEL
                




            })
            
        }

    }
}



// FUNCIONALIDAD DEL TIMER

let tiempoRef = Date.now()
let cronometrar = false
let acumulado = 0

const btnInicio = document.getElementById('btn-play')
const btnPausa = document.getElementById('btn-pausa')
const btnReset = document.getElementById('btn-reset')
const btnJugar = document.getElementById('btn-jugar')
const tableroCss = document.querySelector('.main-sudoku-grid')
const btnContenedor = document.querySelector('.btn-pausa-reset')
const erroresCss = document.querySelector('.div-errores')
const numerosContenedor = document.querySelector('.main-numeros-grid')
const errorBtnTimer = document.getElementById('errBtnTim')
let tiempo = document.getElementById("timer")


eventos();
function eventos() {

    btnJugar.addEventListener('click', () => {
        cronometrar = true;
        esPicable = true;

        btnJugar.style.opacity = '0';
        btnJugar.style.transition = ' all 0.5s ease';

        setTimeout(() => {

            setTimeout(() => {
            
                btnJugar.setAttribute('hidden', true);
                btnInicio.setAttribute('hidden', true);
                
                btnReset.style.opacity = '100%';
                btnReset.style.transition = 'all 0.5s ease';

                btnPausa.style.opacity = '100%';
                btnPausa.style.transition = 'all 0.5s ease';
    
                
            }, 1500);

            setTimeout(() => {
                btnPausa.removeAttribute('hidden')
                btnReset.removeAttribute('hidden')

                tableroCss.style.opacity = '100'
                tableroCss.style.transition = 'all 0.5s ease';

                numerosContenedor.style.opacity = '100'
                numerosContenedor.style.transition = 'all 0.5s ease';
                
            }, 700);

        }, 700);


    })

    btnInicio.addEventListener('click', () => {
        cronometrar = true;
        esPicable = true;


        setTimeout(() => {
            btnPausa.removeAttribute('hidden')
            btnPausa.style.opacity = '100%';
            btnPausa.style.transition = 'all 0.5s ease'

            btnInicio.setAttribute('hidden', true)
            btnReset.removeAttribute('hidden')
        }, 700);
        


        tableroCss.style.opacity = '100'
        tableroCss.style.transition = 'all 1s ease';

        numerosContenedor.style.opacity = '100'
        numerosContenedor.style.transition = 'all 1s ease';

        btnContenedor.classList.add('moverArriba')

        erroresCss.style.scale  = '100%';
        erroresCss.style.transition = 'all 1s ease'

        tiempo.style.scale  = '100%';
        tiempo.style.transition = 'all 1s ease'

    })

    btnPausa.addEventListener('click', pausarJuego)

    btnReset.addEventListener('click', resetJuego)


}

function pausarJuego() {
    cronometrar = false
    esPicable = false;

    setTimeout(() => {
        btnPausa.setAttribute('hidden', true)
        btnInicio.removeAttribute('hidden')
    }, 500);

    tableroCss.style.opacity = '10%'
    tableroCss.style.transition = 'all 0.5s ease';
    
    numerosContenedor.style.opacity = '10%'
    numerosContenedor.style.transition = 'all 0.5s ease';
    
    btnContenedor.classList.remove('moverArriba')
    btnContenedor.style.transition = 'all 1s ease'
    
    btnInicio.style.opacity = '100%';
    btnInicio.style.transition = 'all 0.5s ease'
    
    btnReset.style.transition = 'all 1s ease'
    
    erroresCss.style.scale  = '130%';
    erroresCss.style.transition = 'all 1s ease';
    
    tiempo.style.scale  = '130%';
    tiempo.style.transition = 'all 1s ease';
        
}

function resetJuego() {


    var confirmar = confirm('¿Quieres resetear el juego? Se perdera el progreso que hayas hecho')
    
    if (confirmar) {
        cronometrar = false
        acumulado = 0
        esPicable = false;

        btnReset.style.opacity = '0'
        btnPausa.style.opacity = '0'
        btnInicio.style.opacity = '0'
        
        btnReset.style.transition = 'all 0.8s ease'
        btnPausa.style.transition = 'all 0.8s ease'
        btnInicio.style.transition = 'all 0.8s ease'

        setTimeout(() => {
            btnJugar.style.opacity = '100%'
            btnJugar.style.transition = 'all 0.5s ease'

            btnReset.setAttribute('hidden', true)
            btnPausa.setAttribute('hidden', true)

            btnContenedor.classList.remove('moverArriba')

            setTimeout(() => {
                
                btnJugar.removeAttribute('hidden')
                btnInicio.setAttribute('hidden', true)
                

            }, 900);

        }, 1200);

        tableroCss.style.opacity = '10%'
        numerosContenedor.style.opacity = '10%'

        erroresCss.style.scale  = '100%';
        erroresCss.style.transition = 'all 1s ease'

        tiempo.style.scale  = '100%';
        tiempo.style.transition = 'all 1s ease'

        let erroresHtml = document.querySelector('#errores')
        errores = errores*0
        erroresHtml.textContent = errores
    

        celdasArreglo.forEach(celda => {
           if( !celda.classList.contains('conNumeroInicio') ) {
                celda.textContent = '';
                celda.classList.remove('numeroEquivocado')
                celda.classList.remove('numeroBien')
                
            }

        })

        reestablecerNum();
        limpiarNumIguales();
    }

}

function reestablecerNum() {
    
    numerosBien = [];
    celdasArreglo.forEach(celda => {
        if( celda.classList.contains('conNumeroInicio' ,'numeroBien') ) {
            sumarArrBien(celda);
        }
    })

    let numero1 = document.getElementById('1')
            numero1.addEventListener('click', leerNumeroSelec);
            numero1.classList.remove('numeroCompleto');

    let numero2 = document.getElementById('2')
            numero2.addEventListener('click', leerNumeroSelec);
            numero2.classList.remove('numeroCompleto');

    let numero3 = document.getElementById('3')
            numero3.addEventListener('click', leerNumeroSelec);
            numero3.classList.remove('numeroCompleto');


    let numero4 = document.getElementById('4')
            numero4.addEventListener('click', leerNumeroSelec);
            numero4.classList.remove('numeroCompleto');
            
    let numero5 = document.getElementById('5')
            numero5.addEventListener('click', leerNumeroSelec);
            numero5.classList.remove('numeroCompleto');
            
    let numero6 = document.getElementById('6')
            numero6.addEventListener('click', leerNumeroSelec);
            numero6.classList.remove('numeroCompleto');
            
    let numero7 = document.getElementById('7')
            numero7.addEventListener('click', leerNumeroSelec);
            numero7.classList.remove('numeroCompleto');
            
    let numero8 = document.getElementById('8')
            numero8.addEventListener('click', leerNumeroSelec);
            numero8.classList.remove('numeroCompleto');
            
    let numero9 = document.getElementById('9')
            numero9.addEventListener('click', leerNumeroSelec);
            numero9.classList.remove('numeroCompleto');




}

setInterval(() => {
    
    if (cronometrar) {
        acumulado += Date.now() - tiempoRef
    } 

    tiempoRef = Date.now();
    tiempo.innerHTML = formatearMS(acumulado)

}, 1000/60)

//ahora hay que formatear el acumulado que nos lo da en milisegundos (MS)
function formatearMS(tiempo_ms) {
    let MS = tiempo_ms % 1000
    
    
    let St = Math.floor(((tiempo_ms - MS) / 1000))
    
    let S = St%60
    let M = Math.floor((St / 60) % 60)
    let H = Math.floor((St/60 / 60))
    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0)
    }

    return  M.ceros(2) + ":" + S.ceros(2)
    
}









