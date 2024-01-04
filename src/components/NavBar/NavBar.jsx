import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const items = [
        'ofertasInscripciones',
        'quienesSomos',
        'EditarCurso'
    ]
  return (
    <div className='navDestock'>
        <nav >
            <ul >
                {items.map((item,index)=>{
                    return <li key={index} className='navDestock_navegacion_link'><Link to={item}>{item}</Link></li>
                })
                }    
            </ul>
        </nav>
    </div>
  
  )
}

export default NavBar