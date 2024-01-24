import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  deleteData,
  getData
} from '../../store/courses/courseActions';
import { DeleteButton, DivTable, DivTableTitle, EditButton, EvenRow, OddRow, StudentsButton, Table, TdAccion, ButtonsDiv, NextButton, NumPage } from './courseManagementTableStyle';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

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
    Header: "Acción",
    accessor: "action",
  },
  // {
  //   Header: "Descripción",
  //   accessor: "description",
  // },
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
    Header: "Entidad",
    accessor: "entity",
  },
  {
    Header: "Costo",
    accessor: "cost",
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
                <th key={column.accessor}><DivTableTitle><p>{column.Header}</p></DivTableTitle></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedCourses.map((course, index) =>
              index % 2 === 0 ? (
                <EvenRow key={index}>
                  <td width={"5%"}>{index + 1}</td>
                  <td width={"15%"}>{course.name}</td>
                  <TdAccion width={'10%'} >
                      <EditButton onClick={() => handleGoToNextPage("/EditarCurso/",course.id)}>Editar</EditButton>
                      <StudentsButton onClick={() => handleGoToNextPage("/EstudiantesPorCurso/",course.id)}>Estudiantes</StudentsButton>
                      <DeleteButton onClick={() => handleDelete(course.id)}>Eliminar</DeleteButton>
                  </TdAccion>
                  {/* <StyledTableCell onClick={() => toggleExpand(index)} $expanded={columnExpansion[index]}>
                    {course.description}{" "}
                  </StyledTableCell> */}
                  <td>{course.category}</td>
                  <td>{course.intensity}</td>
                  <td>{course.dates.date_init}</td>
                  <td>{course.dates.date_end}</td>
                  <td>{course.entity}</td>
                  <td width={'15%'} >{course.cost}</td>
                </EvenRow>
              ) : (
                <OddRow key={index}>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <TdAccion >
                      <EditButton onClick={() => handleGoToNextPage("/EditarCurso/",course.id)}>Editar</EditButton>
                      <StudentsButton onClick={() => handleGoToNextPage("/EstudiantesPorCurso/",course.id)}>Estudiantes</StudentsButton>
                      <DeleteButton onClick={() => handleDelete(course.id)}>Eliminar</DeleteButton>
                  </TdAccion>
                  {/* <StyledTableCell onClick={() => toggleExpand(index)} $expanded={columnExpansion[index]}>
                    {course.description}{" "}
                  </StyledTableCell> */}
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
