function CalcularPrecio () 
{
    let precioBase;
    let descuento;
    let cantidad;
    let marca;
    let precioFinal;
    let ingresosBrutos;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value); 
    marca = document.getElementById("Marca").value;
    
    if (cantidad >=6){
        descuento = 0.5;
    }

    else if (cantidad >=3){
    
        switch (marca){

            case "ArgentinaLuz":

                    switch(cantidad){

                    case 5:   
                    descuento = 0.4;        
                    break;

                    case 4:
                    descuento = 0.25;
                    break;

                    case 3:
                    descuento = 0.15;
                    break;
                }
                break;

            case "FelipeLamparas":

                    switch(cantidad){

                    case 4:
                    descuento = 0.25;                
                    break;

                    case 3:
                    descuento = 0.10;
                    break;

                    default:
                    descuento = 0;
                }
                break;

            default:

                switch (cantidad){

                    case 5:
                    descuento = 0.30;
                    break;

                    case 4:
                    descuento = 0.20;
                    break;

                    case 3:
                    descuento = 0.05;
                    break;
                }
            }

    }
    else {
    descuento = 0;
    }

    precioBase = 35 * cantidad;

    precioFinal = precioBase - precioBase * descuento;

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if (precioFinal >= 120){

        ingresosBrutos = precioFinal * 0.10;
        alert ("IIBB Usted pago $" + ingresosBrutos);
        }
}
    
