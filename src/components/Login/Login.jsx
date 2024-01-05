import logo from "../../assets/logodemoday.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './stylelogin.css'
import Funct from "./funct";
import { useDispatch } from "react-redux"
import { createAnAccountAsync, loginWithGoogle } from "../../store/users/userActions";
import { useForm } from "react-hook-form";
import store from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigateTo = useNavigate();
  const { register,reset,handleSubmit} = useForm();
  const dispatch = useDispatch();

  const handleLogin = () => {
      dispatch(loginWithGoogle());
      console.log(store.getState().user);
  }
  const handleRegister = async (data) => {
    console.log(data);
    dispatch(createAnAccountAsync(data));
    reset();
  };

  const handleLoginWithEmailAndPassword = async(data) => {
    const {email,password} = data;
    console.log(email,password);
    reset();
  };

  return (
    <div className="container">
      <div className="signin-signup">
        <form action="" className="sign-in-form" onSubmit={handleSubmit(handleLoginWithEmailAndPassword)}>
          <h2 className="title">INICIO DE SESIÓN</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="email" placeholder="Correo Electronico" {...register('email')}  />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Contraseña" {...register('password')}/>
          </div>
          <button type="submit" className="btn"> Entrar</button>
          <p className="social-text">Continuar con Google</p>
          <div className="social-media">
            <a  className="social-icon">
                <FontAwesomeIcon icon={faGoogle} onClick={() => handleLogin()} id="red" cursor={'pointer'}/>
            </a>
          </div>
          <a href="#" className="social-text" >¿Olvidaste tú contraseña? Click Aquí</a>
          <p className="account-text">
          ¿No tienes cuenta?<a href="#" id="sign-up-btn2">Registrate</a>
          </p>
        </form>
        <form action="" className="sign-up-form" onSubmit={handleSubmit(handleRegister)} >
          <h2 className="title">Crear Cuenta</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Nombre(s)"  {...register('nombre')}/>
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Apellido(s)" {...register('apellidos')}/>
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
                <select {...register('cc')}>
                    <option value="opcion1">Cedula de Ciudadania</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion4">Opción 4</option>
                </select>
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="number" placeholder="Numero de Identificación" {...register('id')} />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="email" placeholder="Correo Electronico" {...register('email')}/>
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="number" placeholder="Numero de Telefono" {...register('telefono')} />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="password" placeholder="Contraseña" {...register('password')} />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="password" placeholder="Confirmar Contraseña" {...register("confirmedPassword")}/>
          </div>
          <button type="submit" className="btn">Registrar</button>
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
                <button type="submit" className="btn" id="sign-up-btn">Registrar</button>
                <p>SISTEMA DE GESTIÓN DE LA OFERTA ACADÉMICA Y SIMPLIFICACIÓN DE PROCESOS DE INSCRIPCIÓN</p>
            </div>
        </div>
      </div>
      <Funct signUpId="sign-up-btn" signInId="sign-in-btn" containerId="container" />
    </div>
  );
};

export default Login;
