/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar() {

	let numeroIngresado;
	let sumaPositivo = 0;
	let sumaNegativo = 0;
	let contadorPositivo = 0;
	let contadorNegativo = 0;
	let contadorCero = 0;
	let contadorPar = 0;
	let respuesta;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia = 0;


	do {
		numeroIngresado = parseInt(prompt("Ingrese un número"));

		if (numeroIngresado > 0) {
			sumaPositivo = numeroIngresado + sumaPositivo;
			contadorPositivo++;
		}
		else if (numeroIngresado < 0) {
			sumaNegativo = numeroIngresado + sumaNegativo;
			contadorNegativo++;
		}
		else {
			contadorCero++;
		}

		if (numeroIngresado % 2 == 0) {
			contadorPar++;
		}

		respuesta = prompt("¿Desea agregar otro número? si/no");
	}
	while (respuesta == "si");


	if (contadorPositivo != 0) {
		promedioPositivos = sumaPositivo / contadorPositivo;
	}

	if (contadorNegativo != 0) {
		promedioNegativos = sumaNegativo / contadorNegativo;
	}

	diferencia = sumaPositivo - sumaNegativo;

	document.write("<h2>Suma positivos: " + sumaPositivo +
		"<br> Suma negativos: " + sumaNegativo +
		"<br> Cantidad positivos: " + contadorPositivo +
		"<br> Cantidad negativos: " + contadorNegativo +
		"<br> Cantidad de ceros: " + contadorCero +
		"<br> Cantidad pares: " + contadorPar +
		"<br> Promedio positivos: " + promedioPositivos.toFixed(2) +
		"<br> Promedio negativos: " + promedioNegativos.toFixed(2) +
		"<br> Diferencia positivos y negativos: " + diferencia +
		" </h2>");
}//FIN DE LA FUNCIÓN
