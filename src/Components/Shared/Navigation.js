import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <div className="container-md">
          <Navbar.Brand href="#home">Realtor Bridge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="p-3" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="p-3" href="#link">
                About
              </Nav.Link>
              <Nav.Link className="p-3" href="#home">
                Services
              </Nav.Link>
              <Nav.Link className="p-3" href="#link">
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
