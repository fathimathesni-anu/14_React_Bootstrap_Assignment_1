import React from 'react'
import { Container, Nav } from "react-bootstrap";
function Navbar() {
  return (
    <Container fluid className="p-4 mb-4 mt-4 bg-success">
    <Nav className="nav-pills flex-column flex-sm-row">
      <Nav.Link className="flex-sm-fill text-sm-center text-white" href="#heading">
        Kerala Tour Packages
      </Nav.Link>
      <Nav.Link className="flex-sm-fill text-sm-center text-white" href="#heading">
        Kerala Honeymoon Tours
      </Nav.Link>
      <Nav.Link className="flex-sm-fill text-sm-center text-white" href="#heading">
        Kerala Tourist Places
      </Nav.Link>
      <Nav.Link className="flex-sm-fill text-sm-center text-white" href="#heading">
        About Kerala
      </Nav.Link>
      <Nav.Link className="flex-sm-fill text-sm-center text-white" href="#details">
        Contact Us
      </Nav.Link>
    </Nav>
  </Container>
  )
}

export default Navbar