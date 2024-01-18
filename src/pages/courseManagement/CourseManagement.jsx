import CourseManagementTable from "../../components/courseManagementTable/courseManagementTable";
import { AddButton, ContendDiv, SearchDiv, TitleDiv } from "./CourseManagementStyle";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CourseManagement() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const navigate = useNavigate();
  const handleGoToAddCourse = () => {
    navigate('/AñadirCurso');
  };
  return (
    <ContendDiv>
      <div>
        <TitleDiv>
            <h2>Gestión de Cursos</h2>
            <AddButton onClick={handleGoToAddCourse}>+ Añadir</AddButton>
        </TitleDiv>
        <hr size="2px" color="#B8B9BB" />
        <SearchDiv>
          <p>Buscar</p>
          <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          />
        </SearchDiv>
        <CourseManagementTable searchTerm={searchTerm} />
      </div>
    </ContendDiv>
  );
}

export default CourseManagement;
