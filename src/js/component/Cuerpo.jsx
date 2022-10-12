import React from "react";


import ManejaIntervalo from "./ManejaIntervalo.jsx"

export default function Cuerpo(){
   
    return (
        <><div className="row bg-dark p-3 d-flex justify-content-around align-items-center m-3 mb-0">
            <div className="col d-flex justify-content-between">
                <button className="btn btn-success m-1" id="para" onClick={ManejaIntervalo.StopIntervalo}>Parar</button>
                <button className="btn btn-danger m-1" id="reanuda" onClick={ManejaIntervalo.ArrancaIntervalo}>Reanudar</button>
                <button className="btn btn-warning m-1" id="ResetIntervalo" onClick={ManejaIntervalo.ResetIntervalo}>Reset</button>
                <input type="number" className="form-control m-1" id="numero" placeholder="Nº Regresivo" onChange={ManejaIntervalo.IntervaloRegresivo} />
                <input type="number" className="form-control m-1" id="alerta" placeholder="Alerta" onChange={ManejaIntervalo.AlertaIntervalo} />
            </div>
        </div><div className="row bg-dark p-3 d-flex justify-content-around align-items-center m-3">
                <div className="col-2 d-flex justify-content-center"><i className="fas fa-circle-notch fa-spin fa-7x"></i></div>
                <div className="col p-0 d-flex justify-content-center" id="app"></div>

            </div></>
        
    );
}

