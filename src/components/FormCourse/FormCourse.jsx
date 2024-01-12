import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCancel, ButtonDel, UlHorAgg, ButtonSave, ContendDiv,ButtonAgg, Div,DivInput, DivButtons, FormContent, H3, Input, InputFile, Select } from "./FormCourseStyle"
import { useForm } from 'react-hook-form';
import { createData, updateData } from '../../store/courses/courseActions';
import { useNavigate, useLocation, useParams} from 'react-router-dom';
import { searchCourseById } from '../../store/courses/courseSlice';

function FormCourse() {
    const navigate = useNavigate();
    const location = useLocation();
    const rutaActual = location.pathname;
    const { id } = useParams();
    const [horarios, setHorarios] = useState([]);
    const [nuevoHorario, setNuevoHorario] = useState({ day: '', init: '', end: '' });
    const dispatch = useDispatch();
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/gestionCursos");
    }
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
    const deleteHorario = (e, index) => {
        e.preventDefault();
        const nuevaMatriz = horarios.filter((_, i) => i !== index);
        setHorarios(nuevaMatriz)
    }
    const { register, handleSubmit, setValue} = useForm();
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
        if(rutaActual.includes('/EditarCurso')){
            data = {... data, id: id}
            dispatch(updateData(data));
            navigate("/gestionCursos");
        }else{
            dispatch(createData(data));
            navigate("/gestionCursos");
        }
    };
    const searchedCourse = useSelector((state) => state.course.searchedCourse);
    useEffect(() => {
        if(rutaActual.includes('/EditarCurso')){
            dispatch(searchCourseById(id));
            console.log("searchedCourse",searchedCourse);
        }
    }, []);
    useEffect(() => {
        if(rutaActual.includes('/EditarCurso')){
            if (searchedCourse && searchedCourse.timetables) {
                setHorarios(searchedCourse.timetables);
                setValue("name",searchedCourse.name);
                setValue("description",searchedCourse.description);
                setValue("type_pay",searchedCourse.type_pay);
                setValue("entity",searchedCourse.entity);
                setValue("date_init",searchedCourse.dates.date_init);
                setValue("intensity",searchedCourse.intensity);
                setValue("target_population",searchedCourse.target_population);
                setValue("category",searchedCourse.category);
                setValue("quotas",searchedCourse.quotas);
                setValue("cost",searchedCourse.cost);
                setValue("date_end",searchedCourse.dates.date_end);
                setValue("modality",searchedCourse.modality);
                setValue("date_enrollment",searchedCourse.dates.date_enrollment);
                setValue("teacher",searchedCourse.teacher);
            }
        }
    }, [searchedCourse]);
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
                            <Input type="text" {...register('entity')}/>
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
                                <Select
                                id="day"
                                name="day"
                                value={nuevoHorario.day}
                                onChange={handleInputChange}
                                >
                                    <option value=""> Seleccione un dia </option>
                                    <option value="Lunes">Lunes</option>
                                    <option value="Martes">Martes</option>
                                    <option value="Miercoles">Miercoles</option>
                                    <option value="Jueves">Jueves</option>
                                    <option value="Viernes">Viernes</option>
                                    <option value="Sabado">Sabado</option>
                                </Select>
                            </DivInput>
                            <DivInput>
                                <label htmlFor="init">Hora inicio:</label>
                                <Input
                                    type="time"
                                    id="init"
                                    name="init"
                                    value={nuevoHorario.init}
                                    onChange={handleInputChange}
                                />
                            </DivInput>
                            <DivInput>
                                <label htmlFor="end">Hora fin:</label>
                                <Input
                                    type="time"
                                    id="end"
                                    name="end"
                                    value={nuevoHorario.end}
                                    onChange={handleInputChange}
                                />
                            </DivInput>
                            <ButtonAgg onClick={agregarHorario}>Agregar Horario</ButtonAgg>
                            {
                                horarios.length > 0 ? <h3>Horarios Agregados:</h3> : <></>
                            }
                            <UlHorAgg>
                                {horarios.map((horario, index) => (
                                        <li key={index}>
                                            <p>Día: {horario.day}, Horario: {horario.init} - {horario.end}</p>
                                            <ButtonDel onClick={(e) => {deleteHorario(e, index)}}>X</ButtonDel>
                                        </li>
                                ))}
                            </UlHorAgg>
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
                                <option value="">Seleccione la categoria</option>
                                <option value="categoria">Categoria</option>
                                <option value="categoria2">Categoria2</option>
                                <option value="categoria3">Categoria3</option>
                                <option value="Programacion">Programación</option>
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
                            <h3>Modalidad del Curso</h3>
                            <Select {...register('modality')}>
                                <option value="">Seleccione la modalidad</option>
                                <option value="Virtual">Virtual</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Hibrido">Hibrido</option>
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
                    <ButtonCancel onClick={(e) => {handleCancel(e)}}>Cancelar</ButtonCancel>
                    <ButtonSave type='submit'>
                        <svg width="20px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="##FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5H9C7.11438 5 6.17157 5 5.58579 5.58579C5 6.17157 5 7.11438 5 9V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V12M9.31899 12.6911L15.2486 6.82803C15.7216 6.36041 16.4744 6.33462 16.9782 6.76876C17.5331 7.24688 17.5723 8.09299 17.064 8.62034L11.2329 14.6702L9 15L9.31899 12.6911Z" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> 
                        Guardar
                    </ButtonSave>
                </DivButtons>
            </FormContent>
    )
}

export default FormCourse