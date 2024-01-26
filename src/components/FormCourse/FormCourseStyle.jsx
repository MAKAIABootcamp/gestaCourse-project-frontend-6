import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const FormContent = styled.form`
    width: 100%;
    @media screen and (min-width: 1000px) {
        min-height: 50vh;
    }
`
export const DivButtonsNextPreview = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 2%;
    padding-top: 2%;
    border-top: 1px solid #B8B9BB;
    @media screen and (max-width: 767px) {
        /* Estilos para dispositivos móviles */
        flex-wrap: wrap;
    }
`
export const ButtonNextPreview = styled.div`
    font-family: 'DM Sans', sans-serif;
    background-color: #04153B;
    border: 2px solid #04153B;
    font-size: 100%;
    color: #fff;
    border-radius: 15px;
    padding: 1% 2% 1% 2%;
    transition: transform 0.3s ease; 
    &:hover{
        cursor: pointer;
        background-color: #fff;
        color: #04153B;
        transform: scale(1.1);
    }
`
export const ContendDiv = styled.div`
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0;
    width: 100%;
    color: #04153B;
    font-family: 'DM Sans', sans-serif;
    /* Transisiones */
    display: ${(props) => (props.active ? 'flex' : 'none')};
    opacity: ${(props) => (props.active ? 1 : 0)};
    transform: translateY(${(props) => (props.active ? '0' : '-20px')});
    transition: opacity 300ms, transform 300ms;
    animation: ${(props) => (props.active ? fadeIn : 'none')} 300ms ease-in-out;
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`
export const Divsecundary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const Div = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    h3{
        width: 90%;
        text-align: left;
    }
    h4{
        width: 100%;
        text-align: left;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

export const DivInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
`

export const DivInputsHor = styled.div`
    width: 30%;
    margin: 1%;
    label{
        width: 100%;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

export const DivHor = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px;
    h3{
        width: 100%;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

export const Input = styled.input`
    border: none;
    border-radius: 15px;
    background-color: #ECECEC;
    padding: 10px;
    width: 90%;
    color: #4D4C4C;
    outline: none;
`

export const InputFile = styled.input`
    width: 90%;
    background-color: #ECECEC;
    border-radius: 15px;
    color: #4D4C4C;
    &::file-selector-button{
        margin-right: 20px;
        border: none;
        background: #D9D9D9;
        padding: 10px 20px;
        border-radius: 10px;
        color: #4D4C4C;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }
`
export const Select = styled.select`
    width: 90%;
    border: none;
    border-radius: 15px;
    padding: 10px;
    background-color: #ECECEC;
    color: #4D4C4C;
    outline: none;
`
export const DivButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    @media screen and (max-width: 767px) {
        /* Estilos para dispositivos móviles */
        justify-content: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para tabletas */
        justify-content: center;
    }
`
export const ButtonSave = styled.button`
    display: flex;
    font-family: 'DM Sans', sans-serif;
    font-size: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: #2a559b;
    color: #fff;
    border: 2px solid #2a559b;
    border-radius: 15px;
    padding: 1% 1% 1% 1%;
    transition: transform 0.3s ease; 
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        background-color: #fff;
        color: #2a559b;
    }
    img{
        width: 15%;
    }
    p{
        margin: 0;
    }
`
export const ButtonAgg = styled.button`
    width: 50%;
    font-family: 'DM Sans', sans-serif;
    text-align: center;
    background-color: #2a559b;
    border: 2px solid #2a559b;
    color: #fff;
    border-radius: 15px;
    padding: 2%;
    margin: 2%;
    margin-bottom: 4%;
    transition: transform 0.3s ease; 
    &:hover{
        cursor: pointer;
        background-color: #fff;
        color: #2a559b;
        transform: scale(1.1);
    }
`
export const ButtonDel = styled.button`
    font-family: 'DM Sans', sans-serif;
    width: auto;
    text-align: center;
    background-color: #860F1B;
    color: #fff;
    border: none;
    padding: 1% 2% 1% 2%;
    border-radius: 50%;
`
export const ButtonCancel = styled.button`
    display: flex;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    background-color: #860F1B;
    border: 2px solid #860F1B;
    font-size: 100%;
    color: #fff;
    border-radius: 15px;
    padding: 1% 2% 1% 2%;
    transition: transform 0.3s ease; 
    &:hover{
        cursor: pointer;
        background-color: #fff;
        color: #860F1B;
        transform: scale(1.1);
    }
`
export const UlHorAgg = styled.ul`
    margin-top: 5%;
    width: 100%;
    padding: 0 10px 0 10px;
    max-height: 200px;
    overflow-y: auto;
    li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2%;
    }
`
