import styled from "styled-components"

export const ContendDiv = styled.div`
    width: 90%;
    margin: 3%;
    font-family: 'DM Sans', sans-serif;
`

export const ButtonBack = styled.button`
    display: flex;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    background-color: #2a559b;
    border: 2px solid #2a559b;
    font-size: 100%;
    color: #fff;
    border-radius: 15px;
    padding: 1% 1% 1% 1%;
    margin-right: 5%;
    transition: transform 0.3s ease; 
    &:hover{
        cursor: pointer;
        background-color: #fff;
        color: #2a559b;
        transform: scale(1.1);
    }
`

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    color: #3B4848;
`
export const H2 = styled.h2`
    display: flex;
    align-items: center;
    svg {
        margin-right: 10px;
    }
`