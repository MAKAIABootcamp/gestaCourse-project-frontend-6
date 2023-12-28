import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes  } from 'react-router-dom'
import Home from '../components/Home/Home'
import Layout from '../components/Layout/Layout'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Recuperacion from '../components/Recuperacion/Recuperacion'
import Login from '../components/Login/Login'
import EditProfile from '../pages/EditProfile/EditProfile'
import MyCourses from '../pages/MyCourses/MyCourses'
import CourseRegistrationForm from '../pages/CourseRegistrationForm/CourseRegistrationForm'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/recuperacion" element={<Recuperacion />}></Route>
            <Route element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path="ofertasInscripciones" element={<Home/>} />
                <Route path="quienesSomos" element={<QuienesSomos/>} />
                <Route path="formatoInscripcionACurso" element={<CourseRegistrationForm/>} />
                <Route path="editarPerfil" element={<EditProfile/>} />
                <Route path="misCursos" element={<MyCourses/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router