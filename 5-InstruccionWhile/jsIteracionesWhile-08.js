/*
Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar() {

	let numeroIngresado;
	let sumaPositivo = 0;
	let multiplicacionNegativos = 1; //El 1 es el elemento nulo del producto
	let respuesta;


	do {
		numeroIngresado = parseInt(prompt("Ingrese un número"));

		if (! isNaN(numeroIngresado) ) { // validación de numero 

			if (numeroIngresado >= 0) {
				sumaPositivo = numeroIngresado + sumaPositivo;
				contadorPositivo++;
			}

			else {
				multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
			}
		}
			else {
				alert("Número no válido");
			}

			respuesta = prompt("¿Desea agregar otro número? si/no");
		}

	while (respuesta == "si");

	document.getElementById("txtIdSuma").value = "Suma positivos: " + sumaPositivo;
	document.getElementById("txtIdProducto").value = "Producto negativos: " + multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
