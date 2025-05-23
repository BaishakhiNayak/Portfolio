import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import PortFolio from './components/PortFolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (

    <>
      <Navbar/>
      <Home/>
      <About/>
      <PortFolio/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
 
  )
}

export default App
