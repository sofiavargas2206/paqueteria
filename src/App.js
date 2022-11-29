//import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter, Routes, Link, Route, Router } from "react-router-dom";
import { Login } from './components/Login'
import { Registro } from "./components/Registro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>   
          <Route path="/registro" element={<Registro/>}/>   
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
