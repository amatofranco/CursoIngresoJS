function mostrar()
{	let numMaximo = 10;
	let numMinimo = 1;
	let nota;
	
	nota = Math.round( Math.random() * (numMaximo-numMinimo) + numMinimo );

	if (nota>= 9){
		alert ("EXCELENTE. Su nota es: "+nota)
	}
	else if (nota >=4 && nota <=8){
		alert ("APROBÓ. Su nota es: "+nota);
	}
	else
		alert ("Vamos que la próxima se puede. Su nota es: "+nota);

}//FIN DE LA FUNCIÓN