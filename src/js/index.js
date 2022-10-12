//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Cuerpo from "./component/Cuerpo.jsx"
import ManejaIntervalo from "./component/ManejaIntervalo.jsx"
//creo el cuerpo
ReactDOM.render(<Cuerpo />, document.getElementById("cuerpo"));
window.onload = ManejaIntervalo.ArrancaIntervalo() ;
