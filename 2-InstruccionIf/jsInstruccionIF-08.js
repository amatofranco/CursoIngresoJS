function mostrar()
{
	let edad;
	let estadoCivil;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad >= 18 && estadoCivil == "Soltero") {
		alert("Es mayor y es soltero");
	}
	
}//FIN DE LA FUNCIÓN