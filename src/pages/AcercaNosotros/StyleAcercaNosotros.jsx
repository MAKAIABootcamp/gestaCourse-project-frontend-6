import styled from 'styled-components';

export const StylePrincipal= styled.div`
    padding-bottom:20px;
    font-family: 'DM Sans', sans-serif;
  
`;
export const StyleContenedor = styled.div`
    width:90%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {

        flex-direction: column-reverse;
    }
`;
export const StyleLeft = styled.div`
    padding-left:5%;
    padding-right:5%;
    width:50%;
    @media screen and (max-width: 768px) {
        width:100%;
    }
`;
export const StyleRigth = styled.div`
    padding-left:5%;
    padding-right:5%;
    width:50%;
    display: flex;
    justify-content:center;
    @media screen and (max-width: 768px) {
        width:100%;
    }
`;

export const StyleTitle = styled.h1`
    width:100%;
    text-align:center;
   
`;

export const StylePararfo = styled.p`
    text-align:justify;
    color: #8F8E8E;
    @media screen and (max-width: 768px) {
        width:110%;
    }
`;

export const StyleImg = styled.img`
       width: 450px;
       height:450px;
       @media screen and (max-width: 768px) {
        width: 100%;
        }
`;

export const StyleImgMision = styled.img`
       width: 450px;
       border-radius:10px;
       @media screen and (max-width: 768px) {
        display: none;
        }
`;


export const StyleImgMisio = styled.img`
       width: 450px;
       border-radius:10px;
       @media screen and (max-width: 768px) {
        width: 100%;
    }
`;