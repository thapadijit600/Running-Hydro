import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './assets/Component/NavBar'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Notices from './assets/Pages/Notices'
import Events from './assets/Pages/Events'
import TopBar from './assets/Component/TopBar'
import Gallery from './assets/Pages/Gallery'
import Contact from './assets/Pages/Contact'

function App() {

  return (
    <BrowserRouter>
     
     <TopBar />
     <Navbar />
     

     <Routes>
     <Route path='/'element={<Home />} />
     <Route path='/about'element={<About />} />
     <Route path='/notices'element={<Notices />} />
     <Route path='/events'element={<Events />} />
     <Route path='/gallery'element={<Gallery />} />
     <Route path='/contact'element={<Contact />} />

     </Routes>
     
    </BrowserRouter>
    
  )
}

export default App
