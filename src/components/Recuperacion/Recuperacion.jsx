import React from 'react';
import logo from "../Recuperacion/logodemoday.png";
import './stylerecu.css'

const Recuperacion = () => {
  return (    
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form action="#">
          <h3>RECUPERAR CONTRASEÑA</h3>
          <span>Ingresa tu correo electrónico para buscar tu cuenta.</span> 
          <input type="email" placeholder="Correo Electronico" />
          <button>Continuar</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <img className="logo" src={logo} alt="Logo" /> 
            <p>SISTEMA DE GESTIÓN DE LA OFERTA ACADÉMICA Y SIMPLIFICACIÓN DE PROCESOS DE INSCRIPCIÓN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recuperacion;
