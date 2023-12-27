import styled from "styled-components"

const ContendDiv = styled.div`
    display: flex;
    margin: 0;
    width: 100%;
    flex-direction: row;
    color: #04153B;
    text-color: #04153B;
    font-family: 'DM Sans', sans-serif;

    @media screen and (max-width: 767px) {
        /* Estilos para dispositivos móviles */
        flex-direction: column;
        
      }
      
`
const Divsecundary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

`
const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px
`
const H3 = styled.h3`
`

const Input = styled.input`
    border: none;
    border-radius: 15px;
    background-color: #ECECEC;
    padding: 10px;
    width: 90%;
    color: #4D4C4C;
    outline: none;
`

const InputFile = styled.input`
    width: 90%;
    background-color: #ECECEC;
    border-radius: 15px;
    color: #4D4C4C;
    &::file-selector-button{
        margin-right: 20px;
        border: none;
        background: #D9D9D9;
        padding: 10px 20px;
        border-radius: 10px;
        color: #4D4C4C;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }
`
const Select = styled.select`
    width: 55%;
    border: none;
    border-radius: 15px;
    padding: 10px;
    background-color: #ECECEC;
    color: #4D4C4C;
    outline: none;
`
const DivButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`
const ButtonSave = styled.button`
    display: flex;
    align-items: center;
    background-color: #4285F4;
    color: #fff;
    border: none;
    border-radius: 15px;
    margin: 2px;
`
const ButtonCancel = styled.button`
    display: flex;
    align-items: center;
    background-color: #8F8E8E;
    color: #fff;
    border: none;
    border-radius: 15px;
    margin-right: 10px;
`

function FormCourse() {
    return (
        <div>
            <form action="">
                <ContendDiv>
                    <Divsecundary>
                        <Div>
                            <H3>Nombre del Curso</H3>
                            <Input type="text" name="nombre" id="nombre" placeholder="Tu respuesta" />
                        </Div>
                        <Div>
                            <h3>Descripción</h3>
                            <Input type="text" name="descripcion" id="descripcion" />
                        </Div>
                        <Div>
                            <h3>Tipo de pago</h3>
                            <Select name="tipoPago" id="tipoPago">
                                <option value="noPago"> No Pago</option>
                                <option value="pago"> Pago</option>
                            </Select>
                        </Div>
                        <Div>
                            <h3>Unidad académica</h3>
                            <Input type="text" name="unidadAcademica" id="unidadAcademica" />
                        </Div>
                        <Div>
                            <h3>Fecha de inicio</h3>
                            <Input type="date" name="fechaInicio" id="fechaInicio" />
                        </Div>
                        <Div>
                            <h3>Resolucion</h3>
                            <Input type="text" name="resolucion" id="resolucion" />
                        </Div>
                        <Div>
                            <h3>Intensidad</h3>
                            <Input type="text" name="intensidad" id="intensidad" />
                        </Div>
                        <Div>
                            <h3>Limite de cupos</h3>
                            <Input type="number" name="limiteCupos" id="limiteCupos" />
                        </Div>
                    </Divsecundary>
                    <Divsecundary>
                        <Div>
                            <h3>Seleciona una Imagen</h3>
                            <InputFile type="file" name="imagen" id="imagen"  />
                        </Div>
                        <Div>
                            <h3>Poblacion Objetivo</h3>
                            <Input type="text" name="poblacion" placeholder="Poblacion objetivo" />
                        </Div>
                        <Div>
                            <h3>Categoria</h3>
                            <Select name="categoria" id="categoria">
                                <option value="categoria">Categoria</option>
                                <option value="categoria2">Categoria2</option>
                                <option value="categoria3">Categoria3</option>
                            </Select>
                        </Div>
                        <Div>
                            <h3>Costo de inversion</h3>
                            <Input type="text" name="costo" id="costo" />
                        </Div>
                        <Div>
                            <h3>Fecha de fin</h3>
                            <Input type="date" name="fechaFin" id="fechaFin" />
                        </Div>
                        <Div>
                            <h3>Tipo de curso</h3>
                            <Select name="tipoCurso" id="tipoCurso">
                                <option value="tipoCurso">Tipo de curso</option>
                                <option value="tipoCurso2">Tipo de curso2</option>
                                <option value="tipoCurso3">Tipo de curso3</option>
                            </Select>
                        </Div>
                        <Div>
                            <h3>Fecha de cierre de curso</h3>
                            <Input type="date" name="fechaCierre" id="fechaCierre" />
                        </Div>
                        <Div>
                            <h3>Docente</h3>
                            <Input type="text" name="docente" id="docente" />
                        </Div>
                    </Divsecundary>
                </ContendDiv>
                <hr size="2px" color="#B8B9BB" />
                <DivButtons>
                    <ButtonCancel>Cancelar</ButtonCancel>
                    <ButtonSave><svg width="20px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="##FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5H9C7.11438 5 6.17157 5 5.58579 5.58579C5 6.17157 5 7.11438 5 9V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V12M9.31899 12.6911L15.2486 6.82803C15.7216 6.36041 16.4744 6.33462 16.9782 6.76876C17.5331 7.24688 17.5723 8.09299 17.064 8.62034L11.2329 14.6702L9 15L9.31899 12.6911Z" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> Guardar</ButtonSave>
                </DivButtons>
            </form>
        </div>
    )
}

export default FormCourse