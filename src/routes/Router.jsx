import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import EditRecord from '../pages/EditRecord/EditRecord'
import OfertasInscripciones from '../pages/OfertasInscripciones/OfertasInscripciones'
import Recuperacion from '../components/Recuperacion/Recuperacion'
import Login from '../components/Login/Login'
import EditProfile from '../pages/EditProfile/EditProfile'
import MyCourses from '../pages/MyCourses/MyCourses'
import CourseRegistrationForm from '../pages/CourseRegistrationForm/CourseRegistrationForm'
import AcercaNosotros from '../pages/AcercaNosotros/AcercaNosotros'
import CourseManagement from '../pages/courseManagement/CourseManagement'
import PublicRoutes from './PublicRoutes'
import Page404 from '../pages/Page404/Page404'
import PrivatedRoutes from './PrivatedRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { setAuthenticated, setUser } from '../store/users/userSlice'
import StudentsForCourse from '../pages/StudentsForCourse/StudentsForCourse'
import DetailsCourse from '../pages/DeatailsCourse/DetailsCourse'

const Router = () => {
  const { isAunthenticated, user } = useSelector(store => store.user)
  const [checking, setChecking] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid && !user) {
        dispatch(setAuthenticated(true))
        dispatch(setUser({
          id: userLogged.uid,
          email: userLogged.email,
          name: userLogged.displayName,
          photoURL: userLogged.photoURL,
          accessToken: userLogged.accessToken
        }))
      }
    })
    setChecking(false)
  }, [dispatch, user])

  if (checking) {
    return <div>Cargando...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<Layout />}>
            <Route index element={<OfertasInscripciones />}></Route>
            <Route path="acercaNosotros" element={<AcercaNosotros />} />
            <Route path="ofertasInscripciones" element={<OfertasInscripciones />}></Route>
            <Route path="detailsCourse/:id" element={<DetailsCourse />} />
          </Route>
          <Route element={<PublicRoutes isAuthenticate={isAunthenticated} />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/recuperacion" element={<Recuperacion />}></Route>
          </Route>
          <Route element={<PrivatedRoutes isAuthenticate={isAunthenticated} />}>
            <Route path="*" element={<Page404 />} />
            <Route element={<Layout />} >
              {
                user?.rol === 'admin' ?
                  <Route>
                    <Route index element={<OfertasInscripciones />}></Route>
                    <Route path="EditarCurso/:id" element={<EditRecord/>} />
                    <Route path="AñadirCurso" element={<EditRecord />} />
                    <Route path="gestionCursos" element={<CourseManagement />} />
                    <Route path="EstudiantesPorCurso/:id" element={<StudentsForCourse/>} />
                  </Route>
                  :
                  <Route>
                    <Route index element={<OfertasInscripciones />}></Route>
                    <Route path="formatoInscripcionACurso" element={<CourseRegistrationForm />} />
                    <Route path="editarPerfil" element={<EditProfile />} />
                    <Route path="misCursos" element={<MyCourses />} />
                    <Route path='inscripcion/:id' element={<CourseRegistrationForm />} />
                  </Route>
              }
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router