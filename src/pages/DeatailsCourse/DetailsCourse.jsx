import React from 'react'
import {StyleContenedor,StyleDivParrafo,StyleImg,StyleTitle,StyleParrafo,StyleDivSecundario,StyleParrafoPuntos,StylePunto,StyleDivPuntos
    ,StyleHorario,StyleDivInversion,StyleInversion,StyleCupos,StyleDivImg} from './StyleDetails'

const DetailsCourse = () => {
  return (
    <>
        <StyleContenedor>
            <StyleDivImg>
                <StyleImg src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703291749/DemoDay/desarrollo-web_bl9tsg.jpg" alt="logoDetails" />
            </StyleDivImg>
            <StyleDivParrafo>
                <StyleTitle>Curso Desarrollo web full stack</StyleTitle>
                <h2>Presentación</h2>
                <StyleParrafo>
                    Un curso paso a paso si deseas comenzar en el mundo de la Programación Web.
                    En este curso aprenderás 10 Lenguajes y Tecnologías Web:
                    HTML, CSS, SASS, Workflows, JavaScript, Fetch (Antes AJAX), PHP, POO - MVC, MySQL - SQL y API's
                    El Curso Incluye 4 proyectos finales, puedes ver los videos con los demos totalmente gratis!
                    Además, aprenderás otros temas muy importantes como:
                    Creación de Cuentas - Como en el 90% de los sitios que visitas hoy en día tus usuarios podrán crear sus cuentas.
                    Crear un Framework - Crearemos una base de código que aplicaremos a 4 Proyectos!
                    Autenticación desde una base de datos Real - Con MySQL y Hash a los Passwords y seguridad.
                    Recuperar Acceso - Un Password Hasheado no se puede recuperar, pero te mostraré como tus usuarios recuperarán su acceso.
                
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
                <StyleHorario>Lunes - Viernes <br/> de 2:00 p.m. a 6:00 p.m.</StyleHorario>
            </div>
        <div>
            <StyleDivInversion>
                <h4>Valor de la inversion:  </h4>
                <StyleInversion>$500.000 (Estudiante universitario), $2'000.000 (Publico general)</StyleInversion>
            </StyleDivInversion>
            <StyleCupos>Cupos Limitados</StyleCupos>
        </div>
        </StyleDivSecundario>
        
   </>
  )
}

export default DetailsCourse