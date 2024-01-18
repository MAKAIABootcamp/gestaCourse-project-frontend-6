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