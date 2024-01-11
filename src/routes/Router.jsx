import { BrowserRouter,Route, Routes  } from 'react-router-dom'
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
import PrivatedRoutes from './PrivatedRoutes'
import { useSelector } from 'react-redux'


const Router = () => {
  const { isAunthenticated } = useSelector(store => store.user);
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<PublicRoutes isAuthenticate={isAunthenticated} />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/recuperacion" element={<Recuperacion />}></Route>
            </Route>
            <Route  element={<PrivatedRoutes isAuthenticate={isAunthenticated} />}>
              <Route element={<Layout/>} >
                  <Route index element={<OfertasInscripciones/>} />
                  <Route path="ofertasInscripciones" element={<OfertasInscripciones/>} />
                  <Route path="acercaNosotros" element={<AcercaNosotros/>} />
                  <Route path="formatoInscripcionACurso" element={<CourseRegistrationForm/>} />
                  <Route path="editarPerfil" element={<EditProfile/>} />
                  <Route path="misCursos" element={<MyCourses/>} />
                  <Route path="EditarCurso" element={<EditRecord/>} />
                  <Route path="AñadirCurso" element={<EditRecord/>} />
                  <Route path="gestionCursos" element={<CourseManagement/>} />
              </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router