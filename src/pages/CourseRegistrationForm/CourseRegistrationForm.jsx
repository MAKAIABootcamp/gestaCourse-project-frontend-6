import React from 'react'
import { ContainerData, DivLabelAndInput, ContainerArticle, ButtonInscription } from './StylesComponents'
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

function CourseRegistrationForm() {
  const {user} = useSelector(store => store.user);
  console.log(user);
  const {name,lastname,id_number,telefono} = user;
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <ContainerArticle>
        <h1>FORMATO DE INSCRIPCIÓN EN LINEA</h1>
        <form onSubmit={handleSubmit}>
          <ContainerData >
            <DivLabelAndInput>
              <label htmlFor="name">NOMBRE <p>*</p></label>
              <input id='name' type="text" autoComplete="off" defaultValue={name}/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="lastName">APELLIDO <p>*</p></label>
              <input id='lastName' type="text" defaultValue={lastname} />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="typeIdentification">TIPO DE IDENTIFICACIÓN <p>*</p></label>
              <select id="typeIdentification" >
                <option value="">Tu respuesta</option>
                <option value="RC">Registro Civil</option>
                <option value="CC">Cedula de Ciudadania</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="PS">Pasaporte</option>
              </select>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="numIdentification">NUMERO DE IDENTIFICACIÓN <p>*</p></label>
              <input id="numIdentification" type="text" defaultValue={id_number} />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="address">DIRECCIÓN DE RESIDENCIA <p>*</p></label>
              <input id="address" type="text" autoComplete="off"/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="phone">TÉLEFONO <p>*</p></label>
              <input id="phone" type="text" autoComplete="off" defaultValue={telefono}/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="typeInscription">TIPO DE INSCRIPCIÓN <p>*</p></label>
              <select id="typeInscription" type="text">
                <option value="">Tu respuesta</option>
                <option value="PR">Presencial</option>
                <option value="VR">Virtual</option>
              </select>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="proffesion">SI ES PROFESIONAL, INDICAR SU PROFESIÓN Y/O ESPECIALIDAD</label>
              <input id="proffesion" type="text" />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="entity">ENTIDAD</label>
              <p>Por favor informar a que Institución pertenece y el cargo que ocupa</p>
              <input id="entity" type="text" />
            </DivLabelAndInput>
          </ContainerData>
          <ButtonInscription type="submit">Enviar Formulario</ButtonInscription>
        </form>
    </ContainerArticle>
  )
}

export default CourseRegistrationForm