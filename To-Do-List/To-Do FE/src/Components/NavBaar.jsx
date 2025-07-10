

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBaar.css'


function NavBaar() {
  return (
   <>
   
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className='p-0 m-0'>
            <img src="src\assets\JD car LOGOO.png" alt="" height={100} width={200} />
          </Navbar.Brand>
          <Nav className="m-auto">
            
            <Nav.Link href="/" style={{fontSize:"25px"}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{fontSize:"25px"}}>About</Nav.Link>
            <Nav.Link href="/list" style={{fontSize:"25px"}}>Customer List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
   


   </>
  )
}


export default NavBaar






