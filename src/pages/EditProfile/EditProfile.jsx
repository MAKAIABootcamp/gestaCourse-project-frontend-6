import React, {useRef} from 'react'
import { ContainerData, DivLabelAndInput, ContainerArticle, ButtonInscription } from '../CourseRegistrationForm/StylesComponents'
import {PhotoContainer} from './StyleComponents'
import imageUser from '../../assets/usuario.png'

function EditProfile() {
  const fileInputRef = useRef(null);
  const activarInput = () => {
    // Activa el cuadro de diálogo de selección de archivos
    fileInputRef.current.click();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
  };
  return (
    <ContainerArticle>
        <h1>EDITAR PERFIL</h1>
        <form onSubmit={handleSubmit}>
          <ContainerData >
            <DivLabelAndInput>
              <label htmlFor="name">NOMBRE <p>*</p></label>
              <input id='name' type="text" autoComplete="off"/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="lastName">APELLIDO <p>*</p></label>
              <input id='lastName' type="text" />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="typeIdentification">TIPO DE IDENTIFICACIÓN <p>*</p></label>
              <select id="typeIdentification">
                <option value="">Tu respuesta</option>
                <option value="RC">Registro Civil</option>
                <option value="CC">Cedula de Ciudadania</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="PS">Pasaporte</option>
              </select>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="numIdentification">NUMERO DE IDENTIFICACIÓN <p>*</p></label>
              <input id="numIdentification" type="text" />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="address">DIRECCIÓN DE RESIDENCIA <p>*</p></label>
              <input id="address" type="text" autoComplete="off"/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="phone">TÉLEFONO <p>*</p></label>
              <input id="phone" type="text" autoComplete="off"/>
            </DivLabelAndInput>
          </ContainerData>
          <PhotoContainer>
            <label htmlFor="imagen">FOTO</label>
            <div>
              <img src={imageUser} alt="Imagen de Perfil" />
              <input type="file" id="imagen" name="imagen" accept="image/*" ref={fileInputRef}/>
              <button onClick={activarInput}>Cambiar</button>
            </div>
          </PhotoContainer>
          <ButtonInscription type="submit">Guardar</ButtonInscription>
        </form>
    </ContainerArticle>
  )
}

export default EditProfile