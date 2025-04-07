import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

const ContactPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const mapRef = useRef(null);
  const formRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formStatus, setFormStatus] = useState("");
  
  // Animation for mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation for scroll
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      formRef.current.reset();
      
      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  return (
    <>
    <NavigationBar />
    <div className="ngo_contact_page">
      {/* Hero Section */}
      <div 
        className="ngo_contact_hero"
        style={{
          backgroundPosition: `calc(50% + ${mousePosition.x * 0.02}px) calc(50% + ${mousePosition.y * 0.02}px)`
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ngo_hero_content"
          >
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Reach out to us for any questions or support.</p>
          </motion.div>
        </Container>
      </div>

      {/* Contact Information Section */}
      <section className="ngo_contact_info_section">
        <Container>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="ngo_contact_cards_container"
          >
            <Row>
              <Col lg={4} md={6} className="mb-4">
                <motion.div 
                  className="ngo_contact_card"
                  variants={{
                    hidden: { y: 50, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
                >
                  <div className="ngo_card_icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3>Visit Us</h3>
                  <p>123 NGO Street, Community Center</p>
                  <p>New York, NY 10001</p>
                </motion.div>
              </Col>
              
              <Col lg={4} md={6} className="mb-4">
                <motion.div 
                  className="ngo_contact_card"
                  variants={{
                    hidden: { y: 50, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
                  }}
                  whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
                >
                  <div className="ngo_card_icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri: 9am - 5pm</p>
                </motion.div>
              </Col>
              
              <Col lg={4} md={6} className="mb-4">
                <motion.div 
                  className="ngo_contact_card"
                  variants={{
                    hidden: { y: 50, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
                  }}
                  whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
                >
                  <div className="ngo_card_icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3>Email Us</h3>
                  <p>contact@ngoname.org</p>
                  <p>support@ngoname.org</p>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form & Map Section */}
      <section className="ngo_contact_form_section">
        <Container>
          <Row className="ngo_contact_form_row">
            <Col lg={6} md={12} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="ngo_contact_form_container"
              >
                <h2>Send Us a Message</h2>
                <p>We'll get back to you as soon as possible.</p>
                
                <Form ref={formRef} onSubmit={handleSubmit} className="ngo_contact_form">
                  <Form.Group className="mb-4">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter your full name" 
                      required 
                      className="ngo_form_input"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      className="ngo_form_input"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="What is this regarding?" 
                      className="ngo_form_input"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Please share your thoughts or questions..." 
                      required 
                      className="ngo_form_textarea"
                    />
                  </Form.Group>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      type="submit" 
                      className="ngo_submit_button"
                      disabled={formStatus === "sending"}
                    >
                      {formStatus === "sending" ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                  
                  {formStatus === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ngo_success_message"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </Form>
              </motion.div>
            </Col>
            
            <Col lg={6} md={12}>
              <motion.div
                ref={mapRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="ngo_map_container"
              >
                <div className="ngo_map_wrapper">
                  {/* Map Placeholder - Replace with actual map integration */}
                  <div className="ngo_map_placeholder">
                    <div className="ngo_map_pin_animation">
                      <div className="ngo_map_pin"></div>
                      <div className="ngo_map_pin_ripple"></div>
                    </div>
                  </div>
                </div>
                <div className="ngo_office_details">
                  <h3>Our Main Office</h3>
                  <p><i className="fas fa-clock"></i> Monday to Friday: 9am - 5pm</p>
                  <p><i className="fas fa-map-marker-alt"></i> 123 NGO Street, New York, NY 10001</p>
                  <div className="ngo_social_icons">
                    <motion.a 
                      href="#" 
                      className="ngo_social_icon"
                      whileHover={{ y: -5, color: '#1877f2' }}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="ngo_social_icon"
                      whileHover={{ y: -5, color: '#1da1f2' }}
                    >
                      <i className="fab fa-twitter"></i>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="ngo_social_icon"
                      whileHover={{ y: -5, color: '#e4405f' }}
                    >
                      <i className="fab fa-instagram"></i>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="ngo_social_icon"
                      whileHover={{ y: -5, color: '#0a66c2' }}
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="ngo_faq_section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ngo_faq_header"
          >
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to the most common questions about contacting us.</p>
          </motion.div>
          
          <Row className="mt-5">
            <Col lg={6} md={12} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ngo_faq_item"
              >
                <h4>What's the best way to contact for urgent matters?</h4>
                <p>For urgent matters, please call our hotline at +1 (555) 123-4567 which is monitored during business hours. For after-hours emergencies, please email urgent@ngoname.org.</p>
              </motion.div>
            </Col>
            
            <Col lg={6} md={12} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ngo_faq_item"
              >
                <h4>How long does it take to get a response?</h4>
                <p>We typically respond to all inquiries within 1-2 business days. For time-sensitive matters, please indicate this in your subject line.</p>
              </motion.div>
            </Col>
            
            <Col lg={6} md={12} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ngo_faq_item"
              >
                <h4>Can I visit your office without an appointment?</h4>
                <p>While we welcome visitors, we recommend scheduling an appointment to ensure the relevant staff members are available to assist you properly.</p>
              </motion.div>
            </Col>
            
            <Col lg={6} md={12} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ngo_faq_item"
              >
                <h4>How can I submit documents securely?</h4>
                <p>For secure document submission, please use the contact form and we will respond with secure upload instructions or visit our office in person.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Subscription */}
      <section className="ngo_newsletter_section">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="ngo_newsletter_container"
          >
            <Row className="align-items-center">
              <Col lg={6} md={12}>
                <div className="ngo_newsletter_content">
                  <h2>Stay Updated</h2>
                  <p>Subscribe to our newsletter to receive updates about our work, upcoming events, and opportunities to get involved.</p>
                </div>
              </Col>
              
              <Col lg={6} md={12}>
                <Form className="ngo_newsletter_form">
                  <div className="ngo_newsletter_input_group">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      className="ngo_newsletter_input"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ngo_newsletter_button"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </Form>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
    </div>

    <Footer />

    </>

  );
};

export default ContactPage;