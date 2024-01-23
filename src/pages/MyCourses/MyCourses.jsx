import { useState } from 'react';
import { TableStyled, ArticleStyled, StateButtonStyled, PaginationStyled, ScrollStyled} from './StylesComponents'
import arrowPageInicial from '../../assets/hacia-atras.png'
import arrowPageBefore from '../../assets/arrow-izq.png'
import arrowPageAfter from '../../assets/arrow-der.png'
import arrowPageFinal from '../../assets/hacia-adelante.png'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getData} from '../../store/courses/courseActions';
import { getDataEnrollment } from '../../store/enrollment/enrollmentActions';
function MyCourses() {
  const {courses} = useSelector(store => store.course);
  const {enrollments} = useSelector(store => store.enrrollment);
  const {user} = useSelector(store => store.user);
  const dispatch = useDispatch();

  const dataCourses = enrollments.filter(item => item.Id_student === user.id).map(item => {
    const cursoEncontrado = courses.find(course => course.id === item.Id_course);
    return {
        Id_student: item.Id_student,
        date_enrollment: item.date_enrollment,
        state: item.state,
        ...cursoEncontrado
    }
  })

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataCourses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(dataCourses.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToFirstPage = () => paginate(1);
  const goToLastPage = () => paginate(totalPages);

  const goToPrevPage = () => paginate(currentPage - 1);
  const goToNextPage = () => paginate(currentPage + 1);

  useEffect(() => {
    dispatch(getData())
    dispatch(getDataEnrollment())
  }, []);

  return (
    <ArticleStyled>
      <h1>MIS CURSOS</h1>
      <ScrollStyled>
        <TableStyled>
          <thead>
            <tr>
              <th>Nombre del Curso</th>
              <th>Año</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.dates.date_end}</td>
                <td>{item.state}</td>
                {
                  item.state === "Inscrito"?
                  <StateButtonStyled>
                    <button>Cancelar Solicitud</button>
                  </StateButtonStyled>: 
                  <td></td>
                }

              </tr>
            ))}
          </tbody>
        </TableStyled>
      </ScrollStyled>
      <PaginationStyled>
        <button onClick={goToFirstPage}><img src={arrowPageInicial}/></button>
        <button onClick={goToPrevPage}><img src={arrowPageBefore}/></button>
        <span>{`${currentPage} de ${totalPages === 0 ? 1 : totalPages}`}</span>
        <button onClick={goToNextPage}><img src={arrowPageAfter}/></button>
        <button onClick={goToLastPage}><img src={arrowPageFinal}/></button>
      </PaginationStyled>
    </ArticleStyled>
  );
}

export default MyCourses