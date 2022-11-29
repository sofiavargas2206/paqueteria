import React, { useState} from 'react'
import { Menu } from './Menu'
import { Login } from './Login'
import Form from 'react-bootstrap/Form';
import { BrowserRouter, Router,Routes, Route, Link } from 'react-router-dom';


export const Registro = () => {

  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");


  
  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("Complete Los Datos Faltantes!!");
    }else{
      if(usu === "admin" && pas==="123"){
        setMiLogin("true");
        document.getElementById("login").style.display = "none";
      }else{
        setMiLogin("false");
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
        
      }
    }
  }


  return (
    
    <div className="container">

    <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
            {/* <!-- Nested Row within Card Body --> */}
            <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4"> Registrarse </h1>
                        </div>
                        <form className="user">
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                        placeholder="First Name"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                        placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                    placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <input type="celular" className="form-control form-control-user" id="exampleInputCelular"
                                    placeholder="Celular"/>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="password" className="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="password" className="form-control form-control-user"
                                        id="exampleRepeatPassword" placeholder="Repeat Password"/>
                                </div>
                            </div>
                            <a href="login.html" className="btn btn-primary btn-user btn-block">
                                Register Account
                            </a>
                            <hr/>  
                        </form>
                        <hr/>
                        <div className="text-center">
                        <Link to="/" >Already have an account? Login!</Link>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    </div>

  )
}
