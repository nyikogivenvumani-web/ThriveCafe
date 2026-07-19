import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './AboutUs'
import Location from './Location'
import Menu from './Menu'
import './App.css'

function App() {
  return (
    
      <BrowserRouter> 
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
