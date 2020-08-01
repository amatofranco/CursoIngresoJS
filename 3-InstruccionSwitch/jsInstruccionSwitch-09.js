function mostrar() {
	let destino;
	let estacion;
	let porcentaje;
	let precioFinal;
	const precioBase = 15000;	

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {

		case "Invierno":

			if (destino == "Bariloche") {
				porcentaje = 1.20;
			}
			else if (destino == "Mar del plata") {
				porcentaje = 0.80;
			}
			else {
				porcentaje = 0.90;
			}
			break;

		case "Verano":

			if (destino == "Bariloche") {
				porcentaje = 0.80;
			}
			else if (destino == "Mar del plata") {
				porcentaje = 1.20;
			}
			else {
				porcentaje = 1.10;
			}
			break;

		case "Otoño":
		case "Primavera":
			if (destino == "Cordoba") {
				porcentaje = 1;
			}
			else {
				porcentaje = 1.10;
			}
		break;
	}

	precioFinal = precioBase * porcentaje;
	alert("El precio final para viajar a " + destino + " en " + estacion + " es de $" + precioFinal);

}//FIN DE LA FUNCIÓN