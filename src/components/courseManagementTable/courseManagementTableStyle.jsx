import styled from "styled-components";

export const DivTable = styled.div`
  width: 100%;
  overflow: auto;
  
`
export const ButtonsDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    button{
        margin: 10px;
    }
`

export const NextButton = styled.button`
    color: #04153B;
    font-family: 'DM Sans', sans-serif;
    background-color: #ECECEC;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    &:hover{
      background-color: #04153B;
      color: #ECECEC;
      transition: background-color 0.3s ease;
    }
`
export const NumPage = styled.button`
    font-family: 'DM Sans', sans-serif;
    padding: 15px;
    border-radius: 5px;
    background-color: #04153B;
    color: #fff;
    border: none;
`

export const DivTableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;
export const EditButton = styled.button`
  font-family: 'DM Sans', sans-serif;
  font-size: 100%;
  color: #fff;
  background-color: #24753a;
  border: 2px solid #24753a;
  border-radius: 5px;
  width: 80%;
  padding: 0.5rem;
  margin-bottom: 20%;
  &:hover{
    cursor: pointer;
    background-color: #fff;
    color: #24753a;
    transition: background-color 0.3s ease;
  }
`;
export const DeleteButton = styled.button`
  font-family: 'DM Sans', sans-serif;
  font-size: 100%;
  color: #fff;
  background-color: #860F1B;
  border: 2px solid #860F1B;
  border-radius: 5px;
  width: 80%;
  padding: 0.5rem;
  &:hover{
    cursor: pointer;
    background-color: #fff;
    color: #860F1B;
    transition: background-color 0.3s ease;
  }
`;
export const StudentsButton = styled.button`
  font-family: 'DM Sans', sans-serif;
  font-size: 100%;
  color: #fff;
  background-color: #06153B;
  border: 2px solid #06153B;
  border-radius: 5px;
  width: 80%;
  padding: 0.5rem;
  margin-bottom: 20%;
  word-wrap: break-word;
  &:hover{
    cursor: pointer;
    background-color: #fff;
    color: #06153B;
    transition: background-color 0.3s ease;
  }
`;

export const Table = styled.table`
  width: 100%;
  thead {
    tr{
      text-align: center;
      color: #3B4848;
    }
  }
  tbody {
    tr,th,td {
      height: 100%;
      text-align: center;
      justify-content: center;
      color: #8F8E8E;
      border: none;
    }
  }
`;

// Define los estilos para filas pares
export const EvenRow = styled.tr`
`;

// Define los estilos para filas impares
export const OddRow = styled.tr`
  td{
    text-align: center;
    background-color:#ECECEC;
  }
`;

export const TdAccion = styled.td`
  border: none;
  padding-top: 1%;
  padding-bottom: 1%;
`;

// export const StyledTableCell = styled.td`
//   width: 25%;
//   padding: 8px;
//   white-space: ${({ $expanded }) => ($expanded ? ' normal' : ' nowrap')};;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   max-width: ${({ $expanded }) => ($expanded ? 'none' : '200px')};
//   :hover{
//     cursor: pointer;
//   }
// `;

// export const ShowMoreButton = styled.button`
//     background: none;
//     border: none;
//     cursor: pointer;
// `;