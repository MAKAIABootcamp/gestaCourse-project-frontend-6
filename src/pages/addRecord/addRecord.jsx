import styled from "styled-components"


const ContendDiv = styled.div`
    width: 90%;
    margin: 3%;
`

const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    color: #3B4848;
`
const H2 = styled.h2`
    display: flex;
    align-items: center;
    svg {
        margin-right: 10px;
    }
`
import FormCourse from "../../components/FormCourse/FormCourse"
function AddRecord() {
  return (
    <ContendDiv>
        <TitleDiv>
            <H2><svg width="40px" height="64px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="#4285F4"  stroke="#4285F4" strokeWidth="0.00016"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.544"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path> </g></svg>Añadir Curso</H2>
        </TitleDiv>
        <hr size="1px" color="#B8B9BB" />
        <FormCourse/>
    </ContendDiv>
  )
}

export default AddRecord