import logo from "../../assets/logodemoday.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './stylelogin.css'
import React from 'react';
import Funct from "./funct";

const Login = () => {
  return (
    <div className="container">
      <div className="signin-signup">
        <form action="" className="sign-in-form">
          <h2 className="title">INICIO DE SESIÓN</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="email" placeholder="Correo Electronico" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Contraseña" />
          </div>
          <input type="submit" value="Entrar" className="btn" />
          <p className="social-text">Continuar con Google</p>
          <div className="social-media">
            <a href="" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} id="red" />
            </a>
          </div>
          <a href="#" className="social-text" >¿Olvidaste tú contraseña? Click Aquí</a>
          <p className="account-text">
          ¿No tienes cuenta?<a href="#" id="sign-up-btn2">Registrate</a>
          </p>
        </form>
        <form action="" className="sign-up-form">
          <h2 className="title">Crear Cuenta</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Nombre(s)" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Apellido(s)" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
                <select>
                    <option value="opcion1">Cedula de Ciudadania</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion4">Opción 4</option>
                </select>
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="number" placeholder="Numero de Identificación" />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="email" placeholder="Correo Electronico" />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="number" placeholder="Numero de Telefono" />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="password" placeholder="Confirmar Contraseña" />
          </div>
          <input type="submit" value="Registrar" className="btn" />
          <p className="account-text">
          ¿Ya estas registrado?<a href="#" id="sign-in-btn2"> Inicio Sesión</a>
          </p>
        </form>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
        <img className="image" src={logo} alt="Logo" />
          <div className="content">
                <button className="btn" id="sign-in-btn">INICIO DE SESIÓN</button>
                <p>SISTEMA DE GESTIÓN DE LA OFERTA ACADÉMICA Y SIMPLIFICACIÓN DE PROCESOS DE INSCRIPCIÓN</p>
          </div>
        </div>
        <div className="panel right-panel">
            <img className="image" src={logo} alt="Logo" />
            <div className="content">
                <button className="btn" id="sign-up-btn">Registrar</button>
                <p>SISTEMA DE GESTIÓN DE LA OFERTA ACADÉMICA Y SIMPLIFICACIÓN DE PROCESOS DE INSCRIPCIÓN</p>
            </div>
        </div>
      </div>
      <Funct signUpId="sign-up-btn" signInId="sign-in-btn" containerId="container" />
    </div>
  );
};

export default Login;
