import React, { useState } from 'react'
import { Menu } from './Menu'
import { Registro } from './Registro'
import Form from 'react-bootstrap/Form';
import { BrowserRouter, Router,Routes, Route, Link } from 'react-router-dom';


export const Login = () => {

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
    

    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
  
    <Form className='login border border-dark p-5 ' id='login' controlId='login'>
<h1>Iniciar sesion</h1>
<Form.Group className="form-group" controlId="formBasicEmail">
  <Form.Label>Usuario</Form.Label>
  <Form.Control type="email"  id='txtusu' className="border-dark" placeholder="Enter email"  onChange={ (e)=>setUsu(e.target.value) } />
  <Form.Text className="text-muted">
    
  </Form.Text>
</Form.Group>

<Form.Group className=" form-group" controlId="formBasicPassword">
  <Form.Label>Contraseña</Form.Label>
  <Form.Control type="password"  id="txtpas" className="border-dark" placeholder="Password"  onChange={ (e)=>setPas(e.target.value) }/>
</Form.Group>
<Form.Group className=" form-group" controlId="formBasicPassword">


  <Link to="/registro" > Registrate Aqui !!</Link>
  <Routes>
  <Route path="/registro" element={<Registro/>}/>
  </Routes>
 

</Form.Group>

<input type="submit"  className="btn btn-primary" value="Login" onClick={ iniciarSesion }/>
</Form>

    { miLogin === "true" && <Menu usu={usu}/> }

</div>


  )
}
