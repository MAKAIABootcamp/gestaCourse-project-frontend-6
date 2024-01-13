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
  console.log('id', detailCourse);
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
            <StyleDivPuntos>
                <StylePunto src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703705138/DemoDay/PUNTO-GRIS_elobfc.png" alt="punto" />
                <StyleParrafoPuntos>Aprender Desarrollo web es un proceso de mucha práctica, así que practicaremos bastante pero lo haremos de forma divertida y con proyectos reales</StyleParrafoPuntos>
            </StyleDivPuntos>
            <StyleDivPuntos>
                <StylePunto src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703705138/DemoDay/PUNTO-GRIS_elobfc.png" alt="punto" />
                <StyleParrafoPuntos>Si eres una persona que aprende más elaborando proyectos del mundo real este curso es para ti</StyleParrafoPuntos>
            </StyleDivPuntos>
            <StyleDivPuntos>
                <StylePunto src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703705138/DemoDay/PUNTO-GRIS_elobfc.png" alt="punto" />
                <StyleParrafoPuntos>Si deseas obtener un trabajo en la industria de desarrollo web, con este curso aprenderás 9 tecnologías en un solo curso</StyleParrafoPuntos>
            </StyleDivPuntos>
            <StyleDivPuntos>
                <StylePunto src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703705138/DemoDay/PUNTO-GRIS_elobfc.png" alt="punto" />
                <StyleParrafoPuntos>Desarrollo Web es un área bien pagada, pero puedes ver que requiere muchos conocimientos, este curso te ayudará a comenzar a aplicar a diferentes vacantes!</StyleParrafoPuntos>
            </StyleDivPuntos>
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