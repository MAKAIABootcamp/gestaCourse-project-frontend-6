import React from 'react'
import { ContainerData, DivLabelAndInput, ContainerArticle, ButtonInscription } from './StylesComponents'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createDataEnrrollment } from '../../store/enrollment/enrollmentActions';
import { useParams } from 'react-router-dom';

function CourseRegistrationForm() {
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const { id } = useParams()
  const {user} = useSelector(store => store.user);
  console.log(user);
  const {fullName,id_number,telefono } = user;

  const handleEnviar = (data) => {
    const {direccion,profesion,entidad,tipoIns} = data;
    dispatch(createDataEnrrollment({Id_course:id, Id_student: user.id,tipoIns:tipoIns, addres: direccion, entity : entidad , profesion: profesion}));
  }

  return (
    <ContainerArticle>
        <h1>FORMATO DE INSCRIPCIÓN EN LINEA</h1>
        <form onSubmit={handleSubmit(handleEnviar)}>
          <ContainerData >
            <DivLabelAndInput>
              <label htmlFor="name">NOMBRES Y APELLIDOS <p>*</p></label>
              <input id='name' type="text" autoComplete="off" defaultValue={fullName} {...register('nombre')}/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="typeIdentification">TIPO DE IDENTIFICACIÓN <p>*</p></label>
              <select id="typeIdentification" {...register('tipoId')}>
                <option value="">Tu respuesta</option>
                <option value="RC">Registro Civil</option>
                <option value="CC">Cedula de Ciudadania</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="PS">Pasaporte</option>
              </select>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="numIdentification">NUMERO DE IDENTIFICACIÓN <p>*</p></label>
              <input id="numIdentification" type="text" defaultValue={id_number} {...register('id')} />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="address">DIRECCIÓN DE RESIDENCIA <p>*</p></label>
              <input id="address" type="text" autoComplete="off" {...register('direccion')}/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="phone">TÉLEFONO <p>*</p></label>
              <input id="phone" type="text" autoComplete="off" defaultValue={telefono} {...register('telefono')}/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="typeInscription">TIPO DE INSCRIPCIÓN <p>*</p></label>
              <select id="typeInscription" type="text" {...register('tipoIns')}>
                <option value="">Tu respuesta</option>
                <option value="PR">Presencial</option>
                <option value="VR">Virtual</option>
              </select>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="proffesion">SI ES PROFESIONAL, INDICAR SU PROFESIÓN Y/O ESPECIALIDAD</label>
              <input id="proffesion" type="text"  {...register('profesion')}/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="entity">ENTIDAD</label>
              <p></p>
              <input id="entity" type="text" placeholder='Por favor informar a que Institución pertenece y el cargo que ocupa' {...register('entidad')} />
            </DivLabelAndInput>
          </ContainerData>
          <ButtonInscription type="submit">Enviar Formulario</ButtonInscription>
        </form>
    </ContainerArticle>
  )
}

export default CourseRegistrationForm