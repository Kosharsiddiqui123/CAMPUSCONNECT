import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Gallery from './pages/Gallery'
import EventCalendar from './pages/EventCalendar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/event' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/event/:id' element={<EventDetails />} />
        <Route path='/calender' element={<EventCalendar />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
