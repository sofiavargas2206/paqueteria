import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { Registrar } from "./Registrar"
import { Listar } from "./Listar"
import { Actualizar } from "./Actualizar"

export const Menu = (props) => {

  const [reg, setReg] = useState("");
  const [lis, setLis] = useState("");
  const [est, setEst] = useState("");
 
  

  function cerrarSesion(){
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();
  }
  function op_registrar(){
      setReg("1");
      setLis("0");
      setEst("0");
  }
  function op_listar(){
    setReg("0");
    setLis("1");
    setEst("0");
  }
  function op_actualizar(){
    setReg("0");
    setLis("0");
    setEst("1");
  }

  return (
    
    
    <>
        
    <div id="caja_menu" style={{textAlign:"left"}}>


              
    <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
      <div className="container-fluid">

        <label className="navbar-brand  h5" style={{color:'white'}} href=" ">Menú Principal</label>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="" className="nav-link  h5  text-center " style={{color:'white'}} onClick={ op_registrar } >Crear Orden</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" style={{color:'white'}} onClick={ op_listar } >Lista Ordenes</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" style={{color:'white'}}  onClick={ op_actualizar } >Actualizacion Ordenes</NavLink>
            <a className="nav-link  h5  text-center" style={{color:'white'}}  onClick={ cerrarSesion } >Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  { reg === "1" && <Registrar/> }
  { lis === "1" && <Listar/>}
  { est === "1" && <Actualizar/> }

</>
  



  )
}
