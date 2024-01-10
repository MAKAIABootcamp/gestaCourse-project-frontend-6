import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  createData,
  deleteData,
  getData,
  updateData,
} from '../../store/courses/courseActions';
import { DeleteButton, DivTable, DivTableTitle, EditButton, EvenRow, OddRow, StudentsButton, Table, TdAccion } from './courseManagementTableStyle';


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
      Header: "Entidad",
      accessor: "entity",
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
  const dispatch = useDispatch();
  const { courses } = useSelector(store => store.course);
  useEffect(() => {
    dispatch(getData());
  }, []);
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
          {courses.map((course, index) =>
            index % 2 === 0 ? (
              <EvenRow key={index}>
                <td width={'5%'} >{index + 1}</td>
                <td width={'15%'}>{course.name}</td>
                <td width={'30%'}>{course.description}</td>
                <td>{course.category}</td>
                <td>{course.intensity}</td>
                <td>{course.dates.date_init}</td>
                <td>{course.dates.date_end}</td>
                <td>{course.entity}</td>
                <td>{course.cost}</td>
                <TdAccion >
                    <EditButton>Editar</EditButton>
                </TdAccion>
                <TdAccion>
                    <DeleteButton>Eliminar</DeleteButton>
                </TdAccion>
                <TdAccion>
                    <StudentsButton>Estudiantes</StudentsButton>
                </TdAccion>
              </EvenRow>
            ) : (
              <OddRow key={index}>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>{course.category}</td>
                <td>{course.intensity}</td>
                <td>{course.dates.date_init}</td>
                <td>{course.dates.date_end}</td>
                <td>{course.entity}</td>
                <td>{course.cost}</td>
                <TdAccion >
                    <EditButton>Editar</EditButton>
                </TdAccion>
                <TdAccion>
                    <DeleteButton>Eliminar</DeleteButton>
                </TdAccion>
                <TdAccion>
                    <StudentsButton>Estudiantes</StudentsButton>
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
