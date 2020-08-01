/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var numeroSecreto;
var contadorIntentos = 0;

function comenzar() 
{
  let numMaximo = 100;
  let numMinimo = 1;
	numeroSecreto = Math.round( Math.random() * (numMaximo-numMinimo) + numMinimo );
  alert(numeroSecreto);
  
}

function verificar()
{
  let numIngresado;
  numIngresado = parseInt(document.getElementById("txtIdNumero").value);

  contadorIntentos = contadorIntentos + 1;

  document.getElementById("txtIdIntentos").value = contadorIntentos;

    if (numIngresado == numeroSecreto){
    alert ("Adivinaste en " + contadorIntentos + " intentos");
  }
   else if (numIngresado < numeroSecreto) {
     alert("Falta...")
   }
   else {
     alert ("Te pasaste")
   }
}
