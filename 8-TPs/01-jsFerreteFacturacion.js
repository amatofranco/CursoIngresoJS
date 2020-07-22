/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precioUno+precioDos+precioTres;
    alert("La suma de los tres productos es: " + suma);
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let promedio;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precioUno+precioDos+precioTres;
    promedio = suma / 3;
    alert("El promedio de los tres productos es: " + promedio.toFixed(2));
	
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;
    let precioFinal;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precioUno+precioDos+precioTres;
    iva = suma * 0.21;
    precioFinal = suma + iva;
    alert("El precio final es: " + precioFinal.toFixed(2));


	
}