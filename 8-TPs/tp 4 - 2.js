function CalcularPrecio() {

    let cantidad;
    let marca;
    let descuento;
    let precioBase;
    let precioCondescuento;
    let iibb;
    let precioFinal;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidad >= 6) {
        descuento = 0.5;
    }

    else if (cantidad >= 3) {

        switch (cantidad) {

            case 5:
                if (marca == "ArgentinaLuz") {
                    descuento = 0.4;
                }
                else {
                    descuento = 0.3;
                }
                break;

            case 4:
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    descuento = 0.25;
                }
                else {
                    descuento = 0.20;
                }
                break;

            case 3:
                if (marca == "ArgentinaLuz") {
                    descuento = 0.15;
                }
                else if (marca == "FelipeLamparas") {
                    descuento = 0.10;
                }
                else {
                    descuento = 0.05;
                }
        }
    }
    else {
        descuento = 0;
    }

    precioBase = 35 * cantidad;
    precioConDescuento = precioBase - precioBase * descuento;

    if (precioConDescuento >= 120) {

        iibb = precioConDescuento * 0.10;
        precioFinal = precioConDescuento + iibb;
        alert("IIBB Usted pago $" + iibb);
    }
    else {
        precioFinal = precioConDescuento;
    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;


}
