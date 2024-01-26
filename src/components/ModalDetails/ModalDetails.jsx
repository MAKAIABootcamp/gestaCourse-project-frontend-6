import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {StyleContenedor,StyleDivParrafo,StyleImg,StyleTitle,StyleParrafo,StyleDivSecundario,StyleParrafoPuntos,StylePunto,StyleDivPuntos,StyleHorario,StyleDivInversion,StyleInversion,StyleCupos,StyleDivImg} from './StyleDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/courses/courseActions';
import { useEffect } from 'react';

function ModalDetails(props) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const {courses} = useSelector(store => store.course);
    
    useEffect(() => {
      dispatch(getData())
    }, []);
  
    const id = props.id;
  
    const detailCourse = courses.filter(curso=>curso.id === id)
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} style={{ width: '150px', height: '35px', borderRadius: '13px', color:'white', fontSize:'16px',fontWeight: 'normal', textTransform: 'capitalize', background:'#004AAD' }} >
        Más detalles
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size='xl'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <>
        
        <StyleContenedor>
            <StyleDivImg>
                <StyleImg src={detailCourse[0].photo} alt="logoDetails" />
            </StyleDivImg>
            <StyleDivParrafo>
                <StyleTitle>{detailCourse[0].name}</StyleTitle>
             
                <StyleParrafo>
                    {detailCourse[0].description}
                </StyleParrafo>
            </StyleDivParrafo>
        
        </StyleContenedor>
        <StyleDivSecundario>
            <h2>Población objetivo</h2>
            {detailCourse[0].target_population.map((item, index)=>{
                    return( 
                        <StyleDivPuntos key={index}>
                            <StylePunto src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703705138/DemoDay/PUNTO-GRIS_elobfc.png" alt="punto" />
                            <StyleParrafoPuntos>{item}</StyleParrafoPuntos>
                        </StyleDivPuntos>
                    )
                    
                })}
            
           
            <div>
                <h2>Horario</h2>
                {detailCourse[0].timetables.map((time, index)=>{
                    return( 
                        <StyleHorario key={index} >{time.day}  <br/> de {time.init} a {time.end} <br/><br/></StyleHorario>
                    )
                    
                })}
                
            </div>
        <div>
            <StyleDivInversion>
                <h4>Valor de la inversion:  </h4>
                <StyleInversion>{detailCourse[0].cost}</StyleInversion>
            </StyleDivInversion>
            <StyleCupos>Cupos:  {detailCourse[0].quotas}</StyleCupos>
        </div>
        </StyleDivSecundario>
        
   </>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalDetails