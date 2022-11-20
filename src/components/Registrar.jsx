import React, { useState, useEffect } from 'react'

export const Registrar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }


  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const [titulo, setTitulo] = useState("");
  const [estilo, setEstilo] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [precio, setPrecio] = useState("");
  const [reg, setReg] = useState("");
  const [lis, setLis] = useState("");
  const [est, setEst] = useState("");
 


  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { titulo, estilo, tecnica, precio }
    setRegistrosLogin([...registroslogin, miObjeto]);
    limpiarFormulario();
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin] );



  const limpiarFormulario = () => {
    setTitulo("");
    setEstilo("");
    setTecnica("");
    setPrecio("");
    document.getElementById("miFormulario").reset();
  }


  return (
    

    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Formulario De Creacion Ordenes
      <br/>
      <form id="miFormulario" onSubmit={ botonGuardar } >
        <div className="row" style={{marginTop:20}}>
         <div className="col-6">
          <label>Fecha</label>
          <input className="form-control form-control-lg text-center" type="date" min="1"  placeholder="Digite la fecha"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
          <div className="col-6">
          <label>Hora</label>
          <input className="form-control form-control-lg text-center" type="time" min="1"  placeholder="Digite la hora"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
        </div>
        
        <div className="row" style={{marginTop:20}}>
         <div className="col-4">
          <label>Largo</label>
          <input className="form-control form-control-lg text-center" type="number" min="1"  placeholder="Digite el largo"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
          <div className="col-4">
          <label>Ancho</label>
          <input className="form-control form-control-lg text-center" type="number" min="1"  placeholder="Digite el anchi"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
          <div className="col-4">
          <label>Alto</label>
          <input className="form-control form-control-lg text-center" type="number" min="1"  placeholder="Digite el alto"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
        </div>
        <div className="row" style={{marginTop:20}}>
         <div className="col-6">
          <label>Dirección recogida</label>
          <input className="form-control form-control-lg text-center" type="text" min="1"  placeholder="Digite la direccion de recogida"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
          <div className="col-6">
          <label>Ciudad recogida</label>
          <input className="form-control form-control-lg text-center" type="text" min="1"  placeholder="Digite la ciudad de recogida"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
          
        </div>
        
        <div className="row" style={{marginTop:20}}>
         <div className="col-6">
          <label>Nombre destinatario </label>
          <input className="form-control form-control-lg text-center" type="text" min="1"  placeholder="Digite el nombre del destinatario"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
          <div className="col-6">
          <label>Dcoumento destinatario </label>
          <input className="form-control form-control-lg text-center" type="text" min="1"  placeholder="Digite el documento del destinatario"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
          
        </div>
        <div className="row" style={{marginTop:20}}>
         <div className="col-6">
          <label>Dirección destinatario</label>
          <input className="form-control form-control-lg text-center" type="text" min="1"  placeholder="Digite la direccion de destino"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
          <div className="col-6">
          <label>Ciudad destinatario</label>
          <input className="form-control form-control-lg text-center" type="text" min="1"  placeholder="Digite la ciudad de destino"  onChange={(e) => setPrecio(e.target.value)}  required  />
         
          </div>
          
        </div>
       

        <div className="row" style={{marginTop:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg">Crear Orden</button>
          </div>
        </div>
      </form>
    </div>
            
  </div>




  )
}
