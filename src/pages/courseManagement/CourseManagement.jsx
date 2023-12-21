import CourseManagementTable from "../../components/courseManagementTable/courseManagementTable";
import styled from "styled-components";

const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`
const AddButton = styled.button`
    color: #fff;
    background-color: #4285F4;
    border-radius: 15px;
    border: none;
    padding: 10px;
`
const SearchDiv = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    color: #282829;
    input{
        border-radius: 20px;
        background-color: #ECECEC;
        border: none;
    }
    p{
        margin: 10px;
    }
`
const ButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
`
const NextButton = styled.button`
    color: #04153B;
    background-color: #ECECEC;
    border: none;
    border-radius: 5px;
`

function CourseManagement() {
  return (
    <div>
      <div>
        <TitleDiv>
            <h2>Gestión de Cursos</h2>
            <AddButton>+ Añadir</AddButton>
        </TitleDiv>
        <hr size="2px" color="black" />
        <SearchDiv>
          <p>Buscar</p>
          <input type="text" name="" id="" />
        </SearchDiv>
        <CourseManagementTable />
      </div>
      <hr size="2px" color="black" />
      <ButtonsDiv>
        <NextButton>Atrás</NextButton>
        <p>1</p>
        <NextButton>Siguiente</NextButton>
      </ButtonsDiv>
    </div>
  );
}

export default CourseManagement;
