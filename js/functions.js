function ventanadealerta ()
    {alert ("atención de alerta");}

function VentanaConfirmacion()
{
var respuesta;
    if(confirm("Desea Confirmar?"))
    {
    respuesta="Has pulsado OK";
    }
    else
    {
        respuesta= "Has pulsado CANCEL";
    }
    document.getElementById("MensajeConfirmacion").innerHTML=respuesta;
    }

function PideInformacion()
{
var respuesta;
var person= prompt("Como te llamas?");
if(person== null|| person=="")
    {
     respuesta= "El usuario pulso CANCEL"
    }
    else
    {
        respuesta= "HOLA"+ person+".Que tal te va la vida?";
    }
    document.getElementByld("MensajeInformacion").innerHTML=respuesta;
}
