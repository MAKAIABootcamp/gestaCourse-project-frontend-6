import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonCancel, ButtonSave, ContendDiv,ButtonAgg, Div,DivInput, DivButtons, FormContent, H3, Input, InputFile, Select } from "./FormCourseStyle"
import { useForm } from 'react-hook-form';
import { createData } from '../../store/courses/courseActions';

function FormCourse() {
    const [horarios, setHorarios] = useState([]);
    const [nuevoHorario, setNuevoHorario] = useState({ day: '', init: '', end: '' });
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoHorario({ ...nuevoHorario, [name]: value });
    };
    const agregarHorario = (e) => {
        e.preventDefault(); 
        if (nuevoHorario.day && nuevoHorario.init && nuevoHorario.end) {
            setHorarios([...horarios, nuevoHorario]);
            setNuevoHorario({ day: '', init: '', end: '' });
        }
    };
    const { register, handleSubmit } = useForm();
    const handleRegister = async data => {
        data = {...data, 
        dates: {
            date_init: data.date_init,
            date_end: data.date_end,
            date_enrollment: data.date_enrollment
        },
        timetables: horarios}
        delete data.date_init; 
        delete data.date_end; 
        delete data.date_enrollment;
        dispatch(createData(data));
    };
    return (
            <FormContent onSubmit={handleSubmit(handleRegister)}>
                <ContendDiv>
                        <Div>
                            <H3>Nombre del Curso</H3>
                            <Input type="text" {...register('name')} placeholder="Tu respuesta" />
                        </Div>
                        <Div>
                            <h3>Descripción</h3>
                            <Input type="text" {...register('description')}/>
                        </Div>
                        <Div>
                            <h3>Tipo de pago</h3>
                            <Select {...register('type_pay')}>
                                <option value="Efectivo">Efectivo</option>
                                <option value="Transferencia PSE">Transferencia PSE</option>
                            </Select>
                        </Div>
                        <Div>
                            <h3>Unidad académica</h3>
                            <Input type="text" {...register('enitity')}/>
                        </Div>
                        <Div>
                            <h3>Fecha de inicio</h3>
                            <Input type="date" {...register('date_init')} />
                        </Div>
                        <Div>
                            <h3>Intensidad</h3>
                            <Input type="text" {...register('intensity')} />
                        </Div>
                        <Div>
                            <h3>Limite de cupos</h3>
                            <Input type="number" {...register('quotas')} />
                        </Div>
                        <Div>
                            <h2>Horarios</h2>
                            <DivInput>
                                <label htmlFor="day">Día de la Semana:</label>
                                <Input
                                    type="text"
                                    id="day"
                                    name="day"
                                    value={nuevoHorario.day}
                                    onChange={handleInputChange}
                                />
                            </DivInput>
                            <DivInput>
                                <label htmlFor="init">Hora inicio:</label>
                                <Input
                                    type="text"
                                    id="init"
                                    name="init"
                                    value={nuevoHorario.init}
                                    onChange={handleInputChange}
                                />
                            </DivInput>
                            <DivInput>
                                <label htmlFor="end">Hora fin:</label>
                                <Input
                                    type="text"
                                    id="end"
                                    name="end"
                                    value={nuevoHorario.end}
                                    onChange={handleInputChange}
                                />
                            </DivInput>
                            <ButtonAgg onClick={agregarHorario}>Agregar Horario</ButtonAgg>
                            <h3>Horarios Agregados:</h3>
                            <ul>
                                {horarios.map((horario, index) => (
                                    <li key={index}>
                                        Día: {horario.day}, Horario: {horario.init} - {horario.end}
                                    </li>
                                ))}
                            </ul>
                        </Div>
                        <Div>
                            <h3>Seleciona una Imagen</h3>
                            <InputFile type="file"   />
                        </Div>
                        <Div>
                            <h3>Poblacion Objetivo</h3>
                            <Input type="text" {...register('target_population')} />
                        </Div>
                        <Div>
                            <h3>Categoria</h3>
                            <Select {...register('category')}>
                                <option value="categoria">Categoria</option>
                                <option value="categoria2">Categoria2</option>
                                <option value="categoria3">Categoria3</option>
                            </Select>
                        </Div>
                        <Div>
                            <h3>Costo de inversion</h3>
                            <Input type="text" {...register('cost')} />
                        </Div>
                        <Div>
                            <h3>Fecha de fin</h3>
                            <Input type="date" {...register('date_end')} />
                        </Div>
                        <Div>
                            <h3>Tipo de curso</h3>
                            <Select {...register('type')}>
                                <option value="tipoCurso">Tipo de curso</option>
                                <option value="tipoCurso2">Tipo de curso2</option>
                                <option value="tipoCurso3">Tipo de curso3</option>
                            </Select>
                        </Div>
                        <Div>
                            <h3>Fecha de cierre de inscripciones</h3>
                            <Input type="date" {...register('date_enrollment')} />
                        </Div>
                        <Div>
                            <h3>Docente</h3>
                            <Input type="text" {...register('teacher')} />
                        </Div>
                </ContendDiv>
                <hr size="2px" color="#B8B9BB" />
                <DivButtons>
                    <ButtonCancel>Cancelar</ButtonCancel>
                    <ButtonSave>
                        <svg width="20px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="##FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5H9C7.11438 5 6.17157 5 5.58579 5.58579C5 6.17157 5 7.11438 5 9V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V12M9.31899 12.6911L15.2486 6.82803C15.7216 6.36041 16.4744 6.33462 16.9782 6.76876C17.5331 7.24688 17.5723 8.09299 17.064 8.62034L11.2329 14.6702L9 15L9.31899 12.6911Z" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> 
                        Guardar
                    </ButtonSave>
                </DivButtons>
            </FormContent>
    )
}

export default FormCourse