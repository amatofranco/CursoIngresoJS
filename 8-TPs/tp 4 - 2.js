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
            break;

        case 1:
        case 2:
            descuento = 0;
            break;

        default:
            descuento = 0.5;

    }

    precioBase = 35 * cantidad;
    precioConDescuento = precioBase - precioBase * descuento;

    if (precioConDescuento >= 120) {

        iibb = precioConDescuento * 0.10;
        precioFinal = precioConDescuento + iibb;
        alert("IIBB Usted pago $" + iibb.toFixed(2));
    }
    else {
        precioFinal = precioConDescuento;
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);


}
