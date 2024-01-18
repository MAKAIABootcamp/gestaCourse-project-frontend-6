import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import NavBarMovil from '../NavBarMovil/NavBarMovil'

const Layout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default Layout