function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch(destinoIngresado){

		case "Bariloche":
		case "Cordoba": //Así figura en el HTML (En vez de "Ushuaia")
			alert("Se encuentra en el Sur");
			break;
		case "Cataratas":
			alert("Se encuentra en el Noreste");
			break;
		case "Mar del plata":
			alert("Se encuentra en el Este");
			break;
	}

}//FIN DE LA FUNCIÓN