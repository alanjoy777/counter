import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (
    <div>
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand href="#home" className='fw-bolder text-light'>
            <img src="https://i.pinimg.com/originals/14/bd/f7/14bdf7aa1794bc0a9965bbff73deefe2.gif" style={{width:"50px"}} alt="" />
            Counter</Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header 
