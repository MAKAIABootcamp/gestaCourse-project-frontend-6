import React from 'react'
import { ContainerData, DivLabelAndInput, ContainerArticle, ButtonInscription } from './StylesComponents'

function CourseRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
  };
  return (
    <ContainerArticle>
        <h1>FORMATO DE INSCRIPCIÓN EN LINEA</h1>
        <form onSubmit={handleSubmit}>
          <ContainerData >
            <DivLabelAndInput>
              <label htmlFor="name">NOMBRE <p>*</p></label>
              <input name='name' type="text" />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="lastName">APELLIDO <p>*</p></label>
              <input name='lastName' type="text" />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="typeIdentification">TIPO DE IDENTIFICACIÓN <p>*</p></label>
              <select name="typeIdentification">
                <option value="">Tu respuesta</option>
                <option value="RC">Registro Civil</option>
                <option value="CC">Cedula de Ciudadania</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="PS">Pasaporte</option>
              </select>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="numIdentification">NUMERO DE IDENTIFICACIÓN <p>*</p></label>
              <input name="numIdentification" type="text" />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="address">DIRECCIÓN DE RESIDENCIA <p>*</p></label>
              <input name="address" type="text" />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="phone">TÉLEFONO <p>*</p></label>
              <input name="phone" type="text" />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="typeInscription">TIPO DE INSCRIPCIÓN <p>*</p></label>
              <select name="typeInscription" type="text">
                <option value="">Tu respuesta</option>
                <option value="PR">Presencial</option>
                <option value="VR">Virtual</option>
              </select>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="proffesion">SI ES PROFESIONAL, INDICAR SU PROFESIÓN Y/O ESPECIALIDAD</label>
              <input name="proffesion" type="text" />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="entity">ENTIDAD</label>
              <p>Por favor informar a que Institución pertenece y el cargo que ocupa</p>
              <input name="entity" type="text" />
            </DivLabelAndInput>
          </ContainerData>
          <ButtonInscription type="submit">Enviar Formulario</ButtonInscription>
        </form>
    </ContainerArticle>
  )
}

export default CourseRegistrationForm