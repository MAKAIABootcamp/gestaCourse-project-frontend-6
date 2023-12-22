import React, { useState } from 'react';
import { TableStyled, ArticleStyled, StateButtonStyled, PaginationStyled} from './StylesComponents'
import arrowPageInicial from '../../../public/hacia-atras.png'
import arrowPageBefore from '../../../public/arrow-izq.png'
import arrowPageAfter from '../../../public/arrow-der.png'
import arrowPageFinal from '../../../public/hacia-adelante.png'

function MyCourses() {
  const data = [
    { name: 'Diplomado en Medicina tradicional china con énfasis en sus técnicas de acupuntura, masaje, moxibustión y Qi gong.', year: 2015, state: 'Certificado' },
    { name: 'Congreso Colombiano de Arqueología 2022. CCA2022', year: 2014, state: 'Inscrito' },
    { name: 'Diplomado en Rehabilitación Vestibular, Una Mirada desde la Interdisciplinariedad', year: 2022, state: 'En Curso' },
    { name: 'Curso Introducción a la Programación con Python', year: 2019, state: 'Inscrito' },
    { name: 'Curso Desarrollo Web Full Stack', year: 2018, state: 'Certificado' },
    { name: 'Curso Desarrollo de Aplicaciones Móviles', year: 2020, state: 'En Curso' },
    { name: 'Curso Diseño y Desarrollo de Bases de Datos', year: 2017, state: 'Certificado' },
    { name: 'Curso Programación Orientada a Objetos con Java', year: 2016, state: 'Inscrito' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToFirstPage = () => paginate(1);
  const goToLastPage = () => paginate(totalPages);

  const goToPrevPage = () => paginate(currentPage - 1);
  const goToNextPage = () => paginate(currentPage + 1);

  return (
    <ArticleStyled>
      <h1>MIS CURSOS</h1>
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
              <td>{item.year}</td>
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
      <PaginationStyled>
        <button onClick={goToFirstPage}><img src={arrowPageInicial}/></button>
        <button onClick={goToPrevPage}><img src={arrowPageBefore}/></button>
        <span>{`${currentPage} de ${totalPages}`}</span>
        <button onClick={goToNextPage}><img src={arrowPageAfter}/></button>
        <button onClick={goToLastPage}><img src={arrowPageFinal}/></button>
      </PaginationStyled>
    </ArticleStyled>
  );
}

export default MyCourses