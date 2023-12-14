# SUDOKU

------------TODOLIST------------

    - si no tiene numero, o esta mal puesto, hacer que seleccione la fila, columna y cuadrante (que se separe un poco d los otros cuadrantes) de la celda que toque.

    - si tiene un numero ya bien puesto, que me seleccione los otros numeros ya puestos de ese mismo, pero no la fila, columna ni el cuadrante

    - cuando complete los 9 numeros de un numero, sacarlo o tacharlo o ponerlo bien opaco en la grilla de numeros para poner.

    - poner un contador de errores

    - poner un timer

    - ver como pingo hacer para poner un asi para probar numeros


------------IMPORTANTE--------------

Lo que hice hasta ahora fue lograr que seleccione una celda y le de color a esa celda y no a las otras, y lograr obtener el indice de esa celda dentro de un arreglo

TENGO QUE BUSCAR LA FORMA DE CONECTAR LO Q HICE HASTA AHORA AL TUTORIAL DE 25 MINUTOS, CON LA PARTE DE LA FUNCIONALIDAD, Y CREAR MI SISTEMA DE LOGICA DE GENERACION DE LOS SUDOKUS

En principio, crear 10 niveles de sudoku, generarlos con chat gpt
const sudokusAdicionales = [
    [[5, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 1, 9, 5, 3, 4, 8], [1, 9, 8, 3, 4, 2, 5, 6, 7], [8, 5, 9, 7, 6, 1, 4, 2, 3], [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6], [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]],
    [[8, 1, 2, 7, 5, 3, 6, 4, 9], [9, 4, 3, 6, 8, 2, 1, 7, 5], [6, 7, 5, 4, 9, 1, 2, 8, 3], [1, 5, 4, 2, 3, 7, 8, 9, 6], [3, 6, 9, 8, 4, 5, 7, 2, 1], [2, 8, 7, 1, 6, 9, 5, 3, 4], [5, 2, 1, 9, 7, 4, 3, 6, 8], [4, 3, 8, 5, 2, 6, 9, 1, 7], [7, 9, 6, 3, 1, 8, 4, 5, 2]],
    [[7, 3, 1, 8, 2, 9, 5, 4, 6], [4, 5, 2, 7, 6, 1, 3, 9, 8], [9, 8, 6, 4, 3, 5, 2, 7, 1], [2, 7, 3, 6, 8, 4, 1, 5, 9], [8, 1, 9, 5, 7, 2, 6, 3, 4], [5, 6, 4, 3, 9, 1, 7, 8, 2], [3, 2, 5, 1, 4, 7, 9, 6, 8], [6, 9, 8, 2, 5, 3, 4, 1, 7], [1, 4, 7, 9, 6, 8, 8, 2, 3]],
    [[4, 9, 6, 3, 7, 8, 1, 2, 5], [8, 3, 5, 1, 2, 9, 4, 6, 7], [2, 1, 7, 4, 6, 5, 8, 9, 3], [7, 4, 3, 6, 9, 1, 2, 5, 8], [6, 8, 9, 5, 3, 2, 7, 4, 1], [5, 2, 1, 8, 4, 7, 6, 3, 9], [3, 7, 8, 9, 1, 4, 5, 2, 6], [1, 5, 2, 7, 8, 6, 9, 3, 4], [9, 6, 4, 2, 5, 3, 8, 7, 1]],
    [[2, 7, 3, 9, 4, 1, 8, 6, 5], [1, 4, 9, 8, 6, 5, 2, 3, 7], [8, 5, 6, 3, 7, 2, 1, 9, 4], [5, 2, 7, 4, 3, 8, 9, 1, 6], [4, 1, 8, 6, 9, 7, 3, 5, 2], [3, 9, 6, 5, 1, 2, 7, 4, 8], [9, 8, 1, 7, 2, 4, 5, 6, 3], [7, 6, 4, 1, 5, 3, 6, 2, 9], [6, 3, 5, 2, 8, 9, 4, 7, 1]],
    [[4, 3, 5, 2, 9, 7, 6, 1, 8], [8, 7, 1, 6, 4, 3, 9, 2, 5], [2, 9, 6, 8, 5, 1, 4, 3, 7], [5, 8, 9, 4, 6, 2, 7, 1, 3], [7, 6, 3, 1, 8, 9, 2, 5, 4], [1, 2, 4, 7, 3, 5, 8, 9, 6], [9, 5, 7, 3, 1, 8, 6, 4, 2], [3, 1, 2, 9, 7, 4, 5, 8, 6], [6, 4, 8, 5,



    