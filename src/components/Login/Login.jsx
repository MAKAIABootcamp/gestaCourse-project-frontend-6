import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from "../Login/logodemoday.png";
import './stylelogin.css'
import Funct from '../Login/funct';

const Login = () => {
  return (    
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h3>Crear Cuenta</h3>
          
          {/* <span>o usa tu email como registro</span> */}
          <input type="text" placeholder="Nombre(s)" />
          <input type="text" placeholder="Apellido(s)" />
          <select>
            <option value="opcion1">Cedula de Ciudadania</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
            <option value="opcion4">Opción 4</option>
          </select>
          <input type="text" placeholder="Numero de Identificación" />
          <input type="email" placeholder="Correo Electronico" />
          <input type="number" placeholder="Numero de Telefono" />
          <input type="password" placeholder="Contraseña" />
          <input type="password" placeholder="Confirmar Contraseña" />
          <button >Registrar</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h3>INICIO DE SESIÓN</h3>
          {/* <span>o usa tu email</span> */}
          <input type="email" placeholder="Correo Electronico" />
          <input type="password" placeholder="Contraseña" />
          <button>Entrar</button>
          <div className="social-container">
            <a href="#" className="social">
              <FontAwesomeIcon icon={faGoogle} id="red" />
            </a>
          </div>
          <input type="button"  className="regis" id="signUp" value='¿No tienes cuenta? Registrate'/>
          {/* <a href="" className="ghost" id="signUp">¿No tienes cuenta? Registrate</a> */}
          <a href="#">¿Olvidaste tú contraseña? Click Aquí</a>
          
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <img className="logo" src={logo} alt="Logo" />
            <p>Inicia sesión con tu cuenta</p>
            <button className="ghost" id="signIn">
              Inicia sesión
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <img className="logo" src={logo} alt="Logo" />
            
            <p>SISTEMA DE GESTIÓN DE LA OFERTA ACADÉMICA Y SIMPLIFICACIÓN DE PROCESOS DE INSCRIPCIÓN</p>
          </div>
        </div>
      </div>
      <Funct signUpId="signUp" signInId="signIn" containerId="container" />
    </div>
  );
};

export default Login;
