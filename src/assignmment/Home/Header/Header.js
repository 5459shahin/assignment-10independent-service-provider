import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="/services">Services</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;