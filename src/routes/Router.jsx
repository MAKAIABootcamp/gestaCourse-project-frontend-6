import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes  } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Ingresar from '../components/Ingresar/Ingresar'
import OfertasInscripciones from '../pages/OfertasInscripciones/OfertasInscripciones'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  element={<Layout/>} >
                <Route index element={<OfertasInscripciones/>} />
                <Route path="ofertasInscripciones" element={<OfertasInscripciones/>} />
                <Route path="acercaNosotros" element={<QuienesSomos/>} />
                <Route path="ingresar" element={<Ingresar/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router