import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import EventsPage from './pages/EventsPage'
import CateringPage from './pages/CateringPage'
import MasalaMagicPage from './pages/MasalaMagicPage'
import FranchisePage from './pages/FranchisePage'
import FunFactPage from './pages/FunFactPage'
import LocationsPage from './pages/LocationsPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/menu"         element={<MenuPage />} />
        <Route path="/events"       element={<EventsPage />} />
        <Route path="/catering"     element={<CateringPage />} />
        <Route path="/masala-magic" element={<MasalaMagicPage />} />
        <Route path="/franchise"    element={<FranchisePage />} />
        <Route path="/fun-fact"     element={<FunFactPage />} />
        <Route path="/locations"    element={<LocationsPage />} />
        <Route path="/about"        element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}