import styled from "styled-components";

export const StylesPrincipal = styled.div`
    width:100%;
    font-family: 'DM Sans', sans-serif;
    margin-top: 2%;
`;

export const Title = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
        text-align:center;
    }
`;
export const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        width: 90%;
    }
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
    border-radius:0 10px 10px 0;
    @media screen and (max-width: 768px) {
        width: 90%;
    }
    
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
// export const FormBuscar= styled.form`
//   border:1px solid red;  
//   display: flex;
//   padding:0;
//   margin:0;
//   `;

export const DivCards = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-items:center;
    justify-content:center;  
    
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1,1fr);
        width: 90%;
    }
`;
export const Cards = styled.div`
    margin-top: 10%;
    width:95%;
    margin-bottom:10px;
    transition: transform 0.3s ease;

    
    &:hover{
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        border-radius:10px;
        transform: scale(1.03);
        border: 1px solid #06153B;
    } 
`;
export const CardImg = styled.div`
    display: flex;
    justify-content:center;
    margin-top: 10px;
`;
export const ImgCard = styled.img`
    width:15rem;
    height:15rem;
    border-radius:15px;
`;
export const TitleCard = styled.h2`
    display:flex;
    justify-content:center;
    @media screen and (max-width: 768px) {
        text-align:center;
        
    }
`;
export const TextCard = styled.p`
    height:160px;
    color:#8F8E8E;  
    font-size:18px;
    padding-left:10px;
    padding-right:10px;

`;
export const Botones = styled.div`
    display: flex;
    width:100%;
    justify-content:space-around;
    align-items:center;
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
    &:hover{
        cursor: pointer;
    }
`;

export const BotonInscripcion = styled.button`
    width:150px;
    height:35px;
    border: none;
    border-radius: 13px;
    color:white;
    font-size:16px;
    background-color:#004AAD;
    &:hover{
        cursor: pointer;
    }
`;
