import { logoutAsync } from "../../store/users/userActions";
import BurgerButton from "../BtnHamburguesa/BurgerButton";
import photoGeneric from "../../assets/usuario.png";
import {
  StyleNavBar,
  StyleLogoText,
  StyleLogo,
  Stylelink,
  StyleLi,
  StyleUl,
  StyleUser,
  Burguer,
  StyledNavDropdown,
} from "./StyleNavBar";
import { useEffect, useState } from "react";
import NavBarMovil from "../NavBarMovil/NavBarMovil";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const itemsNoLogin = [
  ["/", "Ofertas e inscripciones"],
  ["acercaNosotros", "Acerca de nosotros"],
  ["login", "Ingresar"],
];

const itemsEstudent = [
  ["editarPerfil", "Editar Perfil"],
  ["misCursos", "Mis Cursos"],
];

const itemsAdmin = [["gestionCursos", "Gestion de cursos"]];

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);

      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsScrolling(true);
      setIsNavbarVisible(!isScrollingDown);

      timeout = setTimeout(() => {
        setIsScrolling(false);
        setPrevScrollPos(currentScrollPos);
      }, 200); // Establece un tiempo de espera antes de actualizar la posición de desplazamiento
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isScrolling]);

  return (
    <>
      {clicked && (
        <NavBarMovil
          clicked={clicked}
          setClicked={setClicked}
          handleClick={handleClick}
        />
      )}
      <StyleNavBar className="bg-body-tertiary" $visible={isNavbarVisible && !isScrolling}>
        <StyleLogoText>
          <Link to={"/"}>
            <StyleLogo
              src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703354838/DemoDay/logo-PhotoRoom.png-PhotoRoom_keph7r.png"
              alt="logo"
            />
          </Link>
          <StyleUl>
            { user == null ? itemsNoLogin.map((item, index) => {
              return (
                <StyleLi key={index}>
                  <Stylelink to={item[0]}>{item[1]}</Stylelink>
                </StyleLi>
              );
            }) :
            itemsNoLogin.slice(0,-1).map((item, index) => {
                return (
                  <StyleLi key={index}>
                    <Stylelink to={item[0]}>{item[1]}</Stylelink>
                  </StyleLi>
                );
              })
            }
            <StyleLi>
              {user === null ? (
                <div></div>
              ) : (
              <StyledNavDropdown className="no-caret" title={<StyleUser src={user.photoURL? user.photoURL : photoGeneric}/>}>
                {user.rol === "admin" ? (
                  itemsAdmin.map((item, index) => (
                    <NavDropdown.Item key={index} as={Link} to={item[0]}>
                      {item[1]}
                    </NavDropdown.Item>
                  ))
                ) : (
                  itemsEstudent.map((item, index) => (
                    <NavDropdown.Item key={index} as={Link} to={item[0]}>
                      {item[1]}
                    </NavDropdown.Item>
                  ))
                )}
                <NavDropdown.Item>
                  <span onClick={() => dispatch(logoutAsync(navigate))}>Cerrar sesión</span>
                </NavDropdown.Item>
              </StyledNavDropdown>
              )}
            </StyleLi>
            <Burguer>
              <BurgerButton clicked={clicked} handleClick={handleClick} />
            </Burguer>
          </StyleUl>
        </StyleLogoText>
      </StyleNavBar>
    </>
  );
};

export default NavBar;
