import styled from "styled-components";
import { Link } from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";
export const StyleNavBar = styled.div`
     background: linear-gradient(to right, #06153B, #860F1B);
     font-family: 'DM Sans', sans-serif;
     transition: transform 0.3s ease-in-out;
     transform: translateY(${(props) => (props.$visible ? '0' : '-100%')});
     position: sticky;
     top: 0;
     width: 100%;
     color: white;
     z-index: 1000;
`;
export const StyleLogoText = styled.nav`
     display: flex;
     justify-content: space-between;
     padding-right: 5rem;
     align-items: center;
`;

export const StyleLogo = styled.img`
     width:8rem;
`;
export const StyleLi = styled.li`
     list-style: none;
     display: none;
     button {
          font-family: 'DM Sans', sans-serif;
          font-size: 100%;
          color: #fff;
          background-color: #06153B;
          border: 2px solid #06153B;
          border-radius: 25px;
          padding: 10px;
          transition: transform 0.3s ease;
          &:hover{
               cursor: pointer;
               background: linear-gradient(to right, #06153B, #860F1B);
               color: #fff;
               transform: scale(1.2);
          }
     }
     @media(min-width: 768px){
          display: block;
     }
`;


export const Stylelink= styled(Link)`
     text-decoration:none;
     color:white;
     font-size:20px;
     &:hover{
          border-bottom:2px solid white;
     }
`;
export const StyleUl = styled.ul`
     display:flex;  
     gap:1rem;
     align-items:center;
`;
export const StyleUser = styled.img`
     width: 60px;
     height: 60px;
     border-radius:50%;
     
`;
export const Burguer = styled.div`
     @media(min-width: 768px){
          display: none;
     }
`;

export const StyledNavDropdown = styled(NavDropdown)`
     &&& > a::after {
          display: none !important;
     }
`;

