
import { Link } from 'react-router-dom'
import {StyleNavBarMovil,Navegacion,Links,Stylelink} from './StyleNavBarMovil'
import React, { useState } from 'react'
import BurgerButton from '../BtnHamburguesa/BurgerButton';
const NavBarMovil = (props) => {

  const clicked = props.clicked;
  const setClicked = props.setClicked;
  const handleClick = props.handleClick;
  const handleLinkClick = () => {
    // Oculta el menú al hacer clic en una opción del menú
    setClicked(false);
  };
    const items = [
        ['ofertasInscripciones','Ofertas e inscripciones'],
        ['acercaNosotros', 'Acerca de nosotros'],
        ['gestionCursos','Gestion de cursos'],
        ['editarPerfil', 'Ingresar']
    ]
    
  return (
    <>
    {clicked  && (
      <StyleNavBarMovil>
        <nav>
          <Navegacion>
            {items.map((item, index) => (
              <Links key={index}>
                <Stylelink to={item[0]} onClick={handleLinkClick}>
                  {item[1]}
                </Stylelink>
              </Links>
            ))}
          </Navegacion>
        </nav>
      </StyleNavBarMovil>
    )}
  </>
  )
}

export default NavBarMovil