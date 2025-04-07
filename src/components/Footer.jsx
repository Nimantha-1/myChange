import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3} md={6} className="footer-col">
            <div className="footer-logo">
              <img src="/logo-placeholder.png" alt="Hope Foundation Logo" height="40" />
              <h3>HOPE Foundation</h3>
            </div>
            <p className="footer-about">
              Working towards a more equitable and sustainable world through community empowerment and positive social change.
            </p>
          </Col>
          <Col lg={3} md={6} className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#initiatives">Our Initiatives</a></li>
              <li><a href="#stories">Success Stories</a></li>
              <li><a href="#volunteer">Get Involved</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="footer-col">
            <h4>Our Programs</h4>
            <ul className="footer-links">
              <li><a href="#">Education For All</a></li>
              <li><a href="#">Healthcare Access</a></li>
              <li><a href="#">Environmental Sustainability</a></li>
              <li><a href="#">Community Development</a></li>
              <li><a href="#">Women Empowerment</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="footer-col">
            <h4>Stay Connected</h4>
            <p>Join our community to receive updates on our work and how you can help.</p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your Email" />
              <Button variant="success" size="sm">Subscribe</Button>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} HOPE Foundation. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
