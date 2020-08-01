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
                
                switch (marca) {
                    
                    case "ArgentinaLuz":
                        descuento = 0.4;
                        break;
                    default:
                        descuento = 0.3;
                }
                break;

            case 4:

                switch (marca) {

                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 0.25;
                        break;
                    default:
                        descuento = 0.20;
                }
                break;

            case 3:
                switch (marca) {

                    case "ArgentinaLuz":
                        descuento = 0.15;
                        break;

                    case "FelipeLamparas":
                        descuento = 0.10;
                        break;

                    default:
                        descuento = 0.05;
                }
                break;
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
