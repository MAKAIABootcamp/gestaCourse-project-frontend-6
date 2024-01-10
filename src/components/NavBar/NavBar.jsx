import {StyleNavBar,StyleLogoText,StyleLogo,Stylelink,StyleLi,StyleUl,StyleUser} from './StyleNavBar'

const NavBar = () => {
    const items = [
        ['ofertasInscripciones','Ofertas e inscripciones'],
        ['acercaNosotros', 'Acerca de nosotros'],
        ['gestionCursos','Gestion de cursos'],
        ['login', 'Ingresar']
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
                 <StyleUser src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703699483/DemoDay/pngtree-cartoon-style-male-user-profile-icon-vector-illustraton-png-image_6489287_qmtlye.png" alt="user" />
            </StyleUl>
        </StyleLogoText>
    </StyleNavBar>
  
  )
}

export default NavBar