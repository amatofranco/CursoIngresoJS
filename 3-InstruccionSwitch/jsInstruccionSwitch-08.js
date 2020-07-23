function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch(destinoIngresado){

		case "Bariloche":
		case "Cordoba": //Así figura en el HTML (En vez de "Ushuaia")
			alert("Acá hace frío");
			break;
		default:
			alert("Acá hace calor");
	}

}//FIN DE LA FUNCIÓN