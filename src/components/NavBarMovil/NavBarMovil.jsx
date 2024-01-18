
import { Link } from 'react-router-dom'
import {StyleNavBarMovil,Navegacion,Links,Stylelink} from './StyleNavBarMovil'
import { useEffect, useState } from 'react';
import BurgerButton from '../BtnHamburguesa/BurgerButton';
import { useDispatch, useSelector } from 'react-redux';

const itemsNoLogin = [
    ['/','Ofertas e inscripciones'],
    ['acercaNosotros', 'Acerca de nosotros'],
    ['login', 'Ingresar']
]

const itemsEstudent = [
    ['ofertasInscripciones','Ofertas e inscripciones'],
    ['acercaNosotros', 'Acerca de nosotros'],
    ['editarPerfil','Editar Perfil'],
    ['misCursos','Mis Cursos'],
]

const itemsAdmin = [
    ['ofertasInscripciones','Ofertas e inscripciones'],
    ['acercaNosotros', 'Acerca de nosotros'],
    ['gestionCursos','Gestion de cursos'],
]


const NavBarMovil = (props) => {


  const clicked = props.clicked;
  const setClicked = props.setClicked;
  const handleClick = props.handleClick;
  const handleLinkClick = () => {
    // Oculta el menú al hacer clic en una opción del menú
    setClicked(false);
  };
   
    const {user} = useSelector(store => store.user)
    const dispatch = useDispatch();

    
    const [items, setItems] = useState(itemsNoLogin)

    useEffect(() => {
        if(user != null){
            if(user.rol === 'admin'){
                setItems(itemsAdmin)
            }else{
                setItems(itemsEstudent)
            }
        }
    }, [user])

    
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