function mostrar() {
    let destino;
    let estacion;
    let seViaja = 0;

    destino = document.getElementById("txtIdDestino").value;
    estacion = document.getElementById("txtIdEstacion").value;

    switch (estacion) {

        case "Invierno":
            if (destino == "Bariloche") {
                seViaja = 1;
            }
            break;

        case "Verano":
            if (destino == "Mar del plata" || destino == "Cataratas") {
                seViaja = 1;
            }
            break;

        case "Otoño":
            seViaja = 1;
            break;

        case "Primavera":
            if (destino != "Bariloche") {
                seViaja = 1;
            }
            break;
            
        default:
            alert("Estación no contemplada");
            break;
    }

    if (seViaja == 1) {
        alert("Se viaja");
    }
    else {
        alert("No se viaja");
    }
}//FIN DE LA FUNCIÓN