/*Esta version es solo un ejemplo visto de la clase 7 a 9 del curso de programacion basica de platzi,
se modificara en dias futuros*/

//variables que indican la gravedad en cada planeta
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;

//variables para saber el peso del usuario

/*en esta variable se ingresa un dato especificado por el usuario usando un promt(), 
cabe recalcar que el dato ingresado por el usuario es un string*/ 
var entrada_Pusuario = prompt("Ingresa tu peso: ");

/*Esta variable sirve para que el usuario haga una eleccion entre 2 planetas distintos*/ 
var choseAPlanet = prompt("ELIGE ENTRE ESTOS 2 PLANETAS:\n1 PARA MARTE\n2 PARA JUPITER ");

/*en el video no inicializan la variable, pero para especificar que sera un numero 
inicializo la variable con 0*/
var peso_final = 0;
/*variable para elegir el nombre del planeta , se inicializa con "" , para espesificar que es un string*/ 
var planet_name="";
/*Un cambio visto en la clase 8 es añadir el peso usando un promnt (mirar linea 13), y a continuacion
la variable peso_usuario transforma la entrada que es un string a un numero 
de punto flotante o (float) usando la funcion parseFloat()*/
var peso_usuario = parseFloat(entrada_Pusuario) ;

//Se muestra un resultado basado en la eleccion del usuario
/*para esta ocacion usamos if else  y else if*/
if(choseAPlanet == 1)
{
    //operacion matematica que dira el precio del usuario en marte
    peso_final = peso_usuario * g_marte / g_tierra;
    peso_final = parseInt(peso_final);
    //retorno para el usuario si elige marte
    planet_name="marte"
    document.write("tu peso en <b>"+planet_name+"</b> es: <b>"+peso_final+" kg </b>");
}
else if(choseAPlanet == 2)
{
    //operacion matematica que dira el precio del usuario en marte
    peso_final = peso_usuario * g_jupiter / g_tierra;
    peso_final = parseInt(peso_final);
    //retorno para el usuario si elige jupiter
    planet_name="Jupiter"
    document.write("tu peso en <b>"+planet_name+"</b> es: <b>"+peso_final+" kg </b>");
}
else
{
    //Resultado si el usuario ingresa cualquier cosa
    document.write("<b> ESTAS PENDEJO </b>");
}