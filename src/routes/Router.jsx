import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes  } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Ingresar from '../components/Ingresar/Ingresar'
import OfertasInscripciones from '../pages/OfertasInscripciones/OfertasInscripciones'
import EditProfile from '../pages/EditProfile/EditProfile'
import MyCourses from '../pages/MyCourses/MyCourses'
import CourseRegistrationForm from '../pages/CourseRegistrationForm/CourseRegistrationForm'
import DetailsCourse from '../pages/DeatailsCourse/DetailsCourse'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  element={<Layout/>} >
                <Route index element={<OfertasInscripciones/>} />
                <Route path="ofertasInscripciones" element={<OfertasInscripciones/>} />
                <Route path="acercaNosotros" element={<QuienesSomos/>} />
                <Route path="ingresar" element={<DetailsCourse/>} />
                <Route path="formatoInscripcionACurso" element={<CourseRegistrationForm/>} />
                <Route path="editarPerfil" element={<EditProfile/>} />
                <Route path="misCursos" element={<MyCourses/>} />
            
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router