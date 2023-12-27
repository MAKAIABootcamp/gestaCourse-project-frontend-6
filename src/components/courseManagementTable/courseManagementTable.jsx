import styled from "styled-components";
const DivTable = styled.div`
  width: 100%;
  overflow: auto;
  
`
const DivTableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;
const EditButton = styled.button`
  color: #fff;
  background-color: #34a853;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  color: #fff;
  background-color: #c50b0a;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 120%;
  thead {
    tr{
      text-align: center;
      color: #3B4848;
    }
  }
  tbody {
    tr,th,td {
      text-align: center;
      justify-content: center;
      color: #8F8E8E;
      border: none;
    }
  }
`;

// Define los estilos para filas pares
const EvenRow = styled.tr`

`;

// Define los estilos para filas impares
const OddRow = styled.tr`
  td{
    text-align: center;
    background-color:#ECECEC;
  }
`;

const TdAccion = styled.td`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

function CourseManagementTable() {
  const columns = [
    {
      Header: "No.",
      accessor: "No.",
      arrows: false,
    },
    {
      Header: "Nombre",
      accessor: "name",
      arrows: true,
    },
    {
      Header: "Descripción",
      accessor: "description",
      arrows: true,
    },
    {
      Header: "Categoría",
      accessor: "category",
      arrows: true,
    },
    {
      Header: "Intensidad",
      accessor: "intensity",
      arrows: true,
    },
    {
      Header: "Fecha Inicio",
      accessor: "startDate",
      arrows: true,
    },
    {
      Header: "Fecha Final",
      accessor: "endDate",
      arrows: true,
    },
    {
      Header: "Resolucion",
      accessor: "resolution",
      arrows: true,
    },
    {
      Header: "Costo",
      accessor: "cost",
      arrows: false,
    },
    {
      Header: "Acción",
      accessor: "action",
      arrows: false,
    },
  ];
  const data = [
    {
      numero: "1",
      nombre: "Diplomado en Rehabilitación Vestibular",
      descripcion:
        "El diplomado en Rehabilitación Vestibular es un programa de formación que busca desarrollar competencias en el profesional de la salud para la evaluación y tratamiento de pacientes con alteraciones vestibulares.",
      categoria: "Salud",
      intensidad: "120 horas",
      fechaInicio: "2021-09-01",
      fechaFinal: "2021-12-01",
      resolucion: "12345",
      costo: "200000",
      accion: "Editar",
    },
    {
      numero: "2",
      nombre:
        "Diplomado en Medicina tradicional china con énfasis en acupuntura",
      descripcion:
        "El diplomado en Medicina tradicional china con énfasis en acupuntura es un programa de formación que busca desarrollar competencias en el profesional de la salud para la evaluación y tratamiento de pacientes con alteraciones vestibulares.",
      categoria: "Salud",
      intensidad: "120 horas",
      fechaInicio: "2021-09-01",
      fechaFinal: "2021-12-01",
      resolucion: "12345",
      costo: "200000",
      accion: "Editar",
    },
    {
      numero: "1",
      nombre: "Diplomado en Rehabilitación Vestibular",
      descripcion:
        "El diplomado en Rehabilitación Vestibular es un programa de formación que busca desarrollar competencias en el profesional de la salud para la evaluación y tratamiento de pacientes con alteraciones vestibulares.",
      categoria: "Salud",
      intensidad: "120 horas",
      fechaInicio: "2021-09-01",
      fechaFinal: "2021-12-01",
      resolucion: "12345",
      costo: "200000",
      accion: "Editar",
    },
    {
      numero: "2",
      nombre:
        "Diplomado en Medicina tradicional china con énfasis en acupuntura",
      descripcion:
        "El diplomado en Medicina tradicional china con énfasis en acupuntura es un programa de formación que busca desarrollar competencias en el profesional de la salud para la evaluación y tratamiento de pacientes con alteraciones vestibulares.",
      categoria: "Salud",
      intensidad: "120 horas",
      fechaInicio: "2021-09-01",
      fechaFinal: "2021-12-01",
      resolucion: "12345",
      costo: "200000",
      accion: "Editar",
    },
  ];
  return (
    <DivTable >
      <Table >
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}><DivTableTitle>{ column.arrows ? <svg fill="#B8B9BB" width="24px" height="24px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#B8B9BB"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.512"></g><g id="SVGRepo_iconCarrier"> <path d="M119.39062,172.93848a8.00028,8.00028,0,0,1-1.73339,8.71875l-32,32a8.00181,8.00181,0,0,1-11.31446,0l-32-32A8.00065,8.00065,0,0,1,48,168H72V48a8,8,0,0,1,16,0V168h24A8,8,0,0,1,119.39062,172.93848Zm94.26661-98.59571-32-32a8.00122,8.00122,0,0,0-11.31446,0l-32,32A8.00065,8.00065,0,0,0,144,88h24V208a8,8,0,0,0,16,0V88h24a8.00066,8.00066,0,0,0,5.65723-13.65723Z"></path> </g></svg> : '' } <p>{column.Header}</p></DivTableTitle></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) =>
            index % 2 === 0 ? (
              <EvenRow key={index}>
                <td width={'5%'} >{row.numero}</td>
                <td width={'15%'}>{row.nombre}</td>
                <td width={'30%'}>{row.descripcion}</td>
                <td>{row.categoria}</td>
                <td>{row.intensidad}</td>
                <td>{row.fechaInicio}</td>
                <td>{row.fechaFinal}</td>
                <td>{row.resolucion}</td>
                <td>{row.costo}</td>
                <TdAccion >
                    <EditButton>Editar</EditButton>
                    <DeleteButton>Eliminar</DeleteButton>
                </TdAccion>
              </EvenRow>
            ) : (
              <OddRow key={index}>
                <td>{row.numero}</td>
                <td>{row.nombre}</td>
                <td>{row.descripcion}</td>
                <td>{row.categoria}</td>
                <td>{row.intensidad}</td>
                <td>{row.fechaInicio}</td>
                <td>{row.fechaFinal}</td>
                <td>{row.resolucion}</td>
                <td>{row.costo}</td>
                <TdAccion >
                    <EditButton>Editar</EditButton>
                    <DeleteButton>Eliminar</DeleteButton>
                </TdAccion>
              </OddRow>
            )
          )}
        </tbody>
      </Table>
    </DivTable>
  );
}

export default CourseManagementTable;
