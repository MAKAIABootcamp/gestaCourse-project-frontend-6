import styled from "styled-components";

export const StylesPrincipal = styled.div`
    width:100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
`;
export const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
`;
export const Lupa = styled.img`
    width:30px;
    height:32px;
    background-color: #ECECEC;
    border-radius:10px 0 0 10px;
`;

export const Input = styled.input`
    width: 20rem;
    height:30px;
    background-color: #ECECEC;
    border: none;
    
`;
export const BotonBuscar = styled.button`
    height:32px;
    width:70px;
    font-weight:bold;
    background-color: #04153B;
    border: none;
    border-radius:10px 10px 10px 10px;
    color: white;
`;

export const DivCards = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;  
`;
export const Cards = styled.div`
    margin-top: 20px;
    width:30rem;
    margin-bottom:10px;
    transition: transform 0.3s ease;
    &:hover{
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        border-radius:10px;
        transform: scale(1.04);
    }
    
`;
export const CardImg = styled.div`
    display: flex;
    justify-content:center;
`;
export const ImgCard = styled.img`
    width:15rem;
    height:15rem;
    border-radius:15px;
`;
export const TitleCard = styled.h2`
    display:flex;
    justify-content:center;
`;
export const TextCard = styled.p`
    height:180px;
    color:#8F8E8E;  
    font-size:18px;
    padding-left:10px;
    padding-right:10px;
`;
export const Botones = styled.div`
    display: flex;
    width:100%;
    justify-content:space-around;
    margin-bottom:10px;

`;
export const BotonDetalles = styled.button`
    width:150px;
    height:35px;
    border: none;
    border-radius: 13px;
    color:white;
    background-color:#04153B;
    font-size:16px;
`;

export const BotonInscripcion = styled.button`
    width:150px;
    height:35px;
    border: none;
    border-radius: 13px;
    color:white;
    font-size:16px;
    background-color:#004AAD;
   
`;