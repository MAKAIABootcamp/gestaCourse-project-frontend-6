import styled from "styled-components";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #06153b, #860f1b);
  color: white;
  padding: 10px 0px;
  text-align: center;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

    @media screen and (max-width: 767px) {
    /* Estilos para dispositivos móviles */
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Estilos para tabletas */
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  max-width: 300px;
  text-align: left;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  p {
    margin: 8px 0;
  }
  @media screen and (max-width: 767px) {
    /* Estilos para dispositivos móviles */
    text-align: center;
  }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Estilos para tabletas */
    text-align: center;
}
`;

const SocialMediaLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  a {
    color: white;
    text-decoration: none;
    display: block;
    margin-bottom: 8px;
    }
    @media screen and (max-width: 767px) {
        /* Estilos para dispositivos móviles */
        text-align: center;
      }
        @media screen and (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para tabletas */
        text-align: center;
    }
`;

const Icons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const AdditionalInfo = styled.div`
  flex: 1;
  max-width: 300px;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 767px) {
    /* Estilos para dispositivos móviles */
    text-align: center;
  }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Estilos para tabletas */
    text-align: center;
}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactInfo>
          <h2>Contacto</h2>
          <p>Direccion : Carrera 11 #14-5</p>
          <p>Ciudad : Medellin</p>
          <p>Departamento Antioquia</p>
          <p>Telefono : 123456789</p>
        </ContactInfo>
        <AdditionalInfo>
          <h2>Información Adicional</h2>
          <p>Política de Privacidad</p>
          <p>Términos y Condiciones</p>
        </AdditionalInfo>
        <SocialMediaLinks>
          <h2>Redes Sociales</h2>
          <Icons>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} style={{ marginRight: 10 }} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} style={{ marginRight: 10 }} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} />
              </a>
          </Icons>
        </SocialMediaLinks>
      </FooterContent>
      <p>&copy; GestaCourse {new Date().getFullYear()}</p>
    </FooterContainer>
  );
};

export default Footer;
