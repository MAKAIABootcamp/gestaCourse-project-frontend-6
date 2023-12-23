import styled from "styled-components"


const ContendDiv = styled.div`
    width: 90%;
    margin: 3%;
`

const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    color: #3B4848;
`
const AddButton = styled.button`
    color: #fff;
    background-color: #4285F4;
    border-radius: 15px;
    border: none;
    padding: 10px;
`
import FormCourse from "../../components/FormCourse/FormCourse"
function AddRecord() {
  return (
    <ContendDiv>
        <TitleDiv>
            <h2>Gestión de Cursos</h2>
            <AddButton>+ Añadir</AddButton>
        </TitleDiv>
        <hr size="2px" color="black" />
        <FormCourse/>
    </ContendDiv>
  )
}

export default AddRecord