import styled from "styled-components";
import { Link } from 'react-router-dom'

export const StyleNavBarMovil = styled.div`
    position: fixed;
    margin-top: 100px;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(110deg, #06153B, #860F1B); 
    z-index: 1000;
    
     
`;
export const Navegacion = styled.ul`
    list-style: none;
    padding: 20px 0;    
    display: flex;
    flex-direction: column;     
    align-items: center;
    margin: 0;
`;

export const Links = styled.li`
    
    margin: 10px 0; /* Ajusta el espaciado entre los elementos */; 
`;
export const Stylelink= styled(Link)`
    
    color: #fff;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  transition: color 0.3s ease; /* Agrega una transición suave al color */

  &:hover {
    color: #61dafb; /* Cambia el color al hacer hover */
  }
`;
