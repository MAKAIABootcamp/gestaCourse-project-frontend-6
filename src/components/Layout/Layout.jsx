import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import NavBarMovil from '../NavBarMovil/NavBarMovil'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout