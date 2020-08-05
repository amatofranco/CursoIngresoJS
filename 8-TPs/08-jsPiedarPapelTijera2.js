
var eleccionMaquina;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;
var ContadorDeEmpates = 0;


function comenzar() {
	let numMaximo = 3;
	let numMinimo = 1;
	eleccionMaquina = Math.round(Math.random() * (numMaximo - numMinimo) + numMinimo);

	switch (eleccionMaquina) {
		case 1: eleccionMaquina = "Piedra";
			break;
		case 2: eleccionMaquina = "Papel";
			break;
		case 3: eleccionMaquina = "Tijera";
			break;
	}

}//FIN DE LA FUNCIÓN

function piedra() {
	let resultado;
	let eleccionUsuario = "Piedra";

	switch (eleccionMaquina) {
		case "Piedra":
			resultado = "Empate";
			ContadorDeEmpates++;
			break;
		case "Papel":
			resultado = "Perdió";
			ContadorDePerdidas++;
			break;
		case "Tijera":
			resultado = "Ganó";
			ContadorDeGanadas++;
			break;
	}
	alert("Máquina: " + eleccionMaquina + ". Su elección: " + eleccionUsuario + ". Resultado: " + resultado);
    mostrarResultado();
    comenzar();

}//FIN DE LA FUNCIÓN

function papel() {

	let resultado;
	let eleccionUsuario = "Papel";

	switch (eleccionMaquina) {
		case "Piedra":
			resultado = "Ganó";
			ContadorDePerdidas++;
			break;

		case "Papel":
			resultado = "Empate";
			ContadorDeEmpates++;
			break;

		case "Tijera":
			resultado = "Perdió";
			ContadorDePerdidas++;
			break;
	}
	alert("Máquina: " + eleccionMaquina + ". Su elección: " + eleccionUsuario + ". Resultado: " + resultado);
	mostrarResultado();
	comenzar();
	
}//FIN DE LA FUNCIÓN

function tijera() {
	let resultado;
	eleccionUsuario = "Tijera";

	switch (eleccionMaquina) {
		case "Piedra":
			resultado = "Perdió";
			ContadorDePerdidas++;
			break;
		case "Papel":
			resultado = "Ganó";
			ContadorDeGanadas++;
			break;
		case "Tijera":
			resultado = "Empató";
			ContadorDeEmpates++;
			break;
	}

	alert("Máquina: " + eleccionMaquina + ". Su elección: " + eleccionUsuario + ". Resultado: " + resultado);
	mostrarResultado();
	comenzar();
	
}//FIN DE LA FUNCIÓN


function mostrarResultado() {
	document.getElementById("txtIdGanadas").value = "Ganadas " + ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = "Perdidas: " + ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = "Empates: " + ContadorDeEmpates;
}

