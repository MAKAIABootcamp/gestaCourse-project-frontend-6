import React from 'react'
import {StyleContenedor, StyleLeft, StyleRigth, StyleTitle,StylePararfo} from './StyleAcercaNosotros'
const AcercaNosotros = () => {
  return (
    <>
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
                <img src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703726245/DemoDay/descarga_fyijpp.png" alt="imgAcerca de nosotros" />
            </StyleRigth>
        </StyleContenedor>
    </>
  )
}

export default AcercaNosotros