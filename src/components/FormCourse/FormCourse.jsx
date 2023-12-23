import styled from "styled-components"

const ContendDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
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
`
const H3 = styled.h3`
`

const Input = styled.input`
    border: none;
    border-radius: 15px;
    background-color: #ECECEC;
    padding: 10px;
    width: 50%;
`
const Select = styled.select`
    width: 55%;
    border: none;
    border-radius: 15px;
    padding: 10px;
    background-color: #ECECEC;
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
                            <Input type="file" name="imagen" id="imagen" />
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
                <hr size="2px" color="black" />
                <div>
                    <button>Cancelar</button>
                    <button>Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default FormCourse