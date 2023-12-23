import styled from "styled-components";
import { Link } from 'react-router-dom'
export const StyleNavBar = styled.div`
     background: linear-gradient(to right, #06153B, #860F1B);
     
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
`;
