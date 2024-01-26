import styled from 'styled-components';

export const StyleContenedor = styled.div`
    width:100%;
    height:400px;
`;
export const StyleDivImg = styled.div`
    @media screen and (max-width: 768px) {
        width:100%;
        display:flex;
        justify-content:center;
    }
`;
export const StyleImg = styled.img`
    width:25rem;
    height:15rem;
    float:left;
    margin-left:15px;
    margin-right:15px;
    border-radius:10px;
    @media screen and (max-width: 768px) {
        margin-top: 15px;
        margin-left:none;
        margin-right:none;
        float:none;
        width:15rem;
        height:15rem;
        
    }
`;
export const StyleDivParrafo = styled.div`
    height:20rem;
    
    @media screen and (max-width: 768px) {
        padding: 1rem;
        width:100%;
        
    }
`;

export const StyleTitle = styled.h1`
    width:100%; 
    text-align: center; 
   
`;

export const StyleParrafo = styled.p`
    font-size:20px;
    color: #8F8E8E;
    text-align:justify;
    padding-right:30px;
    word-break: break-all;
    @media screen and (max-width: 768px) {
        font-size:16px;
        padding-right:0px;
        
    }
 
`;

export const StyleDivSecundario = styled.div`
    padding-right:30px;
    padding-left:30px;

    @media screen and (max-width: 768px) {
        width:100%;
        margin-top:28rem;
    }
`;
export const StyleDivPuntos = styled.div`
    display: flex;
    text-align:justify;
    align-items:center;
    gap:10px;
  
`;
export const StylePunto = styled.img`
    width:15px;
    height:15px;
    
`;
export const StyleParrafoPuntos = styled.p`
    text-align:justify; 
    color: #8F8E8E;
    font-size:18px;
    @media screen and (max-width: 768px) {
        width:90%;
        font-size:16px;
       
    }
`;
export const StyleHorario = styled.div` 
     color: #8F8E8E;
     font-size:18px;
`;
export const StyleDivInversion = styled.div` 
    display: flex;
    gap: 10px;
    align-items:center;
    font-size:18px;
    @media screen and (max-width: 768px) {
        display:block;
    }
    
`;
export const StyleInversion = styled.div` 
    color: #8F8E8E;  
    
`;

export const StyleCupos = styled.h4`
    font-size:18px;
    line-height:0;

`;