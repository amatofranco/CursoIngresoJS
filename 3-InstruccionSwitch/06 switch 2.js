function mostrar() {
    //tomo la hora
    let horaDelDia;
    horaDelDia = parseInt(document.getElementById("txtIdHora").value);

    if (horaDelDia >= 7 && horaDelDia <= 11) {
        alert("Es de mañana");
    }

    else if (horaDelDia >= 12 && horaDelDia <= 19) {

        alert("Es de tarde");
    }

    else if ((horaDelDia >= 20 && horaDelDia <=24) || (horaDelDia >= 0 && horaDelDia <=6)) {

        alert("Es de noche");
    }
    
    else {
      alert("No es una hora válida");
    }


}

//FIN DE LA FUNCIÓN