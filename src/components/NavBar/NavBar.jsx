import React from 'react'
import { Link } from 'react-router-dom'
import {StyleNavBar,StyleLogoText,StyleLogo,Stylelink,StyleLi,StyleUl} from './StyleNavBar'

const NavBar = () => {
    const items = [
        ['ofertasInscripciones','Ofertas e inscripciones'],
        ['acercaNosotros', 'Acerca de nosotros'],
        ['ingresar', 'Ingresar']
    ]
  return (
    <StyleNavBar>
        <StyleLogoText >
            <StyleLogo src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703354838/DemoDay/logo-PhotoRoom.png-PhotoRoom_keph7r.png" alt="logo" />
            <StyleUl>
                {items.map((item,index)=>{
                    return <StyleLi key={index} ><Stylelink to={item[0]}>{item[1]}</Stylelink></StyleLi>
                })
                } 

            </StyleUl>
        </StyleLogoText>
    </StyleNavBar>
  
  )
}

export default NavBar