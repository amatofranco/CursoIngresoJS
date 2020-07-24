function mostrar()
{
	let destino;
	let estacion;
	let porcentaje;
	let precioBase;
	let precioFinal; 

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	
	
	switch(estacion){

		case "Invierno":
			switch (destino){
				case "Bariloche":
				porcentaje = 1.20;
				break;

				case "Cataratas":
				case "Cordoba":
				porcentaje = 0.90;
				break;

				case "Mar del plata":
				porcentaje = 0.80;
			}
			break;

		case "Verano":
			switch (destino){
				case "Bariloche":
				porcentaje = 0.90;
				break;

				case "Cataratas":
				case "Cordoba":
				porcentaje = 1.10;
				break;

				case "Mar del plata":
				porcentaje = 1.20;
				break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Cordoba":
				porcentaje = 1;
				break;

				default:
				porcentaje = 1.10;
			}
	}

	precioBase = 15000;
	precioFinal = precioBase * porcentaje;
	alert ("El precio final para viajar a " + destino + " en " + estacion + " es de $" + precioFinal);

}//FIN DE LA FUNCIÓN