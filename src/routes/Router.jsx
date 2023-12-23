import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes  } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import OfertasInscripciones from '../pages/OfertasInscripciones/OfertasInscripciones'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  element={<Layout/>} >
                <Route index element={<OfertasInscripciones/>} />
                <Route path="ofertasInscripciones" element={<OfertasInscripciones/>} />
                <Route path="quienesSomos" element={<QuienesSomos/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router