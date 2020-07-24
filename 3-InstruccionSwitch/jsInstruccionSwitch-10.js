	function mostrar()
	{
		let destinoIngresado;
		let estacionIngresada;
		
		destinoIngresado = document.getElementById("txtIdDestino").value;
		estacionIngresada = document.getElementById("txtIdEstacion").value;
		
		switch(estacionIngresada){
	
			case "Invierno":
				switch (destinoIngresado){
					case "Bariloche":
						alert("Se viaja");
						break;
					default:
						alert("No se viaja");
				}
				break;

			case "Verano":
				switch (destinoIngresado){		
					case "Cataratas":
					case "Mar del plata":
						alert ("Se viaja");
						break;
					default:
						alert ("No se viaja");			
				}
				break;

			case "Otoño":
						alert ("Se viaja");
						break;
			case "Primavera":
				switch (destinoIngresado) {
					case "Bariloche":
						alert ("No se viaja");
						break;
					default:
						alert ("Se viaja");
				}		
		}	
	}//FIN DE LA FUNCIÓN