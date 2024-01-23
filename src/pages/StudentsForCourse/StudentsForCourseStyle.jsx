import styled from "styled-components";

export const Students = styled.div`
    padding: 5%;
    font-family: 'DM Sans', sans-serif;
    width: 100%;
    h2{
        font-weight: 900;
    }
    div{
        width: auto;
        overflow-x: auto;
        table{
            width: 100%;
            font-size: 100%;
            th{
                padding: 2%;
            }
            td {
                padding: 2%;
                width: 100%;
                text-align: justify;
                white-space: nowrap;
                select{
                    font-size: 100%;
                    font-weight: 500;
                }
            }
        }
    }
    @media (max-width: 768px) {
      /* Estilos específicos para pantallas más pequeñas */
      /* Puedes ajustar según tus necesidades */
      padding: 2%;
      font-size: 80%;
   }
`

export const ButtonChange = styled.button`
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