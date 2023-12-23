import styled from 'styled-components';

export const ContainerArticle =  styled.article`
    font-family: 'DM Sans', sans-serif;
    h1{
        color: #04153B;
        text-align: center;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const ContainerData= styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export const DivLabelAndInput= styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1%;
    label {
        display: flex;
        color: #04153B;
        font-weight: 500;
        margin-bottom: 1%;
        p{
            padding-left: 2%;
            color: #C50B0A;
        }
    }
    p{
        color: #8F8E8E;
        margin: 0;
    }
    input{
        border-radius: 25px;
        border: none;
        background-color: #ECECEC;
        padding: 3%;
        color: #4D4C4C;
    }
    select{
        background-image: url('../../../public/arrow.png');
        background-repeat: no-repeat;
        background-position: 90% center;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        border-radius: 25px;
        border: none;
        background-color: #ececec;
        padding: 3%;
        color: #4d4c4c;
        background-size: 4%;
    }
    select::-ms-expand {
        display: none;
    }
`;
export const ButtonInscription= styled.button`
    margin-top: 2%;
    margin-bottom: 2%;
    width: 40%;
    background-color: #04153B;
    color: #FFFFFF;
    font-family: 'DM Sans', sans-serif;
    font-size: 100%;
    border-radius: 25px;
    border: none;
    padding-top: 1%;
    padding-bottom: 1%;
    &:hover{
        cursor: pointer;
    }
`;