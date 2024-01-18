import { useDispatch, useSelector } from 'react-redux';
import { logoutAsync } from '../../store/users/userActions'
import {StyleNavBar,StyleLogoText,StyleLogo,Stylelink,StyleLi,StyleUl,StyleUser} from './StyleNavBar'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const {user} = useSelector(store => store.user)
    const dispatch = useDispatch();

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
        <StyleNavBar>
            <StyleLogoText >
                <Link to={'/'}>
                    <StyleLogo src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703354838/DemoDay/logo-PhotoRoom.png-PhotoRoom_keph7r.png" alt="logo" />
                </Link>
                <StyleUl>
                    {items.map((item,index)=>{
                        return <StyleLi key={index} ><Stylelink to={item[0]}>{item[1]}</Stylelink></StyleLi>
                    })
                    }
                        <StyleUser src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703699483/DemoDay/pngtree-cartoon-style-male-user-profile-icon-vector-illustraton-png-image_6489287_qmtlye.png" alt="user" />
                    <li>
                        {
                            user==null ? <div></div> :<button type='button' onClick={() => {dispatch(logoutAsync())}} >Salir</button>
                        }
                    </li>
                </StyleUl>
            </StyleLogoText>
        </StyleNavBar>
    )
}

export default NavBar