import styled from "styled-components"

export const FormContent = styled.form`
    width: 100%;
`

export const ContendDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    width: 100%;
    color: #04153B;
    text-color: #04153B;
    font-family: 'DM Sans', sans-serif;
    @media screen and (max-width: 767px) {
        /* Estilos para dispositivos móviles */
        flex-direction: column;
      }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para tabletas */
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
    margin: 10px;
`

export const DivInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
`

export const H3 = styled.h3`
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
    width: 55%;
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
    align-items: center;
    background-color: #4285F4;
    color: #fff;
    border: none;
    border-radius: 15px;
    margin: 2px;
`
export const ButtonAgg = styled.button`
    width: 50%;
    text-align: center;
    background-color: #4263f4;
    color: #fff;
    border: none;
    border-radius: 15px;
    padding: 5px;
    margin-left: 25%;
`
export const ButtonCancel = styled.button`
    display: flex;
    align-items: center;
    background-color: #8F8E8E;
    color: #fff;
    border: none;
    border-radius: 15px;
    margin-right: 10px;
`