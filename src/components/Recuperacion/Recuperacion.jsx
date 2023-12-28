import React from 'react';
import logo from "../../assets/logodemoday.png";
import {ContainerRecu, BackgroundColor, DivRecu} from './styleComRecu'

const Recuperacion = () => {
  return (
    <ContainerRecu>
      <DivRecu>
        <h2>RECUPERAR CONTRASEÑA</h2>
        <p>Ingresa tu correo electrónico para buscar tu cuenta.</p>
        <form action="">
          <input className="input-field" type="email" placeholder="Correo Electronico" />
          <button type="submit" className="btn">Recuperar</button>        
        </form>
      </DivRecu>
      <BackgroundColor>
        <img src={logo} alt="Logo" />
        <div>
          <p>SISTEMA DE GESTIÓN DE LA OFERTA ACADÉMICA Y SIMPLIFICACIÓN DE PROCESOS DE INSCRIPCIÓN</p>
        </div>
      </BackgroundColor>
    </ContainerRecu>
  );
};

export default Recuperacion;
