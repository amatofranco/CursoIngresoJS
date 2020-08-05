/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos = 0;

function comenzar() {
	let numMaximo = 100;
	let numMinimo = 1;
	numeroSecreto = Math.round(Math.random() * (numMaximo - numMinimo) + numMinimo);
	alert("Adivine el número! (1 a 100) " + numeroSecreto);
	contadorIntentos = 0;
}

function verificar() {
	let numIngresado;
	let evaluador;

	numIngresado = parseInt(document.getElementById("txtIdNumero").value);

	if (!isNaN(numIngresado)) {

		contadorIntentos++;

		document.getElementById("txtIdIntentos").value = contadorIntentos;

		if (numIngresado == numeroSecreto) {

			switch (contadorIntentos) {

				case 1:
					evaluador = "Usted es un Psíquico! ";
					break;
				case 2:
					evaluador = "Excelente percepción! ";
					break;
				case 3:
					evaluador = "Esto es suerte! ";
					break;
				case 4:
					evaluador = "Excelente técnica! ";
					break;
				case 5:
					evaluador = "Usted esta en la media! ";
					break;
				default:
					if (contadorIntentos <= 10) {
						evaluador = "Falta técnica! ";
					}
					else {
						evaluador = "Afortunado en el amor! "
					}
			}

			alert(evaluador + "Adivinaste en " + contadorIntentos + " intentos");
			contadorIntentos = 0;
			document.getElementById("txtIdNumero").value = "";
			document.getElementById("txtIdIntentos").value = "";
		}
		else if (numIngresado < numeroSecreto) {
			alert("Falta...")
		}
		else {
			alert("Te pasaste")
		}
	}

	else {
		alert ("Ingrese un número válido")
	}
}
