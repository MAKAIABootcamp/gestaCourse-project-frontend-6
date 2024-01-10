import { ButtonCancel, ButtonSave, ContendDiv, Div, DivButtons, Divsecundary, H3, Input, InputFile, Select } from "./FormCourseStyle"

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