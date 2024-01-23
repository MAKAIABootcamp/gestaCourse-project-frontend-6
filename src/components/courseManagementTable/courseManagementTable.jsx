import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  deleteData,
  getData
} from '../../store/courses/courseActions';
import { DeleteButton, DivTable, DivTableTitle, EditButton, EvenRow, OddRow, StudentsButton, Table, TdAccion, ButtonsDiv, NextButton, NumPage, StyledTableCell, ShowMoreButton } from './courseManagementTableStyle';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const columns = [
  {
    Header: "Acción",
    accessor: "action",
    arrows: false,
  },
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
    Header: "",
    accessor: "",
    arrows: false,
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
];

function CourseManagementTable( { searchTerm }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [columnExpansion, setColumnExpansion] = useState({});


  const toggleExpand = (column) => {
    setColumnExpansion((prevExpansion) => ({
      ...prevExpansion,
      [column]: !prevExpansion[column] || false,
    }));
  };

  const dispatch = useDispatch();
  const { courses } = useSelector(store => store.course);
  useEffect(() => {
    dispatch(getData());
  }, []);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const filteredCourses = courses.filter((course) => {
    const nameMatch = course.name && course.name.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch;
  });

  const paginatedCourses = filteredCourses.slice(firstItemIndex, lastItemIndex);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = await Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo'
      });
      if (!confirmDelete.isConfirmed) {
        return;
      }
      dispatch(deleteData(id));
      dispatch(getData());
      await Swal.fire({
        title: 'Eliminado',
        text: 'El curso ha sido eliminado correctamente.',
        icon: 'success'
      });
      console.log('Campo eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el campo:', error);
      await Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error al intentar eliminar el curso.',
        icon: 'error'
      });
    }
  };
  const navigate = useNavigate();
  const handleGoToNextPage = (name, id) => {
    navigate(`${name}${id}`);
  };
  return (
    <>
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
            {paginatedCourses.map((course, index) =>
              index % 2 === 0 ? (
                <EvenRow key={index}>
                  <TdAccion width={'10%'} >
                      <EditButton onClick={() => handleGoToNextPage("/EditarCurso/",course.id)}>Editar</EditButton>
                      <StudentsButton onClick={() => handleGoToNextPage("/EstudiantesPorCurso/",course.id)}>Estudiantes</StudentsButton>
                      <DeleteButton onClick={() => handleDelete(course.id)}>Eliminar</DeleteButton>
                  </TdAccion>
                  <td width={"5%"}>{index + 1}</td>
                <td width={"15%"}>{course.name}</td>
                <StyledTableCell $expanded={columnExpansion[index]}>
                  {course.description}{" "}
                </StyledTableCell>
                <td>
                  <ShowMoreButton onClick={() => toggleExpand(index)}>
                    {columnExpansion[index] ? "Mostrar menos" : "Mostrar más"}
                  </ShowMoreButton>
                </td>
                  <td>{course.category}</td>
                  <td>{course.intensity}</td>
                  <td>{course.dates.date_init}</td>
                  <td>{course.dates.date_end}</td>
                  <td>{course.entity}</td>
                  <td>{course.cost}</td>
                </EvenRow>
              ) : (
                <OddRow key={index}>
                  <TdAccion >
                      <EditButton onClick={() => handleGoToNextPage("/EditarCurso/",course.id)}>Editar</EditButton>
                      <StudentsButton onClick={() => handleGoToNextPage("/EstudiantesPorCurso/",course.id)}>Estudiantes</StudentsButton>
                      <DeleteButton onClick={() => handleDelete(course.id)}>Eliminar</DeleteButton>
                  </TdAccion>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <StyledTableCell expanded={columnExpansion[index]}>
                  {course.description}{" "}
                </StyledTableCell>
                <td>
                  <ShowMoreButton onClick={() => toggleExpand(index)}>
                    {columnExpansion[index] ? "Mostrar menos" : "Mostrar más"}
                  </ShowMoreButton>
                </td>
                  <td>{course.category}</td>
                  <td>{course.intensity}</td>
                  <td>{course.dates.date_init}</td>
                  <td>{course.dates.date_end}</td>
                  <td>{course.entity}</td>
                  <td>{course.cost}</td>
                </OddRow>
              )
            )}
          </tbody>
        </Table>
      </DivTable>
      <hr size="2px" color="#B8B9BB" />
      <ButtonsDiv>
        <NextButton
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >Atrás</NextButton>
        <NumPage>{currentPage}</NumPage>
        <NextButton
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(prev + 1, Math.ceil(courses.length / itemsPerPage))
          )
        }
        >Siguiente</NextButton>
      </ButtonsDiv>
    </>
  );
}

export default CourseManagementTable;
