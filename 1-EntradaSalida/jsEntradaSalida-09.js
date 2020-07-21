/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let importeAumento
	let sueldoFinal;
	
	sueldo = parseInt (document.getElementById("txtIdSueldo").value);
	importeAumento = sueldo * 0.10;
	sueldoFinal = sueldo + importeAumento;

	document.getElementById("txtIdResultado").value = sueldoFinal;

	 

	
}
