import React from 'react'
import { Navbar, Container } from "react-bootstrap";
function Header() {
  return (
    <Navbar bg="light" variant="light">
    <Container fluid>
      <Navbar.Brand href="https://www.keralatouronline.in">
        <img
          src="https://www.keralatouronline.in/images/logo.jpg"
          alt="kerala-tour"
          className="d-block w-100"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header