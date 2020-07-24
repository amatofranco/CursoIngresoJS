function mostrar()
{	let numMaximo = 10;
	let numMinimo = 1;
	let numRandom;
	
	numRandom = Math.round( Math.random() * (numMaximo-numMinimo) + numMinimo ); // la suma del minimo es por si el random da 0
																	
	alert(numRandom);

}//FIN DE LA FUNCIÓN