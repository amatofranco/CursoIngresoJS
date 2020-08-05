
function mostrar() {

	let numeroIngresado;
	let banderaDelPrimero = 0;
	let numeroMinimo = 0;
	let numeroMaximo = 0;
	let contador = 0;
	let respuesta;


	do {
		numeroIngresado = parseInt(prompt("Ingrese un número"));

		if (banderaDelPrimero == 0){

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1;
		}
		else if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		}
		else if (numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}
		
		contador++;

		respuesta = prompt("¿Desea agregar otro número? si/no);
	}

	while (respuesta == "si");

	alert("Cantidad de números: " + contador);
	document.getElementById("txtIdMaximo").value = "Numero máximo: " + numeroMaximo;
	document.getElementById("txtIdMinimo").value = "Numero mínimo: " + numeroMinimo;

}//FIN DE LA FUNCIÓN
