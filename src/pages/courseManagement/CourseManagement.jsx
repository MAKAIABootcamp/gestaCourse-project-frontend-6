import CourseManagementTable from "../../components/courseManagementTable/courseManagementTable";
import { AddButton, ContendDiv, SearchDiv, TitleDiv } from "./CourseManagementStyle";
import { useNavigate } from 'react-router-dom';

function CourseManagement() {
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
          <input type="text" name="" id="" />
        </SearchDiv>
        <CourseManagementTable />
      </div>
    </ContendDiv>
  );
}

export default CourseManagement;
