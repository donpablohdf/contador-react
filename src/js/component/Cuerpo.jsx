import React from "react";


import ManejaIntervalo from "./ManejaIntervalo.jsx"

export default function Cuerpo(){
   
    return (
        <div className="row bg-dark p-3 d-flex justify-content-around align-items-center m-3">
            <div className="col-4 d-flex justify-content-between">
                <button className="btn btn-success" id="para" onClick={ManejaIntervalo.StopIntervalo} >Parar</button>
                <button className="btn btn-danger" id="reanuda" onClick={ManejaIntervalo.ArrancaIntervalo} >Reanudar</button>
                <button className="btn btn-warning" id="ResetIntervalo" onClick={ManejaIntervalo.ResetIntervalo} >Reset</button></div>
            <div className="col d-flex justify-content-center"><i className="fas fa-circle-notch fa-spin fa-7x"></i></div>
            <div className="col-6 p-0d-flex justify-content-start" id="app"></div>
                     
        </div>
        
    );
}

