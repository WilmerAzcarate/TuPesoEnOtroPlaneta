/*Esta version es solo un ejemplo visto de la clase 7 a 9 del curso de programacion basica de platzi,
se modificara en dias futuros*/

//variables que indican la gravedad en cada planeta
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;

//variables para saber el peso del usuario

/*en esta variable se ingresa un dato especificado por el usuario usando un promt(), 
cabe recalcar que el dato ingresado por el usuario es un string*/ 
var entrada_usuario=prompt("Ingresa tu peso: ");

/*en el video no inicializan la variable, pero para especificar que sera un numero 
inicializo la variable con 0*/
var peso_final = 0;
/*Un cambio visto en la clase 8 es añadir el peso usando un promnt (mirar linea 13), y a continuacion
la variable peso_usuario transforma la entrada que es un string a un numero 
de punto flotante o (float) usando la funcion parseFloat()*/
var peso_usuario = parseFloat(entrada_usuario) ;

//operacion matematica que dira el precio del usuario en marte
peso_final = peso_usuario * g_marte / g_tierra;

//Usamos la funcion parseInt() para convertir el resultado decimal, en un numero entero
peso_final = parseInt(peso_final);

//Retorno en el document: esta linea escribe algo en el documento html donde se encuentra vinculado
document.write("tu peso en marte es: <b>"+peso_final+" kg </b>");