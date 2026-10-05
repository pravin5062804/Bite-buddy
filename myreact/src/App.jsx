import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import About from './suby/pages/About'
import './App.css'
import ProductMenu from './suby/components/ProductMenu'
import Menu from './suby/components/FirmCollections'
import Signin from './suby/pages/Signin'
import Login from './suby/pages/Login'
import Navbar from './suby/components/Navbar'
import Footer from './suby/components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    <Footer/>
    </div>
  )
}

export default App