/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	
	let numeroIngresado;
	let acumulador = 0;
	let contador = 0;
	var respuesta;
	let promedio = 0;

	do {
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		acumulador = numeroIngresado + acumulador;
		contador++;
		respuesta = prompt("¿Desea agregar otro número?");
	}
	while (respuesta == "si");

	promedio = acumulador / contador;

	alert("Cantidad de numeros ingresados: " + contador);
	document.getElementById("txtIdSuma").value = "Suma: " + acumulador;
	document.getElementById("txtIdPromedio").value = "Promedio: " + promedio.toFixed(2);

}//FIN DE LA FUNCIÓN