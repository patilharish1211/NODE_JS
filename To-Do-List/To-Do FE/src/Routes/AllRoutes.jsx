import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Customer from '../Pages/Customer'
import NavBaar from '../Components/NavBaar'

function AllRoutes() {
  return (
    <>
        <NavBaar /> 
    <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/list' element={<Customer />}/>
    </Routes>
       
    </>
  )
}

export default AllRoutes