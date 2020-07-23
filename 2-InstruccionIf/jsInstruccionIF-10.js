function mostrar()
{	let numeroRandom;
	
	nota = Math.floor(Math.random() * 11);

	if (nota>= 9){
		alert ("EXCELENTE. Su nota es: "+nota)
	}
	else if ((nota >=4) && (nota <=8)){
		alert ("APROBÓ. Su nota es: "+nota);
	}
	else
		alert ("Vamos que la próxima se puede. Su nota es: "+nota);

}//FIN DE LA FUNCIÓN