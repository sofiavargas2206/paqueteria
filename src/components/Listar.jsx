import React, { useState, useEffect } from 'react'

export const Listar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }


  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const botonEliminar = (miIndex) => {
    if(window.confirm("¿Está Seguro De Querer Eliminar El Registro?")){
      var registrosFiltrados = registroslogin.filter((e, index) => {
          return miIndex !== index
      });
      setRegistrosLogin(registrosFiltrados);
    }
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin])



  return (
    

    
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Listado De ordenes
    </div>

    <div className="table-responsive">
      
    
      <>
        <table className="table table-bordered table-hover" style={{marginTop:12}}>
            <thead className="text-center" style={{background:"lightgray"}}>
                <tr>
                    <th>#</th>
                    <th>Fecha</th>
                    <th>Dirección Entrega </th>
                    <th>Ciudad Entrega</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody className="text-center align-baseline">
                {
                    <tr >
                      <th>1</th>
                      <td>20/11/2022 01:00</td>
                      <td>calle falsa 123</td>
                      <td>Bogotá</td>
                      <td>Guardado</td>
                     
                    </tr>
                  
                }
            </tbody>
        </table>
      </> 
      
    
      
    </div>
 
  </div>



  )
}
