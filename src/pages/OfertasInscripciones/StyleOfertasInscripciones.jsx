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

    
`;
export const Lupa = styled.img`
    width:30px;
    height:35px;
    background-color: #ECECEC;
    border-radius:10px 0 0 10px;
    
`;

export const Input = styled.input`
    width: 20rem;
    height:35px;
    background-color: #ECECEC;
    border: none;
    border-radius:0 10px 10px 0;
    &:focus {
        outline: none;
        
    }
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-items:center;
    justify-content:center;
    margin-bottom: 3%;
    /* z-index:1;
    position: relative;
    margin-top:19rem; */
    
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1,1fr);
        width: 90%;
    }

    @media screen and (min-width: 1000px) {
        min-height: 40vh;
    }
`;
// export const Cards = styled.div`
//     margin-top: 10%;
//     width:70%;
//     margin-bottom:10px;
//     transition: transform 0.3s ease;

//     border-radius:10px;
//     &:hover{
//         box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
//         border-radius:10px;
//         transform: scale(1.03);
        

//     } 
// `;
export const Cards = styled.div`
    /* margin-top: 10%; */
    width: 95%;
    margin-bottom: 10px;
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: #333; 
    background-color: #fff; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
        background-color: #f8f8f8;
        color: #333;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
        transform: scale(1.03);
        
        }
`;
export const CardImg = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
`;
export const ImgCard = styled.img`
    width:100%;
    border-radius:10px;

    
`;
export const TitleCard = styled.h2`
    display:flex;
    justify-content: center;
    text-align: center;
    height:40px;

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
    margin-top:-60px;
   
    @media screen and (max-width: 768px) {
        gap:5px;
        margin-top:15px;
    }
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
        transform: scale(1.03);
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
        transform: scale(1.03);
    }
   
`;

export const StyleImgPrincipal = styled.div`
    width:100%; 
    /* position:absolute;
    z-index:0;
     */
`;
export const StyleImgP = styled.img`
    width:100%;
`;