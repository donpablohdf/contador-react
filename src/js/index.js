//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Cuerpo from "./component/Cuerpo.jsx"
import Intervalo from "./component/Interval.jsx"

//creo el cuerpo
ReactDOM.render(<Cuerpo />, document.getElementById("cuerpo"));

var nIntervId;
function arrancaIntervalo () {
    if (!nIntervId) {
        nIntervId = setInterval(contador, 1000);
    }
    
}
// contador para onload
let cuenta =0 ;
let resultado=0;
function contador() {
    resultado= cuenta.toLocaleString("en", {minimumIntegerDigits: 6, useGrouping: false})
    const oElem = document.getElementById("app");
    ReactDOM.render(<Intervalo segundos= {resultado} />, oElem);
    /*if (oElem.className === "go") {
        oElem.className = "stop";
    } else {
        oElem.className = "go";
    }*/
    cuenta++;
   
}
let stopIntervalo = () => {
    clearInterval(nIntervId);
    // liberar nuestro inervalId de la variable
    nIntervId = null;
}
window.onload = arrancaIntervalo;