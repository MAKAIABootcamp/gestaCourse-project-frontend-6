import React from 'react'
import {StyleContenedor,StyleDivParrafo,StyleImg,StyleTitle,StyleParrafo,StyleDivSecundario,StyleParrafoPuntos,StylePunto,StyleDivPuntos,StyleHorario,StyleDivInversion,StyleInversion,StyleCupos,StyleDivImg} from './StyleDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/courses/courseActions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const DetailsCourse = () => {
  const dispatch = useDispatch();
  const {courses} = useSelector(store => store.course);
  
  useEffect(() => {
    dispatch(getData())
  }, []);

  const { id } = useParams()

  const detailCourse = courses.filter(curso=>curso.id === id)

  return (
    <>
        
        <StyleContenedor>
            <StyleDivImg>
                <StyleImg src={detailCourse[0].photo} alt="logoDetails" />
            </StyleDivImg>
            <StyleDivParrafo>
                <StyleTitle>{detailCourse[0].name}</StyleTitle>
                <h2>Presentación</h2>
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
  )
}

export default DetailsCourse