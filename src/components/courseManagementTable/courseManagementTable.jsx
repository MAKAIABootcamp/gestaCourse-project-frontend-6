import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const EditButton = styled.button`
  color: #fff;
  background-color: #34a853;
`;
const DeleteButton = styled.button`
  color: #fff;
  background-color: #c50b0a;
`;
const TdButtons = styled.td`
  display: flex;
  width: 100%;
  height: 100%;
  background-color:#ECECEC;
`;
const Table = styled.table`
  border-collapse: collapse;
  thead {
    tr{
      color: #3B4848;
    }
  }
  tbody {
    tr,th,td {
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
  background-color:#ECECEC;
  td{
    background-color:#ECECEC;
  }
`;
function CourseManagementTable() {
  const columns = [
    {
      Header: "No.",
      accessor: "No.",
    },
    {
      Header: "Nombre",
      accessor: "name",
    },
    {
      Header: "Descripción",
      accessor: "description",
    },
    {
      Header: "Categoría",
      accessor: "category",
    },
    {
      Header: "Intensidad",
      accessor: "intensity",
    },
    {
      Header: "Fecha Inicio",
      accessor: "startDate",
    },
    {
      Header: "Fecha Final",
      accessor: "endDate",
    },
    {
      Header: "Resolucion",
      accessor: "resolution",
    },
    {
      Header: "Costo",
      accessor: "cost",
    },
    {
      Header: "Acción",
      accessor: "action",
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
    <div >
      <Table >
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) =>
            index % 2 === 0 ? (
              <EvenRow key={index}>
                <td>{row.numero}</td>
                <td>{row.nombre}</td>
                <td>{row.descripcion}</td>
                <td>{row.categoria}</td>
                <td>{row.intensidad}</td>
                <td>{row.fechaInicio}</td>
                <td>{row.fechaFinal}</td>
                <td>{row.resolucion}</td>
                <td>{row.costo}</td>
                <TdButtons>
                  <EditButton>Editar</EditButton>
                  <DeleteButton>Eliminar</DeleteButton>
                </TdButtons>
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
                <TdButtons>
                  <EditButton>Editar</EditButton>
                  <DeleteButton>Eliminar</DeleteButton>
                </TdButtons>
              </OddRow>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default CourseManagementTable;
