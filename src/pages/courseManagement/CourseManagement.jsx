import CourseManagementTable from "../../components/courseManagementTable/courseManagementTable";
import styled from "styled-components";

const  ContendDiv = styled.div`
    padding: 2%;
    font-family: 'DM Sans', sans-serif;
`
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
    cursor: pointer;
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
    width: 100%;
    justify-content: center;
    align-items: center;
    button{
        margin: 10px;
    }
`
const NextButton = styled.button`
    color: #04153B;
    background-color: #ECECEC;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
`
const NumPage = styled.button`
    padding: 15px;
    border-radius: 5px;
    background-color: #04153B;
    color: #fff;
    border: none;
`
function CourseManagement() {
  return (
    <ContendDiv>
      <div>
        <TitleDiv>
            <h2>Gestión de Cursos</h2>
            <AddButton>+ Añadir</AddButton>
        </TitleDiv>
        <hr size="2px" color="#B8B9BB" />
        <SearchDiv>
          <p>Buscar</p>
          <input type="text" name="" id="" />
        </SearchDiv>
        <CourseManagementTable />
      </div>
      <hr size="2px" color="#B8B9BB" />
      <ButtonsDiv>
        <NextButton>Atrás</NextButton>
        <NumPage>1</NumPage>
        <NextButton>Siguiente</NextButton>
      </ButtonsDiv>
    </ContendDiv>
  );
}

export default CourseManagement;
