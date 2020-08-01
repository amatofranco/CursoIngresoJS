/*
Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar() {

	let numeroIngresado;
	let sumaPositivo = 0;
	let multiplicacionNegativos = 1;
	let contadorPositivo = 0;
	let contadorNegativo = 0;
	let respuesta;


	do {
		numeroIngresado = parseInt(prompt("Ingrese un número"));

		if (numeroIngresado >= 0) {
			sumaPositivo = numeroIngresado + sumaPositivo;
			contadorPositivo++;
		}

		else {
			multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
			contadorNegativo++;
		}
		
		respuesta = prompt("¿Desea agregar otro número?");
	}

	while (respuesta == "si");

	alert("Positivos: " + contadorPositivo + " Negativos: " + contadorNegativo);
	document.getElementById("txtIdSuma").value = "Suma positivos: " + sumaPositivo;
	document.getElementById("txtIdProducto").value = "Producto negativos: " + multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
