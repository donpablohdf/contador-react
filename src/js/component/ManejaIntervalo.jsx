import React from "react";
import ReactDOM from "react-dom";
import Intervalo from "./Interval.jsx"

var nIntervId;
var cuenta =0 ;
let num_alerta = 0;
let resultado=0;
const ManejaIntervalo = new Object();

ManejaIntervalo.Contador = () =>{
    const oElem = document.getElementById("app");
    resultado= cuenta.toLocaleString("en", {minimumIntegerDigits: 6, maximumFractionDigits: 10, useGrouping: false});        
    ReactDOM.render(
        <React.StrictMode>
        <>
        <Intervalo segundos= {resultado} />
        </>
        </React.StrictMode>
    , oElem);
    cuenta++;
}
ManejaIntervalo.StopIntervalo = () =>{
    clearInterval(nIntervId);
    // liberar nuestro inervalId de la variable
    nIntervId = null;
}
ManejaIntervalo.ArrancaIntervalo = () =>{
    if (!nIntervId) {
        nIntervId = setInterval(ManejaIntervalo.Contador, 1000);
    }
};
ManejaIntervalo.ResetIntervalo = () =>{
    cuenta = 0;
    ManejaIntervalo.ArrancaIntervalo;
}
ManejaIntervalo.IntervaloRegresivo = () =>{
    cuenta = - document.getElementById("numero").value;
    ManejaIntervalo.ArrancaIntervalo;
}
ManejaIntervalo.AlertaIntervalo = () =>{
    num_alerta =  document.getElementById("alerta").value;
    if (num_alerta!="Alerta" && num_alerta>0){
        num_alerta++;
        let IdintervaloAlert = setInterval( function (){            
            if (cuenta==num_alerta){  
                num_alerta= "Alerta";
                cuenta --;  
                clearInterval(IdintervaloAlert);      
                alert("Alerta");                
                document.getElementById("alerta").value= num_alerta;
            }
        }, 1200);
    }
    
}
export default ManejaIntervalo;