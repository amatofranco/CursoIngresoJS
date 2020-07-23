function mostrar()
{
	let destinoIngresado;
	let estacionIngresada;
	let tarifaBase;
	let importeAumento;
	let importeDescuento;
	let tarifaFinal; 

	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	tarifaBase = 15000;
	
	switch(estacionIngresada){

		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
				importeAumento = tarifaBase * 0.20;
				tarifaFinal = tarifaBase + importeAumento;
				alert ("La tarifa final es de $" + tarifaFinal);
				break;

				case "Cataratas":
				case "Cordoba":
				importeDescuento = tarifaBase * 0.10;
				tarifaFinal = tarifaBase - importeDescuento;
				alert ("La tarifa final es de $" + tarifaFinal);
				break;

				case "Mar del plata":
				importeDescuento = tarifaBase * 0.20;
				tarifaFinal = tarifaBase - importeDescuento;
				alert ("La tarifa final es de $" + tarifaFinal);
				break;
			}
		case "Verano":
			switch (destinoIngresado){
				case "Bariloche":
				importeDescuento = tarifaBase * 0.10;
				tarifaFinal = tarifaBase - importeDescuento;
				alert ("La tarifa final es de $" + tarifaFinal);
				break;

				case "Cataratas":
				case "Cordoba":
				importeAumento = tarifaBase * 0.10;
				tarifaFinal = tarifaBase + importeAumento;
				alert ("La tarifa final es de $" + tarifaFinal);
				break;

				case "Mar del plata":
				importeAumento = tarifaBase * 0.20;
				tarifaFinal = tarifaBase + importeAumento;
				alert ("La tarifa final es de $" + tarifaFinal);
				break;

			}
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {

				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				importeAumento = tarifaBase * 0.10;
				tarifaFinal = tarifaBase + importeAumento;
				alert ("La tarifa final es de $" + tarifaFinal);
				break;
				
				case "Cordoba":
				alert ("La tarifa final es de $" + tarifaBase);	


			}

	}

}//FIN DE LA FUNCIÓN