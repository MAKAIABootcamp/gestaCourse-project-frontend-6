import styled from "styled-components";

export const Students = styled.div`
    padding: 2%;
    font-family: 'DM Sans', sans-serif;
    h2{
        font-weight: 900;
    }
`

export const CardsContainer = styled.div`
    margin-top: 2%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap !important;
`

export const CardStudent = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid;
    border-color: linear-gradient(to right, #06153B, #860F1B);;
    border-radius: 25px;
    width: 40% !important;
    padding: 2%;
    margin-bottom: 2%;
    @media only screen and (max-width: 767px) {
        width: 100% !important;
    }
    label{
        font-weight: 900;
    }
    p{
        word-wrap: break-word;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        select{
            width: 40% !important;
            flex: none !important;
        }
    }
`

export const ButtonChange = styled.button`
    width: 40%;
    font-family: 'DM Sans', sans-serif;
    font-size: 100%;
    color: #fff;
    background-color: #24753a;
    border: 2px solid #24753a;
    border-radius: 5px;
    padding: 0.5rem;
    &:hover{
        cursor: pointer;
        background-color: #fff;
        color: #24753a;
        transition: background-color 0.3s ease;
    }
`;