import styled from 'styled-components';

export const PhotoContainer =  styled.div`
    width: 90%;
    div{
        margin-top: 1%;
        display: flex;
        align-items: center;
        img{
            width: 10%;
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
            &:hover{
                cursor: pointer;
            }
        }
    }
`;
