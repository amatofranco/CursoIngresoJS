/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;

function comenzar()
{
let numMaximo = 3;
let numMinimo = 1;
eleccionMaquina = Math.round( Math.random() * (numMaximo-numMinimo) + numMinimo );

switch(eleccionMaquina){
case 1: eleccionMaquina = "Piedra";
break;
case 2: eleccionMaquina = "Papel";
break;
case 3: eleccionMaquina = "Tijera";
break;
}

}//FIN DE LA FUNCIÓN

function piedra()
{ 
    let resultado;

    switch (eleccionMaquina){
        case "Piedra":
            resultado = "Empate"
            break;
        case "Papel":
            resultado = "Perdió";
            break;
        case "Tijera":
            resultado = "Ganó"
            break;
    }
    alert ("Máquina: "+eleccionMaquina + ". Su elección: Piedra. Resultado: " + resultado );

}//FIN DE LA FUNCIÓN

function papel()
{
    let resultado;

    switch (eleccionMaquina){
        case "Piedra":
            resultado = "Ganó"
            break;
        case "Papel":
            resultado = "Empate";
            break;
        case "Tijera":
            resultado = "Perdió"
            break;
    }
    alert ("Máquina: "+ eleccionMaquina + ". Su elección: Papel. Resultado: " + resultado );

}//FIN DE LA FUNCIÓN

function tijera()
{
    let resultado;

    switch (eleccionMaquina){
        case "Piedra":
            resultado = "Perdió"
            break;
        case "Papel":
            resultado = "Ganó";
            break;
        case "Tijera":
            resultado = "Empató"
            break;
    }
    alert ("Máquina: "+ eleccionMaquina + ". Su elección: Tijera. Resultado: " + resultado );

}//FIN DE LA FUNCIÓN