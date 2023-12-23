import styled from 'styled-components';

export const ArticleStyled =  styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    h1{
        font-size: 200%;
        font-weight: 400;
    }
`;

export const ScrollStyled =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 600px) {
        display: block;
        width: 90%;
        overflow-x: scroll;
    }
`;

export const TableStyled =  styled.table`
    width: 80%;
    margin-bottom: 4%;
    margin-top: 2%;
    @media only screen and (max-width: 600px) {
        width: 150%;
    }
    th{
        color: #3B4848;
        border-bottom: 2px solid #B8B9BB;
        padding-bottom: 1%;
    }
    th:first-of-type{
        width: 60%;
        text-align: left;
    }
    th:last-of-type{
        width: 10%;
    }
    tbody{
        color: #8F8E8E;
    }
    td {
        padding-top: 2%;
        text-align: center;
    }
    td:first-of-type {
        padding-right: 5%;
        text-align: left;
    }
    tr:last-of-type {
        td{
            border-bottom: 2px solid #B8B9BB;
            padding-bottom: 2%;
        }
    }
`;
export const StateButtonStyled =  styled.td`
    button{
        width: 100%;
        font-family: 'DM Sans', sans-serif;
        border: none;
        border-radius: 25px;
        background-color: #C50B0A;
        color: #FFFFFF;
        &:hover{
            cursor: pointer;
        }
    }
`;
export const PaginationStyled =  styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    justify-content: space-around;
    @media only screen and (max-width: 600px) {
        width: 50%;
    }
    @media only screen and (max-width: 400px) {
        width: 80%;
    }
    button {
        border: none;
        border-radius: 50px;
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            padding: 5px;
            width: 100%;
        }
        &:hover{
            cursor: pointer;
        }
    }
`;
