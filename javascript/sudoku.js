//FUNCIONALIDAD DEL JUEGO

//iniciar las variables que me toman los valores de las celdas y numeros que toco
var numeroSelec = null;
var celdaSelec = null;
var numeroId = null;
var numeroBorrar = false;

let arregloTablero = [];
let arregloNumerosLS = [];

//grilla de los numeros para seleccionar
const gridNumeros = document.querySelector('#grillaNumeros')
const gridSudoku = document.querySelector('#tablero')

//div para meter el mensaje de cuando gano
const mensajeFin = document.querySelector('.mensajeFin');

//iniciar contador de errores
var errores = 0;

//AL PRINCIPIO ARRANCA TODO COMO NO CLICKEABLE PQ HAY Q DARLE PLAY
let esPicable = false;


// ARREGLO PARA LOS NUMEROS QUE ESTEN BIEN PUESTOS
let numerosBien = [];


// LEER QUE NIVEL SELECCIONA
let nivelSelec = '';
let numeroTablero = [];
let numeroSolucion = [];

//activar y desactivar el hidden de home y game
const game = document.getElementById('main-game')
const home = document.getElementById('main-home');


// ---------------PARTE DE SELECCION DEL NIVEL QUE VA A JUGAR---------------

const nivelesTodos = document.getElementById('niveles')
const niveles = document.getElementsByName("nivel")

//que nos lea el click inicial en el nivel
leerNivel();
function leerNivel() {
    document.addEventListener("click", leerCheck)
}

//que nos tome el id del nivel que ponemos
function leerCheck(e) {

    if (e.target.id != 'niveles') {
        nivelSelec =  e.target.id

        if (nivelSelec != '') {
            parseInt(nivelSelec)
            elegirNivel(nivelSelec);
        }
    }

}

//que nos tome el tablero segun el nivel que ponemos
function elegirNivel(nivelSelec) {
    
    switch (nivelSelec) {
        case '01':
            numeroTablero = [
                "--74916-5",
                "2---6-3-9",
                "-----7-1-",
                "-586----4",
                "--3----9-",
                "--62--187",
                "9-4-7---2",
                "67-83--41",
                "81--45-6-"
            ]; 
            numeroSolucion = [
                "387491625",
                "241568379",
                "569327418",
                "758619234",
                "123784596",
                "496253187",
                "934176852",
                "675832941",
                "812945763"
            ];

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '02':
            numeroTablero = [
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
            numeroSolucion = [
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
            
            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '03':
            numeroTablero = [
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
            numeroSolucion = [
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

            poblarTablero(numeroTablero);
            aparecerTablero()
            break;

        case '04':
            numeroTablero = [
                "59874----",
                "37-----84",
                "--4-3--19",
                "86----3--",
                "1---976--",
                "-----5198",
                "45---29--",
                "2-69-----",
                "----76--5"
            ];
            numeroSolucion = [
                "598741236",
                "371629584",
                "624538719",
                "869214357",
                "135897642",
                "742365198",
                "457182963",
                "286953471",
                "913476825"
            ];

            poblarTablero(numeroTablero);
            aparecerTablero()
            break;

        case '05':
            numeroTablero = [
                "98564----",
                "-----8954",
                "--49---78",
                "5---7---6",
                "---5863--",
                "64-----85",
                "----51832",
                "-53-----7",
                "--24--519"
            ];
            numeroSolucion = [
                "985647123",
                "267318954",
                "314925678",
                "538174296",
                "729586341",
                "641239785",
                "496751832",
                "153892467",
                "872463519"
            ];

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '06':
            numeroTablero = [
            "--598----",
            "29----7--",
            "--87---64",
            "----682--",
            "---549---",
            "9----764-",
            "--9653---",
            "3----28--",
            "---891---"
            ];
            numeroSolucion = [
            "745986321",
            "296134758",
            "138725964",
            "514368279",
            "627549183",
            "983217645",
            "879653412",
            "351472896",
            "462891537"
            ];

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '07':
            numeroTablero = [
                '--2398---',
                '--84---29',
                '---5123--',
                '24----15-',
                '---263--7',
                '--7145---',
                '--38---41',
                '7---519--',
                '---9342--'
            ];
            numeroSolucion = [
                '562398714',
                '138476529',
                '479512386',
                '246789153',
                '815263497',
                '397145862',
                '953827641',
                '724651938',
                '681934275'
            ];
            
            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '08':
            numeroTablero = [
                '-98-32---',
                '-62----83',
                '----786-9',
                '---123---',
                '----96--1',
                '6---4529-',
                '---281---',
                '18--5--6-',
                '-2-3-4---'
            ];
            numeroSolucion = [
                '598632174',
                '762419583',
                '413578629',
                '849123756',
                '275896431',
                '631745298',
                '356281947',
                '184957362',
                '927364815'
            ];

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '09':
            numeroTablero = [
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
            numeroSolucion = [
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

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '010':
            numeroTablero = [
                '95-824---',
                '--43---62',
                '31-----4-',
                '--5-42---',
                '---658--1',
                '-2173----',
                '29---15--',
                '1--5-7---',
                '--7--36--'
            ];
            numeroSolucion = [
                '956824173',
                '784315962',
                '312976845',
                '635142798',
                '479658321',
                '821739456',
                '298461537',
                '163597284',
                '547283619'
            ];

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '011':
            numeroTablero = [
                '--8462---',
                '94---57--',
                '---798---',
                '81----974',
                '2--85---3',
                '--3--72--',
                '--428---9',
                '3---796--',
                '--96---37'
            ];
            numeroSolucion = [
                '758462391',
                '942135786',
                '136798425',
                '815326974',
                '297854163',
                '463917258',
                '674283519',
                '381579642',
                '529641837'
            ];

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '012':
            numeroTablero = [
                '4-689----',
                '-8----46-',
                '--941----',
                '67----14-',
                '--4658---',
                '89---425-',
                '--8263---',
                '36---198-',
                '--19-7---'
            ];
            numeroSolucion = [
                '456892317',
                '182735469',
                '739416825',
                '675329148',
                '214658793',
                '893174256',
                '948263571',
                '367541982',
                '521987634'
            ];

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '013':
            numeroTablero = [
                '-8--3-6--',
                '--916----',
                '-63---79-',
                '----932--',
                '-2-58----',
                '---214---',
                '34---6--2',
                '-51-4---9',
                '----7---4'
            ];
            numeroSolucion = [
                '485739621',
                '279168453',
                '163425798',
                '518693247',
                '924587136',
                '736214985',
                '347956812',
                '651842379',
                '892371564'
            ];

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '014':
            numeroTablero = [
                '--821---3',
                '6---95--1',
                '--146---5',
                '-35---64-',
                '7---5---9',
                '---634---',
                '1---895--',
                '--3-46---',
                '57---38--'
            ];
            numeroSolucion = [
                '458217963',
                '627395481',
                '391468275',
                '835971642',
                '764852319',
                '219634758',
                '142789536',
                '983546127',
                '576123894'
            ];

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        case '015':
            numeroTablero = [
                '--4826---',
                '58---91--',
                '--215----',
                '----62--8',
                '6-1-9---3',
                '8---716-4',
                '-186----5',
                '3---15-8-',
                '9--2---31'
            ];
            numeroSolucion = [
                '194826357',
                '586739142',
                '732154869',
                '479362518',
                '651498723',
                '823571694',
                '218643975',
                '347915286',
                '965287431'
            ]; 

            poblarTablero(numeroTablero);
            aparecerTablero();
            break;

        // ... otros casos ...
        default:
            console.log('Selecciona un nivel valido porfa')
    }
    return numeroTablero, numeroSolucion;
}

//la animacion de elegir nivel y que nos ponga para jugar
function aparecerTablero() {
    //que desaparezca el home con transition lindo
    setTimeout(() => {
        home.style.opacity = '0';
        home.style.transitionDuration = '1s';
    }, 300);

    //que se haga el cambio de game a home
    setTimeout(() => {
        home.classList.add('hidden');
        game.classList.remove('hidden')
    }, 1500);

    //que aparezca el game con transition lindo
    setTimeout(() => {
        game.style.opacity = '100%';
        game.style.transitionDuration = '1s';
        btnJugar.removeAttribute('hidden');
        btnJugar.style.opacity = '100';
    }, 2000);
}

//que nos complete el tablero del sudoku para  jugar
function poblarTablero(numeroTablero) {
    
    // GRID DE LOS NUMEROS

    for (i = 1; i <= 10; i++) {

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

        // darle para que borre el numero
        if (i == "10") {
            numeros.innerHTML = ' <img src="../img/goma.svg" class="iconoGoma"> ';
            numeros.style.color = 'red';
        }

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
            
            if (numeroTablero[r][c] != "-" ) {
                celda.innerHTML = numeroTablero[r][c]
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

//que nos lea el numero que elegimos para poner
function leerNumeroSelec() {
    numeroSelec = this.textContent;
    numeroId = this.getAttribute('id');
    
    if (numeroId == '10') {
        numeroSelec = null;
    }
    
    limpiarNumIguales()
    let numerosIguales = celdasArreglo.filter( celda => celda.textContent == numeroSelec)

    numerosIguales.forEach(numero => {
        numero.style.backgroundColor = 'var(--color-mismoNumero)'
    })


    return numeroSelec, numeroId
}

//que nos saque cuando tocamos otros numeros y nos seleccione el que tocamos
function limpiarNumIguales() {
    numerosIguales = [];

    celdasArreglo.forEach(celda => {

        if (celda.classList.contains('conNumeroInicio')) {
            celda.style.backgroundColor = 'rgba(246, 226, 183, 0.245)'
        } else {
            celda.style.backgroundColor = 'var(--color-fondoCeldas)'
        }    

    })
    
}

//poner el numero qque elegimos en la celda
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
        if (numeroSolucion[r][c] == numeroSelec) {
            //si el nuemro seleccionado coincide con el indice de la solucion, joya
            celda.textContent = numeroSelec
            celda.classList.remove('numeroEquivocado');
            celda.classList.add('numeroBien', "bien");
            celda.classList.remove('celdaActiva');

            sumarArrBien(celda);
            marcarNumerosIguales(celda);

        } else if (numeroSelec == null) {
            celda.textContent = '';
            celda.classList.remove('numeroEquivocado');
        
        }  else {
            //si no conicide, aumentamos el error
            errores++;
            const divErrores = document.getElementById('errores').innerHTML = errores
            
            perderJuego(errores);

            ///ponemos el numero pero le damos la categoria de que esta mal
            celda.textContent = numeroSelec;
            celda.classList.add('numeroEquivocado')
            
        }
        

    } else if (celda.textContent != '') {
        marcarNumerosIguales(celda);

    } 

    arregloTablero = [];
    celdasArreglo.forEach(celda => {
        arregloTablero.push(celda.textContent);
    });

}

//cuando tocamos un numero que ya esta puesto, o que queremos elegir
//, nos seleccione el resto que sean iguales
function marcarNumerosIguales(celda) {
    let numeroCelda = celda.textContent
                
    limpiarNumIguales()

    
    let numerosIguales = celdasArreglo.filter( celda => celda.textContent == numeroCelda)
    
    numerosIguales.forEach(numero => {
        if (!numero.classList.contains('numeroEquivocado')) {
        numero.style.backgroundColor = 'var(--color-mismoNumero)';
        }
    });
    

    
}

//perder cuando llegamos a 3 errores
function perderJuego(errores) {
    if (errores === 3) {

        cronometrar = false;

            celdasArreglo.forEach( celda => {

                esPicable = false;

                setTimeout(() => {
                    celda.classList.add('bigL');

                    gridNumeros.style.opacity = '0';
                    gridNumeros.style.transition = 'all 1s ease-in';

                    errorBtnTimer.style.opacity = '0';
                    errorBtnTimer.style.transition = 'all 1s ease-in';

                }, 500);

                setTimeout(() => {
                    celda.style.opacity = '30%';
                    celda.style.transition = 'all 1s ease-in';
                }, 2000);

            })

            // Y ACA CREO UN CARTEL EN EL MEDIO DEL SUDOKU
            // CON EL SUDOKU DE FONDO, QUE APAREZCA FELICITACIONES!
            // EL TIEMPO QUE HIZO, LOS ERRORES, Y SI QUIERE REINICIAR EL NIVEL
            // O ELEGIR OTRO NIVEL

            setTimeout(() => {

                const perdio = document.createElement('div');
                perdio.classList.add('divPerder');
                perdio.innerHTML = `
                
                    <h3 class="finTituloPerder"> PERDISTE 😔 </h3> <br> 

                    <div class="datos"> 
                        <p class="finTiempo"> TIEMPO <b>${timer.textContent}<b/> </p>
                        <p class="finErrores"> ERRORES <b><b class="cero">${errores}</b>/3 </b> </p>
                    </div>
                    
                    <div class="botones"> 
                        <div class="home" id="finHome">
                            <img src="../img/home.svg" alt="Inicio">
                        </div>
                        <div class="reiniciar" onclick="resetDesdeFinPerdio()">
                            <img src="../img/btn-reset.svg" alt="Reset">
                        </div>
                    </div>
                    
                    
                    `;


                setTimeout(() => {
                    perdio.style.scale = '100%'
                    perdio.style.transition = 'all 0.5s ease-out'
                }, 500);

                mensajeFin.appendChild(perdio);
                


            }, 2000);
    }
}

//que nos deshabilite el numero que completamos los 9
function sumarArrBien(celda) {
    if (celda.classList.contains('bien')) {
       
        numerosBien.push(celda.textContent);

        const num1 = numerosBien.filter( num => num == '1' );
        let num1Completo = num1.length

        if (num1Completo == 9) {
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
                    gridNumeros.style.transition = 'all 1s ease-in';

                    errorBtnTimer.style.opacity = '0';
                    errorBtnTimer.style.transition = 'all 1s ease-in';

                }, 500);

                setTimeout(() => {
                    celda.style.opacity = '30%';
                    celda.style.transition = 'all 1s ease-in';
                }, 2000);

            })

            // Y ACA CREO UN CARTEL EN EL MEDIO DEL SUDOKU
            // CON EL SUDOKU DE FONDO, QUE APAREZCA FELICITACIONES!
            // EL TIEMPO QUE HIZO, LOS ERRORES, Y SI QUIERE REINICIAR EL NIVEL
            // O ELEGIR OTRO NIVEL

            setTimeout(() => {

                const fin = document.createElement('div');
                fin.classList.add('fin');
                fin.innerHTML = `
                
                    <h3 class="finTitulo"> ¡FELICITACIONES! </h3> <br> 

                    <div class="datos"> 
                        <p class="finTiempo"> TIEMPO <b>${timer.textContent}<b/> </p>
                        <p class="finErrores"> ERRORES <b><b class="cero">${errores}</b>/3 </b> </p>
                    </div>
                    
                    <div class="botones"> 
                        <div class="home" id="finHome">
                            <img src="../img/home.svg" alt="Inicio">
                        </div>
                        <div class="reiniciar" onclick="resetDesdeFinGano()">
                            <img src="../img/btn-reset.svg" alt="Reset">
                        </div>
                        <div class="sigNivel" id="finSigNivel"> 
                            <img src="../img/sigNivel.svg" alt="Siguiente">
                        </div>
                    </div>
                    
                    
                    `;


                setTimeout(() => {
                    fin.style.scale = '100%'
                    fin.style.transition = 'all 0.5s ease-out'
                }, 500);

                mensajeFin.appendChild(fin);
                

            }, 2000);

            
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
const btnHome = document.getElementById('btn-home')


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

                btnHome.style.opacity = '100%';
                btnHome.style.transition = 'all 0.5s ease';
    
                
            }, 1000);

            setTimeout(() => {
                btnPausa.removeAttribute('hidden')
                btnReset.removeAttribute('hidden')
                btnHome.removeAttribute('hidden')

                tableroCss.style.opacity = '100'
                tableroCss.style.transition = 'all 0.5s ease';

                numerosContenedor.style.opacity = '100'
                numerosContenedor.style.transition = 'all 0.5s ease';
                
            }, 700);

        }, 700);

        celdasArreglo.forEach( celda => {

            setTimeout(() => {
                celda.classList.remove('win');
    
                gridNumeros.style.opacity = '100%';
                gridNumeros.style.transition = 'all 1s ease-in';

            }, 500);
    
            setTimeout(() => {
                celda.style.opacity = '100%';
                celda.style.transition = 'all 0.5s ease-in';
            }, 500);
    
        })

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

    btnHome.addEventListener('click', irHome)

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
        btnHome.style.opacity = '0'
        
        btnReset.style.transition = 'all 0.8s ease'
        btnPausa.style.transition = 'all 0.8s ease'
        btnInicio.style.transition = 'all 0.8s ease'
        btnHome.style.transition = 'all 0.8s ease'


        setTimeout(() => {
            btnJugar.style.opacity = '100%'
            btnJugar.style.transition = 'all 0.5s ease'

            btnReset.setAttribute('hidden', true)
            btnPausa.setAttribute('hidden', true)

            btnContenedor.classList.remove('moverArriba')

            setTimeout(() => {
                
                btnJugar.removeAttribute('hidden')
                btnInicio.setAttribute('hidden', true)
                

            }, 500);

        }, 500);

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

function resetDesdeFinGano() {
    cronometrar = false
    acumulado = 0
    esPicable = false;

    mensajeFin.removeChild(mensajeFin.children[0])
    // console.log(mensajeFin.children[0]) //

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
            
        }, 500);

    }, 500);

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

    celdasArreglo.forEach( celda => {

        setTimeout(() => {
            celda.classList.remove('win');

            gridNumeros.style.opacity = '20%';
            gridNumeros.style.transition = 'all 2s ease-in';

            errorBtnTimer.style.opacity = '100%';
            errorBtnTimer.style.transition = 'all 2s ease-in';

        }, 500);

        setTimeout(() => {
            celda.style.opacity = '30%';
            celda.style.transition = 'all 2s ease-in';
        }, 1000);

    })

    reestablecerNum();
    limpiarNumIguales();
}

function resetDesdeFinPerdio() {
    cronometrar = false
    acumulado = 0
    esPicable = false;

    mensajeFin.removeChild(mensajeFin.children[0])
    // console.log(mensajeFin.children[0]) //
    

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

    }, 900);

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

    celdasArreglo.forEach( celda => {

        setTimeout(() => {
            celda.classList.remove('bigL');

            gridNumeros.style.opacity = '20%';
            gridNumeros.style.transition = 'all 2s ease-in';

            errorBtnTimer.style.opacity = '100%';
            errorBtnTimer.style.transition = 'all 2s ease-in';

        }, 500);

        setTimeout(() => {
            celda.style.opacity = '30%';
            celda.style.transition = 'all 2s ease-in';
        }, 1000);

    })

    reestablecerNum();
    limpiarNumIguales();
}

function irHome() {
    var confirmar = confirm('¿Quieres volver al inicio? Se perdera el progreso que hayas hecho')
    
    if (confirmar) {
        cronometrar = false
        acumulado = 0
        esPicable = false;

        numeroSolucion = [];
        
        numeroTablero = [];
        reestablecerNum();
        
        numerosBien = [];

        celdasArreglo.forEach(celda => {
           celda.remove();
        })


        numerosArreglo.forEach(numero => {
            numero.remove();
        })

        setTimeout(() => {
            game.style.opacity = '0';
            game.style.transitionDuration = '1s';

            let erroresHtml = document.querySelector('#errores')
            errores = errores*0
            erroresHtml.textContent = errores

        }, 300);
    
        //que se haga el cambio de game a home
        setTimeout(() => {
            game.classList.add('hidden');
            home.classList.remove('hidden')
            tableroCss.style.opacity = '10%'
            numerosContenedor.style.opacity = '10%'
            
        }, 1500);
    
        //que aparezca el game con transition lindo
        setTimeout(() => {
            home.style.opacity = '100';
            home.style.transitionDuration = '1s';
        }, 2000);


        btnReset.style.opacity = '0'
        btnPausa.style.opacity = '0'
        btnInicio.style.opacity = '0'
        btnHome.style.opacity = '0'
        
        btnReset.style.transition = 'all 0.8s ease'
        btnPausa.style.transition = 'all 0.8s ease'
        btnInicio.style.transition = 'all 0.8s ease'
        btnHome.style.transition = 'all 0.8s ease'

        erroresCss.style.scale  = '100%';
        erroresCss.style.transition = 'all 1s ease'
        tiempo.style.scale  = '100%';
        tiempo.style.transition = 'all 1s ease'


        
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


// FUNCIONALIDAD DE DARK MODE

const darkMode = document.getElementById("theme")

darkMode.onclick = function () {
    document.body.classList.toggle("darkMode")
}


