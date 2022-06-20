/*Esta version es solo un ejemplo visto de la clase 7 a 9 del curso de programacion basica de platzi,
se modificara en dias futuros*/

//variables que indican la gravedad en cada planeta
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;

//variables para saber el peso del usuario

/*en el video no inicializan la variable, pero para especificar que sera un numero 
inicializo la variable con 0*/
var peso_final = 0;
/*El peso del usuario sera ejemplificado con la variable (peso_usuario) que 
para esta version seran 77 kilogramos*/
var peso_usuario = 77;

//operacion matematica que dira el precio del usuario en marte
peso_final = peso_usuario * g_marte / g_tierra;

//Usamos la funcion parseInt() para convertir el resultado decimal, en un numero entero
peso_final = parseInt(peso_final);

//Retorno en el document: esta linea escribe algo en el documento html donde se encuentra vinculado
document.write("tu peso en marte es: <b>"+peso_final+" kg </b>")