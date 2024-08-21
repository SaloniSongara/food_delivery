import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
          <Container>
              <Navbar.Brand href="#home">YummyFood</Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link href="#about-us">About Us</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
  )
}

export default Header