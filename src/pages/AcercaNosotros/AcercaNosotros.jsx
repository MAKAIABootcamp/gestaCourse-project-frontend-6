import React from 'react'
import {StylePrincipal,StyleContenedor, StyleLeft, StyleRigth, StyleTitle,StylePararfo,StyleImg,StyleImgMision,StyleImgMisio} from './StyleAcercaNosotros'
const AcercaNosotros = () => {
  return (
    <StylePrincipal>
        <StyleContenedor>
            <StyleLeft>
                <StyleTitle>¿Quiénes Somos? </StyleTitle>
                <StylePararfo>
                    Bienvenido a GestaCourse, tu próximo aliado en la revolución de la gestión académica. Nos complace presentar nuestra aplicación web diseñada para simplificar y mejorar significativamente la administración de la oferta académica. Con planes emocionantes para iniciar operaciones en el primer semestre del próximo año, nos comprometemos a ser el catalizador que impulsa la eficiencia y la excelencia en las instituciones educativas.
                </StylePararfo>
                <StylePararfo>
                    Nuestra aplicación web está diseñada para simplificar todo el proceso de gestión de cursos, desde la planificación hasta la ejecución. Facilitamos la creación de programas académicos, la asignación de recursos y la programación de clases, brindando una experiencia integral.
                </StylePararfo>
                <StylePararfo>
                    GestaCourse no es simplemente una aplicación web; es un cambio de paradigma en la gestión académica. Estamos entusiasmados por comenzar nuestras operaciones y ofrecer un servicio que impulse el progreso en las instituciones académicas.
                    Transforma tu oferta académica. Transforma tu institución. GestaCourse: Tu socio confiable en la evolución educativa.
                </StylePararfo>

            </StyleLeft>
            <StyleRigth>
                <StyleImg src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703733249/FOTO-CAMBIO-768x589_udhnvq.png" alt='img quienes somos'/>
            </StyleRigth>
            
        </StyleContenedor>
        <StyleContenedor>
            <StyleRigth>
                <StyleImgMisio src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703741560/2_du3okb.jpg" alt='img mision'/>
            </StyleRigth>
            <StyleLeft>
                <StyleTitle>Misión  </StyleTitle>
                <StylePararfo>
                    En GestaCourse, nuestra misión es redefinir la forma en que las instituciones académicas gestionan y ofrecen cursos. Nos proponemos ser el mecanismo de servicio, apoyo y acompañamiento que las instituciones necesitan para adaptarse y prosperar en un mundo educativo en constante cambio.    
                </StylePararfo>
            </StyleLeft>
        </StyleContenedor>
        <StyleContenedor>
            <StyleLeft>
                <StyleTitle>Visión  </StyleTitle>
                <StylePararfo>
                    Imaginamos un mundo donde la gestión académica no sea una tarea ardua, sino una experiencia fluida y enriquecedora. GestaCourse aspira a ser un socio estratégico para las instituciones académicas, allanando el camino hacia la excelencia en la educación.  
                </StylePararfo>
            </StyleLeft>
            <StyleRigth>
                <StyleImgMision src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703741559/3_pb87rr.jpg" alt='img vision'/>
            </StyleRigth>
        </StyleContenedor>
    </StylePrincipal>
  )
}

export default AcercaNosotros