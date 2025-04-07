import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <motion.img
            src="/logo-placeholder.png"
            alt="NGO Logo"
            height="40"
            className="me-2"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span whileHover={{ color: '#28a745' }} className="brand-text">
            HOPE Foundation
          </motion.span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus"className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-link-custom">Events</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className="nav-link-custom">Contact Us</Nav.Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="success" className="ms-3 donate-btn">Be a Contributor</Button>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
