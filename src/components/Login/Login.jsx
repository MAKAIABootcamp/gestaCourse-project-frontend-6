import logo from "../../assets/logodemoday.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './stylelogin.css'
import Funct from "./funct";
import { useDispatch } from "react-redux"
import { createAnAccountAsync, loginWithEmailAndPassword, loginWithGoogle } from "../../store/users/userActions";
import { useForm } from "react-hook-form";
import store from "../../store/store";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const { register,reset,handleSubmit} = useForm();
  const dispatch = useDispatch();
  const { error } = store.getState().user;

  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogle());
  }
  const handleRegister = async (data) => {
    dispatch(createAnAccountAsync(data));
    reset();
  };

  const handleLoginWithEmailAndPassword = async(data) => {
    const {emailLogin,passwordLogin} = data;
    console.log(data)
    dispatch(loginWithEmailAndPassword(emailLogin,passwordLogin));
    reset();
  };

  return (
    <div className="container">
      <div className="signin-signup">
        <form action="" className="form sign-in-form" onSubmit={handleSubmit(handleLoginWithEmailAndPassword)}>
          <h2 className="title">INICIO DE SESIÓN</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="email" placeholder="Correo Electronico" {...register('emailLogin')}  />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Contraseña" {...register('passwordLogin')}/>
          </div>
          <button type="submit" className="btn"> Entrar</button>
          <p className="social-text">Continuar con Google</p>
          <div className="social-media">
            <a  className="social-icon">
                <FontAwesomeIcon icon={faGoogle} onClick={() => handleLoginWithGoogle()} id="red" cursor={'pointer'}/>
            </a>
          </div>
          <p className="social-text" >¿Olvidaste tú contraseña? Click <Link to='/recuperacion'>Aquí</Link></p>
          <p className="account-text">
          ¿No tienes cuenta?<a href="#" id="sign-up-btn2">Registrate</a>
          </p>
        </form>
        <form action="" className="form sign-up-form" onSubmit={handleSubmit(handleRegister)} >
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
                    <option value="CC">Cedula de Ciudadania</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="PP">Pasaporte</option>
                    <option value="CE">Cedula de extranjeria</option>
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
