import {useRef, useState} from 'react'
import { ContainerData, DivLabelAndInput, ContainerArticle, ButtonInscription } from '../CourseRegistrationForm/StylesComponents'
import {PhotoContainer} from './StyleComponents'
import imageUser from '../../assets/usuario.png'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { updateUserDataAsync } from '../../store/users/userActions'
import uploadFile from '../../services/fileUpload'

function EditProfile() {

  const {user} = useSelector(store => store.user);
  console.log(user);
  const {name,id_number,telefono,address,photoURL} = user;
  const fileInputRef = useRef(null);
  const {register,handleSubmit} = useForm();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const activarInput = () => {
      fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleEdit = async (data) => {
    const photoURL = await uploadFile(file);
    dispatch(updateUserDataAsync(
      {
        id:user.id,
        accessToken:user.accessToken,
        photoURL: photoURL,
        ...data
    }));
  };

  return (
    <ContainerArticle>
        <h1>EDITAR PERFIL</h1>
        <form onSubmit={handleSubmit(handleEdit)}>
          <ContainerData >
            <DivLabelAndInput>
              <label htmlFor="name">NOMBRES Y APELLIDOS <p>*</p></label>
              <input id='name' type="text" autoComplete="off" defaultValue={name} {...register('name')}/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="typeIdentification">TIPO DE IDENTIFICACIÓN <p>*</p></label>
              <select id="typeIdentification" {...register('type_id')}>
                <option value="">Tu respuesta</option>
                <option value="RC">Registro Civil</option>
                <option value="CC">Cedula de Ciudadania</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="PS">Pasaporte</option>
              </select>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="numIdentification">NUMERO DE IDENTIFICACIÓN <p>*</p></label>
              <input id="numIdentification" type="text" defaultValue={id_number} {...register('id_number')} />
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="address">DIRECCIÓN DE RESIDENCIA <p>*</p></label>
              <input id="address" type="text" autoComplete="off" defaultValue={address} {...register('address')}/>
            </DivLabelAndInput>
            <DivLabelAndInput>
              <label htmlFor="phone">TÉLEFONO <p>*</p></label>
              <input id="phone" type="text" autoComplete="off" defaultValue={telefono} {...register('telefono')}/>
            </DivLabelAndInput>
          </ContainerData>
          <PhotoContainer>
            <label htmlFor="imagen">FOTO</label>
            <div>
              <img src={photoURL!= null ? photoURL:imageUser } alt="Imagen de Perfil" />
              <input type="file" id="imagen" name="imagen" accept="image/*" ref={fileInputRef} onChange={handleFileChange}/>
              <button type='button' onClick={activarInput}>Cambiar</button>
            </div>
          </PhotoContainer>
          <ButtonInscription type="submit" >Guardar</ButtonInscription>
        </form>
    </ContainerArticle>
  )
}

export default EditProfile