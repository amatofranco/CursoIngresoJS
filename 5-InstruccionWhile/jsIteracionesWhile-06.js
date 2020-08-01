/* Al presionar el botón pedir 5 números 
e informar la suma acumulada y el promedio. */

function mostrar() {
	
	let numeroIngresado;
	let acumulador = 0;
	let contador = 0;
	let promedio = 0;

	do {
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		acumulador = numeroIngresado + acumulador;
		contador++;
	}
	while (contador < 5);

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = "Suma: " + acumulador;
	document.getElementById("txtIdPromedio").value = "Promedio: " + promedio.toFixed(2);


}//FIN DE LA FUNCIÓN