import React from 'react';
import logo from "../Recuperacion/logodemoday.png";
import './stylerecu.css'


const Recuperacion = () => {
  return (
    <div className="container">
      <div className="signin-signup">
        <form action="" className="sign-in-form">
          <h2 className="title">RECUPERAR CONTRASEÑA</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="email" placeholder="Correo Electronico" />
          </div>
          <input type="submit" value="Recuperar" className="btn" />
        </form>
      </div>
      <div className="panels-container">
        <div className="panel right-panel">
            <img className="image" src={logo} alt="Logo" />
            <div className="content">
                <p>SISTEMA DE GESTIÓN DE LA OFERTA ACADÉMICA Y SIMPLIFICACIÓN DE PROCESOS DE INSCRIPCIÓN</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Recuperacion;
