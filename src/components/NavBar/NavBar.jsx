import { useDispatch } from 'react-redux';
import { logoutAsync } from '../../store/users/userActions'
import BurgerButton from '../BtnHamburguesa/BurgerButton';
import {StyleNavBar,StyleLogoText,StyleLogo,Stylelink,StyleLi,StyleUl,StyleUser,Burguer} from './StyleNavBar'
import React, { useState } from 'react'
import NavBarMovil from '../NavBarMovil/NavBarMovil';

const NavBar = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      //cuando esta true lo pasa a false y vice versa
      setClicked(!clicked)
      
    }
    const dispatch = useDispatch();
    const items = [
        ['ofertasInscripciones','Ofertas e inscripciones'],
        ['acercaNosotros', 'Acerca de nosotros'],
        ['gestionCursos','Gestion de cursos'],
        ['editarPerfil', 'Ingresar']
    ]
    return (
        <>
        {clicked && <NavBarMovil clicked={clicked} setClicked={setClicked} handleClick={handleClick}/>}
        <StyleNavBar>
            <StyleLogoText >
                <StyleLogo src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703354838/DemoDay/logo-PhotoRoom.png-PhotoRoom_keph7r.png" alt="logo" />
                <StyleUl>
                    {items.map((item,index)=>{
                        return <StyleLi key={index} ><Stylelink to={item[0]}>{item[1]}</Stylelink></StyleLi>
                        })
                    } 
                        <StyleUser src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703699483/DemoDay/pngtree-cartoon-style-male-user-profile-icon-vector-illustraton-png-image_6489287_qmtlye.png" alt="user" />
                    <li>
                        <button type='button' onClick={() => {dispatch(logoutAsync())}} >Salir</button>
                    </li>
                    <Burguer>
                        <BurgerButton clicked={clicked} handleClick={handleClick} />
                    </Burguer>
                </StyleUl>
            </StyleLogoText>
        </StyleNavBar>
        </>
    )
}

export default NavBar