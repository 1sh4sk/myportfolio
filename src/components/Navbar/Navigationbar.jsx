import React, { useRef } from "react";
import './Navbar.css'
import { NavLink, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//assets
import Resume from '../../Assets/Ayesha_s_k_resume.pdf';
import { FiExternalLink } from "react-icons/fi";



function Navigationbar() {
    const location = useLocation();

    const navref = useRef();
    window.onscroll = () => {
        if (window.scrollY > 150) {
            navref.current.classList.add('nav-active');
        } else {
            navref.current.classList.remove('nav-active');
        }
    };

    return (

        <header>
            <Navbar ref={navref} fixed="top">
                <Container>
                    <Navbar.Brand as={NavLink} to="/"></Navbar.Brand>


                    <Nav className="ms nav-links">
                        <Nav.Link as={NavLink} to="/" style={location.pathname === '/' ? { color: '#2a2a2a' } : { color: '#ffff' }}>Home</Nav.Link>

                        <Nav.Link as={NavLink} to="/Aboutme"
                            style={location.pathname === '/' ? { color: '#2a2a2a' } : { color: '#ffff' }}>About me</Nav.Link>

                        {/* <Nav.Link as={NavLink} to="/Resume" style={location.pathname === '/' ? { color: '#2a2a2a' } : { color: '#ffff' }}>Resume</Nav.Link> */}

                        <a className="nav-link" href={Resume} target="_blank" rel="noreferrer" style={location.pathname === '/' ? { color: '#2a2a2a' } : { color: '#ffff' }}>Resume <FiExternalLink /></a>

                        {/* <Nav.Link as={NavLink} to="/Works" style={location.pathname === '/' ? { color: '#2a2a2a' } : { color: '#ffff' }}>Works</Nav.Link> */}

                        <Nav.Link as={NavLink} to="/Contact" style={location.pathname === '/' ? { color: '#2a2a2a' } : { color: '#ffff' }}>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </header>

    );
}


export default Navigationbar;