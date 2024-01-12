import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes  } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Ingresar from '../components/Ingresar/Ingresar'
import OfertasInscripciones from '../pages/OfertasInscripciones/OfertasInscripciones'
import Recuperacion from '../components/Recuperacion/Recuperacion'
import Login from '../components/Login/Login'
import EditProfile from '../pages/EditProfile/EditProfile'
import MyCourses from '../pages/MyCourses/MyCourses'
import CourseRegistrationForm from '../pages/CourseRegistrationForm/CourseRegistrationForm'
import DetailsCourse from '../pages/DeatailsCourse/DetailsCourse'
import AcercaNosotros from '../pages/AcercaNosotros/AcercaNosotros'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/recuperacion" element={<Recuperacion />}></Route>
            <Route element={<Layout/>} >
                <Route index element={<OfertasInscripciones/>} />
                <Route path="ingresar" element={<DetailsCourse/>} />
                <Route path="ofertasInscripciones" element={<OfertasInscripciones/>} />
                <Route path="acercaNosotros" element={<AcercaNosotros/>} />
                <Route path="formatoInscripcionACurso" element={<CourseRegistrationForm/>} />
                <Route path="editarPerfil" element={<EditProfile/>} />
                <Route path="misCursos" element={<MyCourses/>} />
            
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router