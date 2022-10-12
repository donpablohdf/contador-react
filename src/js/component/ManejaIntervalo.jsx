import React from "react";
import ReactDOM from "react-dom";
import Intervalo from "./Interval.jsx"

var nIntervId;
let cuenta =0 ;
let resultado=0;
const ManejaIntervalo = new Object();

ManejaIntervalo.Contador = () =>{
    const oElem = document.getElementById("app");
        resultado= cuenta.toLocaleString("en", {minimumIntegerDigits: 6, useGrouping: false});        
        ReactDOM.render(<Intervalo segundos= {resultado} />, oElem);
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
export default ManejaIntervalo;