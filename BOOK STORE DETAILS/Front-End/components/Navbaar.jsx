
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBaar.css'


function NavBaar() {
  return (
   <>
   
    <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="/" className='p-0 m-0'>
            <img src="https://www.ala.org/themes/custom/ala/logo.svg" alt="" height={50} width={200} />
            {/* <h3>Logo</h3> */}
          </Navbar.Brand>
          <Nav className="m-auto">
            
            <Nav.Link href="/" style={{fontSize:"20px"}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{fontSize:"20px"}}>About</Nav.Link>
            <Nav.Link href="/list" style={{fontSize:"20px"}}>Books List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
   


   </>
  )
}


export default NavBaar






