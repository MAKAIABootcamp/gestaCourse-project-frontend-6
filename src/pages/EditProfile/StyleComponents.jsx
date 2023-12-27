import styled from 'styled-components';

export const PhotoContainer =  styled.div`
    width: 90%;
    @media only screen and (max-width: 600px) {
        width: 80%;
    }
    div{
        margin-top: 1%;
        display: flex;
        align-items: center;
        img{
            width: 10%;
            @media only screen and (max-width: 600px) {
                width: 30%;
            }
        }
        input{
            display: none;
        }
        button{
            margin-left: 3%;
            border: none;
            padding: 1%;
            font-family: 'DM Sans', sans-serif;
            border-radius: 25px;
            background-color: #ECECEC;
            color: #4D4C4C;
            font-size: 110%;
            @media only screen and (max-width: 600px) {
                padding: 2%;
                font-size: 90%;
            }
            &:hover{
                cursor: pointer;
            }
        }
    }
`;
