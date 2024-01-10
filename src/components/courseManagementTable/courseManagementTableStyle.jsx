import styled from "styled-components";

export const DivTable = styled.div`
  width: 100%;
  overflow: auto;
  
`
export const DivTableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;
export const EditButton = styled.button`
  color: #fff;
  background-color: #34a853;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;
export const DeleteButton = styled.button`
  color: #fff;
  background-color: #c50b0a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;
export const StudentsButton = styled.button`
  color: #fff;
  background-color: #10a4d1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

export const Table = styled.table`
  width: 120%;
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
  padding: 0;
`;