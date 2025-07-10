import React from 'react'
import NavBaar from '../components/Navbaar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Books from '../pages/Books'

function AllRoutes() {
  return (
    <>
             <NavBaar /> 
    <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/list' element={<Books />}/>
    </Routes>
    </>
  )
}

export default AllRoutes