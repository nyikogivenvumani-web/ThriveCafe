import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Component/NavBar.jsx'
import Home from './Home'
import About from './AboutUs'
import Location from './Location'
import Menu from './Menu'
import './App.css'

function App() {
  return (
      <BrowserRouter> 
        {/* We can add a Navigation Bar here later so it shows on all pages */}
        <Routes>
          {/* Added the Home route targeting the base path "/" */}
          <Route path="/" element={<Home />} /> 
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
