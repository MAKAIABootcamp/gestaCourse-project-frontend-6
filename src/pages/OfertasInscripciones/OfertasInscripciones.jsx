import React from 'react'
import {Title, StylesPrincipal, Search,Lupa,Input,BotonBuscar,DivCards,Cards,CardImg,ImgCard,TitleCard,TextCard,BotonDetalles,Botones,BotonInscripcion} from './StyleOfertasInscripciones'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/courses/courseActions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const OfertasInscripciones = () => {

  const dispatch = useDispatch();
  const {courses} = useSelector(store => store.course);
  useEffect(() => {
    dispatch(getData())
  }, []);
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
            {courses.map((curso,index)=>{
                return (
                        <Cards key={index}>
                            <CardImg>
                                <ImgCard src={curso.photo} alt="course" />
                            </CardImg>
                            <div>
                                <TitleCard>{curso.name}</TitleCard>
                                <TextCard>
                                    Costo: {curso.cost} <br/><br/>
                                    Fecha de inicio: {curso.dates.date_init}<br/><br/>
                                    Fecha de finalización: {curso.dates.date_end}
                                </TextCard>
                            </div>
                            
                            <Botones>
                                <Link to={`/detailsCourse/${curso.id}`}>
                                    <BotonDetalles type='submit'>Más detalles</BotonDetalles>
                                </Link>
                                <Link to={`/inscripcion/${curso.id}`}>
                                    <BotonInscripcion type='submit'>Inscribirse</BotonInscripcion>
                                </Link>
                            </Botones>
                        </Cards>
                )
            })

            } 
        </DivCards>
    </StylesPrincipal>
  )
}

export default OfertasInscripciones