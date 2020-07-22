function mostrar()
{	let numeroRandom;
	
	numeroRandom = Math.floor(Math.random() * 11);

	if (numeroRandom >= 9){
		alert ("EXCELENTE. Su nota es: "+numeroRandom)
	}
	else if (numeroRandom >=4 & numeroRandom <9){
		alert ("APROBÓ. Su nota es: "+numeroRandom);
	}
	else
		alert ("Vamos que la próxima se puede. Su nota es: "+numeroRandom);

}//FIN DE LA FUNCIÓN