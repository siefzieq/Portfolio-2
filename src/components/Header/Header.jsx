import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

const Header = () => {
    return(
        <>
        <Navbar expand="lg" className="bg-white pt-4 pb-3 border border-black sticky-navbar">
            <Container className="container-fluid">
                <Navbar.Brand href="#about-section">Hasif Zikry</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="ms-3 hover-link py-3 px-3" href="#about-section">About</Nav.Link>
                        <Nav.Link className="ms-3 hover-link py-3 px-3" href="#project-section">Projects</Nav.Link>
                        <Nav.Link className="ms-3 hover-link py-3 px-3" href="#skills-section">Skills</Nav.Link>
                        <Nav.Link className="ms-3 hover-link py-3 px-3" href="#contact-section">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;