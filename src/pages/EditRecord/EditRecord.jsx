import { useLocation } from 'react-router-dom';
import FormCourse from "../../components/FormCourse/FormCourse"
import { ContendDiv, H2, TitleDiv } from './EditRecordStyle';

function EditRecord() {
    const location = useLocation();
    const rutaActual = location.pathname;
    return (
        <ContendDiv>
            <TitleDiv>
                <H2>
                    <svg width="40px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="##FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5H9C7.11438 5 6.17157 5 5.58579 5.58579C5 6.17157 5 7.11438 5 9V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V12M9.31899 12.6911L15.2486 6.82803C15.7216 6.36041 16.4744 6.33462 16.9782 6.76876C17.5331 7.24688 17.5723 8.09299 17.064 8.62034L11.2329 14.6702L9 15L9.31899 12.6911Z" stroke="#4D4C4C" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    {rutaActual.includes("/EditarCurso")? "Editar Curso" : "Añadir Curso"}
                </H2>
            </TitleDiv>
            <hr size="1px" color="#B8B9BB" />
            <FormCourse/>
        </ContendDiv>
    )
}

export default EditRecord