import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Card, Carousel, Row, Col } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  
  useEffect(() => {
    //animation library
    AOS.init({
      duration: 1000,
      once: false,
    });
    
    // Handle navbar transparency on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ngo-homepage">

        <NavigationBar />

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <motion.div className="overlay" style={{ opacity }} />
        <Container className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Empowering Communities, Transforming Lives</h1>
            <p className="hero-subtitle">Join us in our mission to create sustainable change and build a better world for all</p>
            <div className="hero-buttons">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="me-3"
              >
                <Button variant="success" size="lg" className="hero-btn">Get Involved</Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline-light" size="lg" className="hero-btn">Learn More</Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
        <div className="hero-scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="scroll-text">Scroll Down</span>
            <i className="bi bi-chevron-down"></i>
          </motion.div>
        </div>
      </header>

      {/* Mission & Vision Section */}
      <section id="mission" className="mission-section">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <h2 className="section-title">Our Mission & Vision</h2>
            <div className="section-divider"></div>
          </div>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right" data-aos-delay="100">
              <div className="mission-content">
                <h3>Our Mission</h3>
                <p>To empower marginalized communities through sustainable development initiatives, education, and healthcare programs that promote self-reliance and dignity.</p>
                <h3 className="mt-4">Our Vision</h3>
                <p>A world where every individual has equal opportunities to thrive, regardless of their socioeconomic background, with access to education, healthcare, and a clean environment.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4"
                >
                  <Button variant="outline-success">Learn More About Us</Button>
                </motion.div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left" data-aos-delay="200">
              <div className="mission-image-container">
                <motion.img 
                  src="/mission-placeholder.jpg" 
                  alt="Our Mission" 
                  className="img-fluid rounded mission-image"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Numbers Section */}
      <section className="impact-section">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <h2 className="section-title">Our Impact</h2>
            <div className="section-divider"></div>
          </div>
          <Row className="text-center">
            <Col md={3} sm={6} className="impact-item" data-aos="fade-up" data-aos-delay="100">
              <div className="impact-icon">
                <i className="bi bi-people-fill"></i>
              </div>
              <h3 className="impact-number counter">15,000+</h3>
              <p className="impact-text">Lives Touched</p>
            </Col>
            <Col md={3} sm={6} className="impact-item" data-aos="fade-up" data-aos-delay="200">
              <div className="impact-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h3 className="impact-number counter">50+</h3>
              <p className="impact-text">Communities Served</p>
            </Col>
            <Col md={3} sm={6} className="impact-item" data-aos="fade-up" data-aos-delay="300">
              <div className="impact-icon">
                <i className="bi bi-calendar2-check"></i>
              </div>
              <h3 className="impact-number counter">120+</h3>
              <p className="impact-text">Projects Completed</p>
            </Col>
            <Col md={3} sm={6} className="impact-item" data-aos="fade-up" data-aos-delay="400">
              <div className="impact-icon">
                <i className="bi bi-award"></i>
              </div>
              <h3 className="impact-number counter">12</h3>
              <p className="impact-text">Years of Service</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Initiatives Section */}
      <section id="initiatives" className="initiatives-section">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <h2 className="section-title">Our Core Initiatives</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Discover how we're making a difference through our focused programs</p>
          </div>
          <Row className="initiative-cards">
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <motion.div 
                className="initiative-card"
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="initiative-icon">
                  <i className="bi bi-book"></i>
                </div>
                <h3>Education For All</h3>
                <p>Providing quality education and learning resources to underserved communities, empowering the next generation with knowledge and skills.</p>
                <Button variant="link" className="btn-learn-more">Learn More <i className="bi bi-arrow-right"></i></Button>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <motion.div 
                className="initiative-card"
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="initiative-icon">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <h3>Healthcare Access</h3>
                <p>Ensuring communities have access to essential healthcare services, preventive care, and health education programs.</p>
                <Button variant="link" className="btn-learn-more">Learn More <i className="bi bi-arrow-right"></i></Button>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <motion.div 
                className="initiative-card"
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="initiative-icon">
                  <i className="bi bi-tree"></i>
                </div>
                <h3>Environmental Sustainability</h3>
                <p>Implementing projects that protect natural resources, promote sustainable practices, and fight climate change effects.</p>
                <Button variant="link" className="btn-learn-more">Learn More <i className="bi bi-arrow-right"></i></Button>
              </motion.div>
            </Col>
          </Row>
          <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="400">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline-success" className="btn-view-all">View All Initiatives</Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Success Stories Carousel */}
      <section id="stories" className="stories-section">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <h2 className="section-title">Success Stories</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Real stories of transformation and hope from our beneficiaries</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <Carousel className="stories-carousel" indicators={false}>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <motion.img 
                      src="/story1-placeholder.jpg" 
                      className="img-fluid rounded story-image"
                      alt="Success Story 1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Col>
                  <Col lg={6}>
                    <div className="story-content">
                      <h3>Maya's Education Journey</h3>
                      <p className="story-quote">"Education changed my entire perspective on life and opened doors I never knew existed."</p>
                      <p>Maya, from a remote village, received a scholarship through our Education For All initiative. Today, she is a software engineer helping her entire community.</p>
                      <Button variant="link" className="btn-read-more">Read Full Story <i className="bi bi-arrow-right"></i></Button>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <motion.img 
                      src="/story2-placeholder.jpg" 
                      className="img-fluid rounded story-image"
                      alt="Success Story 2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Col>
                  <Col lg={6}>
                    <div className="story-content">
                      <h3>Community Health Transformation</h3>
                      <p className="story-quote">"We no longer have to travel miles for basic healthcare. This has saved lives in our village."</p>
                      <p>A rural community that once faced regular disease outbreaks now has a functioning health clinic and trained health workers.</p>
                      <Button variant="link" className="btn-read-more">Read Full Story <i className="bi bi-arrow-right"></i></Button>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="200">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline-success" className="btn-view-all">View All Stories</Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Get Involved Section */}
      <section id="volunteer" className="get-involved-section">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <h2 className="section-title">Get Involved</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Join our community of change-makers and make a difference</p>
          </div>
          <Row>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <motion.div 
                className="involvement-card"
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="involvement-icon">
                  <i className="bi bi-person-hearts"></i>
                </div>
                <h3>Volunteer With Us</h3>
                <p>Lend your skills and time to our various programs. We offer both in-person and virtual volunteering opportunities.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="success" className="btn-get-involved">Become a Volunteer</Button>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <motion.div 
                className="involvement-card"
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="involvement-icon">
                  <i className="bi bi-card-checklist"></i>
                </div>
                <h3>Become a Member</h3>
                <p>Join our community of supporters with exclusive access to events, reports, and networking opportunities.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="success" className="btn-get-involved">Join As Member</Button>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={4} md={12} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <motion.div 
                className="involvement-card"
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="involvement-icon">
                  <i className="bi bi-gift"></i>
                </div>
                <h3>Make a Donation</h3>
                <p>Support our work financially. Every contribution, no matter how small, helps us create lasting impact.</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="success" className="btn-get-involved">Donate Now</Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="events-section">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Join us at our upcoming events and activities</p>
          </div>
          <Row>
            <Col lg={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <motion.div 
                className="event-card"
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="event-date">
                  <span className="event-day">15</span>
                  <span className="event-month">April</span>
                </div>
                <div className="event-content">
                  <h3>Annual Charity Gala</h3>
                  <p className="event-location"><i className="bi bi-geo-alt"></i> Grand Hotel, City Center</p>
                  <p className="event-time"><i className="bi bi-clock"></i> 6:00 PM - 10:00 PM</p>
                  <p className="event-description">Join us for an evening of inspiration, entertainment, and fundraising for our educational programs.</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline-success" size="sm" className="event-btn">Register Now</Button>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <motion.div 
                className="event-card"
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="event-date">
                  <span className="event-day">22</span>
                  <span className="event-month">April</span>
                </div>
                <div className="event-content">
                  <h3>Community Clean-up Drive</h3>
                  <p className="event-location"><i className="bi bi-geo-alt"></i> Riverside Park</p>
                  <p className="event-time"><i className="bi bi-clock"></i> 9:00 AM - 12:00 PM</p>
                  <p className="event-description">Help us clean and restore the local park. All cleaning supplies will be provided. Bring your enthusiasm!</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline-success" size="sm" className="event-btn">Register Now</Button>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>
          <div className="text-center mt-3" data-aos="fade-up" data-aos-delay="300">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline-success" className="btn-view-all">View All Events</Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section with Parallax Effect */}
      <section className="newsletter-section">
        <div className="overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="newsletter-content text-center" data-aos="fade-up">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter to receive updates on our work, upcoming events, and ways to get involved.</p>
                <div className="newsletter-form">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter your email address" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="success" className="newsletter-btn">Subscribe</Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <h2 className="section-title">Our Partners</h2>
            <div className="section-divider"></div>
          </div>
          <div className="partners-logos" data-aos="fade-up" data-aos-delay="100">
            <motion.div 
              className="partner-logo"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/partner1-placeholder.png" alt="Partner 1" />
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/partner2-placeholder.png" alt="Partner 2" />
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/partner3-placeholder.png" alt="Partner 3" />
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/partner4-placeholder.png" alt="Partner 4" />
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/partner5-placeholder.png" alt="Partner 5" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <h2 className="section-title">Contact Us</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Have questions? Get in touch with our team</p>
          </div>
          <Row>
            <Col lg={5} md={12} className="mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h3>Our Location</h3>
                    <p>123 Hope Street, Downtown<br />City, Country, 12345</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@hopefoundation.org<br />support@hopefoundation.org</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 (123) 456-7890<br />+1 (123) 456-7891</p>
                  </div>
                </div>
                <div className="social-links">
                  <motion.a 
                    href="#" 
                    whileHover={{ y: -5, scale: 1.2, backgroundColor: '#3b5998' }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="bi bi-facebook"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ y: -5, scale: 1.2, backgroundColor: '#1da1f2' }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="bi bi-twitter"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ y: -5, scale: 1.2, backgroundColor: '#c13584' }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="bi bi-instagram"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ y: -5, scale: 1.2, backgroundColor: '#0077b5' }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="bi bi-linkedin"></i>
                  </motion.a>
                </div>
              </div>
            </Col>
            <Col lg={7} md={12} data-aos="fade-up" data-aos-delay="200">
              <div className="contact-form-container">
                <form className="contact-form">
                  <Row>
                    <Col md={6} className="mb-3">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </Col>
                    <Col md={6} className="mb-3">
                      <input type="email" className="form-control" placeholder="Your Email" />
                    </Col>
                  </Row>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                  </div>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="success" type="submit" className="btn-submit">Send Message</Button>
                    </motion.div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
      </div>
    );
  };

export default HomePage;