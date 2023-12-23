import React, { useEffect } from 'react';

const Funct = () => {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const abrirFormularioRegistro = () => {
      container.classList.add('right-panel-active');
    };

    const volverFormularioInicioSesion = () => {
      container.classList.remove('right-panel-active');
    };

    signUpButton.addEventListener('click', abrirFormularioRegistro);
    signInButton.addEventListener('click', volverFormularioInicioSesion);

    return () => {
      // Limpiar los event listeners al desmontar el componente
      signUpButton.removeEventListener('click', abrirFormularioRegistro);
      signInButton.removeEventListener('click', volverFormularioInicioSesion);
    };
  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente
  return null;

};

export default Funct;
