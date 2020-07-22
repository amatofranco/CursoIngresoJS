/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let farenheit;
    let centigrados;

    farenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    centigrados = (farenheit - 32) * 5/9;

    alert (farenheit + " Farenheit son " + centigrados.toFixed(2) + " Centígrados");
	
}

function CentigradosFahrenheit () 
{
    let centigrados;
    let farenheit;

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
    farenheit = (centigrados * 9/5) + 32;

    alert (centigrados + " Centígrados son " + farenheit.toFixed(2) + " Farenheit");
	
}
