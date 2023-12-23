import React from 'react'
import {Title, StylesPrincipal, Search,Lupa,Input,BotonBuscar,DivCards,Cards,ImgCard,TitleCard,TextCard,BotonDetalles,Botones,BotonInscripcion} from './StyleOfertasInscripciones'

const OfertasInscripciones = () => {
  return (
    <StylesPrincipal>
        <Title>
            <h1>OFERTAS E INSCRIPCIONES</h1>
        </Title>
        <Search>
            <Lupa src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703291402/DemoDay/lupa_m0jaag.png" alt="search" />
            <form>
                <Input type="text" id="buscar" name="buscar" placeholder='Buscar'/>
                <BotonBuscar type="submit">Buscar</BotonBuscar>
            </form>
        </Search>
        <DivCards>
            <Cards>
                <ImgCard src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703291763/DemoDay/CDPPW_ed17-medium_apjiha.jpg" alt="course" />
                <div>
                    <TitleCard>Diseño de página web - FrontEnd</TitleCard>
                    <TextCard>
                        Costo: Gratuito <br/><br/>
                        Fecha de inicio: 5 de enero de 2024.<br/><br/>
                        Fecha de finalización: 10 de Agosto de 2024
                    </TextCard>
                </div>
                <Botones>
                    <BotonDetalles type='submit'>Más detalles</BotonDetalles>
                    <BotonInscripcion type='submit'>Inscribirse</BotonInscripcion>
                </Botones>
            </Cards>
            <Cards>
                <ImgCard src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703291749/DemoDay/desarrollo-web_bl9tsg.jpg" alt="course" />
                <div>
                    <TitleCard>Curso Desarrollo web full stack</TitleCard>
                    <TextCard>
                        Costo: $500.000 (Estudiante universitario), $2'000.000 (Publico general) <br/><br/>
                        Inscripciones: Hasta el 25 de mayo de 2024 o hasta llenar cupos <br/><br/>
                        Pagos: Del 18 de abril de 2024 o hasta el 25 de mayo de 2024 o hasta llenar cupos.
                    </TextCard>
                </div>
                <Botones>
                    <BotonDetalles type='submit'>Más detalles</BotonDetalles>
                    <BotonInscripcion type='submit'>Inscribirse</BotonInscripcion>
                </Botones>
            </Cards>
            <Cards>
                <ImgCard src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703291747/DemoDay/curso-app-sin-programar_xg2j2e.webp" alt="course" />
                <div>
                    <TitleCard> Introducción al desarrollo móvil</TitleCard>
                    <TextCard> 
                        Costo:  Gratuito <br/><br/>
                        Tercer fin de semana de cada mes.<br/><br/>
                        Sábado: de 9:00 a.m. a 12:00m y de 2:00 p.m. – 7:00 p.m.
                        Domingo: de 9:00 a.m. a 1:00 p.m.
                    </TextCard>
                </div>
                <Botones>
                    <BotonDetalles type='submit'>Más detalles</BotonDetalles>
                    <BotonInscripcion type='submit'>Inscribirse</BotonInscripcion>
                </Botones>
            </Cards>
           
        </DivCards>
    </StylesPrincipal>
  )
}

export default OfertasInscripciones