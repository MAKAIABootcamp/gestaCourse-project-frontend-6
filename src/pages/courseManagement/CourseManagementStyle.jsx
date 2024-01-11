import styled from "styled-components";

export const  ContendDiv = styled.div`
    padding: 2%;
    font-family: 'DM Sans', sans-serif;
`
export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`
export const AddButton = styled.button`
    color: #fff;
    background-color: #4285F4;
    border-radius: 15px;
    border: none;
    padding: 10px;
    cursor: pointer;
`
export const SearchDiv = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    color: #282829;
    input{
        border-radius: 20px;
        background-color: #ECECEC;
        border: none;
    }
    p{
        margin: 10px;
    }
`
export const ButtonsDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    button{
        margin: 10px;
    }
`
export const NextButton = styled.button`
    color: #04153B;
    background-color: #ECECEC;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
`
export const NumPage = styled.button`
    padding: 15px;
    border-radius: 5px;
    background-color: #04153B;
    color: #fff;
    border: none;
`