import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Singin from './pages/Singin'
import Singup from './pages/Singup'
import Notes from './pages/Notes'
import Create from './pages/Create'
import DescriptionNotes from './pages/DescriptionNotes'
import Privateroutes from './components/Privateroutes'
import UpdateNotes from './pages/UpdateNotes'
import AllNotesAdmin from './pages/AllNotesAdmin'
import Movies from './pages/Movies'

function Allroutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/notes" element={
            <Privateroutes>
              <Notes />
            </Privateroutes>
            } /> */}
            <Route path="/movies" element={
            <Privateroutes>
              <Movies />
            </Privateroutes>
            } />

            <Route path="/description/:notesId" element={<DescriptionNotes />} />
            <Route path="/create" element={
            <Privateroutes>
              <Create />
            </Privateroutes>  
            } />
            <Route path="/editnotes/:notesId" element={<UpdateNotes />} />
            <Route path="/singin" element={<Singin />} />
            <Route path="/singup" element={<Singup />} />
        </Routes>
    </>
  )
}

export default Allroutes