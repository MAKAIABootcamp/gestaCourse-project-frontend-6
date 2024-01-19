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
    font-family: 'DM Sans', sans-serif;
    font-size: 100%;
    background-color: #2a559b;
    border: 3px solid #2a559b;
    border-radius: 15px;
    padding: 1% 2% 1% 2%;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        font-weight: 600;
        color: #2a559b;
        transition: background-color 0.3s ease;
    }
`
export const SearchDiv = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    color: #282829;
    margin-top: 1%;
    margin-bottom: 1%;
    input{
        border-radius: 20px;
        padding: 1% 2% 1% 2%;
        background-color: #ECECEC;
        border: none;
    }
    p{
        margin: 10px;
    }
`