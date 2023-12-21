import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes  } from 'react-router-dom'
import Home from '../components/Home/Home'
import Layout from '../components/Layout/Layout'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path="ofertasInscripciones" element={<Home/>} />
                <Route path="quienesSomos" element={<QuienesSomos/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router