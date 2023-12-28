import styled from 'styled-components';

export const ContainerRecu =  styled.div`
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    background-color: white !important;
    width: 100%;
    height: 100%;
    display: flex;
    div {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const DivRecu =  styled.div`
    h2 {
        color: #04153B;
        font-size: 200%;
        margin-bottom: 2%;
    }
    p {
        color: #8F8E8E;
        margin-bottom: 4%;
        font-size: 150%;
    }
    form {
        width: 70%;
        input{
            padding: 1%;
            padding-left: 2%;
            padding-right: 2%;
        }
        .btn{
            height: auto !important;
            padding: 3% !important;
        }
    }
`;


export const BackgroundColor =  styled.div`
    background: linear-gradient(-45deg, #45122b, #080511);
    div{
        width: 100%;
        text-align: center;
        p {
            width: 40%;
            font-size: 150%;
            color: #FFFFFF !important;
        }
    }
`;