function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;
	switch(destino){

		case "Bariloche":
		case "Ushuaia":
			alert("Frío");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Calor");
			break;
		default:
			alert("Provincia no contemplada");
			break;
	}

}//FIN DE LA FUNCIÓN