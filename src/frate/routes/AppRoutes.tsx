import { Navigate, Route, Routes } from "react-router-dom"
import { AboutUs } from "../pages/AboutUs"
import { Comunities } from "../pages/Comunities"
import { HomePage } from "../pages/HomePage"
import { Teams } from "../pages/Teams"
import { Activities } from '../pages/Activities';
import { Contact } from '../pages/Contact';




export const AppRoutes = () => {
    return (
      <Routes>
        
          <Route path="/" element={ <HomePage /> } />
          <Route path="/historia-fml" element={ <AboutUs /> } />
          <Route path="/comunidades" element={ <Comunities /> } />
          <Route path="/equipos" element={ <Teams /> } />
          <Route path="/actividades" element={ <Activities /> } />
          <Route path="/contacto" element={ <Contact /> } />



          <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    )
  }