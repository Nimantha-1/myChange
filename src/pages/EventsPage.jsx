// EventsPage.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Card, Badge, Button, Spinner } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import './EventsPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import debounce from 'lodash/debounce'; // Fixed import after installing lodash

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleEvents, setVisibleEvents] = useState(3); // Progressive loading
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0.9]);
  const headerY = useTransform(scrollY, [0, 200], [0, -30]);

  // Debounced scroll handler for infinite scrolling
  const handleScroll = useCallback(
    debounce(() => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        visibleEvents < events.length
      ) {
        setVisibleEvents((prev) => prev + 3);
      }
    }, 200),
    [visibleEvents, events.length]
  );

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        // Simulated API call with dummy data
        const dummyEvents = [
          {
            id: 1,
            title: 'Annual Fundraising Gala',
            date: 'May 15, 2025',
            time: '7:00 PM - 11:00 PM',
            location: 'Grand City Hotel, Downtown',
            image: '/api/placeholder/800/600',
            category: 'Fundraising',
            description:
              'Join us for an evening of celebration and support as we raise funds for our ongoing community projects. Enjoy dinner, live entertainment, and inspiring stories from the people we’ve helped.',
          },
          {
            id: 2,
            title: 'Volunteer Training Workshop',
            date: 'May 25, 2025',
            time: '10:00 AM - 2:00 PM',
            location: 'Community Center, East Side',
            image: '/api/placeholder/800/600',
            category: 'Training',
            description:
              'Learn how to make a difference in your community through effective volunteering. This workshop covers essential skills, best practices, and provides networking opportunities with experienced volunteers.',
          },
          {
            id: 3,
            title: 'Environmental Cleanup Drive',
            date: 'June 5, 2025',
            time: '9:00 AM - 12:00 PM',
            location: 'City River Park',
            image: '/api/placeholder/800/600',
            category: 'Community Service',
            description:
              'Help us clean up our beautiful river park and protect local wildlife. Equipment will be provided. Bring your enthusiasm and invite friends and family to join this important community effort.',
          },
          {
            id: 4,
            title: 'Youth Leadership Conference',
            date: 'June 20, 2025',
            time: '9:00 AM - 5:00 PM',
            location: 'University Conference Center',
            image: '/api/placeholder/800/600',
            category: 'Education',
            description:
              'Empowering the next generation of leaders. This full-day conference includes keynote speakers, interactive workshops, and networking opportunities designed specifically for young adults aged 16-25.',
          },
        ];
        setEvents(dummyEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleRegisterClick = (eventId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(`Registering for event ${eventId}`);
    // Add your registration logic here
  };

  return (
    <>
      <NavigationBar />
      <div className="events-page">
        {/* Hero Section */}
        <motion.div
  className="hero-sectionevent"
  style={{
    opacity: headerOpacity,
    y: headerY,
    transition: 'all 0.3s ease-out',
    backgroundImage: 'url(/api/placeholder/1920/1080)', // Dynamic background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  initial={{ scale: 1.05 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
>
  {/* Gradient Overlay */}
  <div className="overlayevent gradient-overlay"></div>

  <Container className="position-relative">
    {/* Animated Background Particles */}
    <div className="hero-particles">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: [0.2, 0.5, 0.2], y: 50 }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}
    </div>

    {/* Main Content */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="hero-contentevent text-center py-5"
    >
      <motion.h1
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="display-4 fw-bold text-white mb-3"
      >
        Upcoming Events
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="lead text-white mb-4"
      >
        Join us in making a difference through unforgettable experiences
      </motion.p>

      {/* Enhanced Button Group */}
      <div className="d-flex justify-content-center gap-3">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="primary"
            size="lg"
            className="px-4 py-2 shadow-sm"
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
          >
            Explore Events <i className="bi bi-arrow-down-circle ms-2" />
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline-light"
            size="lg"
            className="px-4 py-2"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Subscribe Now <i className="bi bi-envelope ms-2" />
          </Button>
        </motion.div>
      </div>

      {/* Event Countdown (New Feature) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="countdown mt-5 text-white"
      >
        <p className="mb-2">Next Event Starts In:</p>
        <div className="d-flex justify-content-center gap-3">
          <div className="countdown-item">
            <span>38</span> Days
          </div>
          <div className="countdown-item">
            <span>12</span> Hours
          </div>
          <div className="countdown-item">
            <span>45</span> Minutes
          </div>
        </div>
      </motion.div>
    </motion.div>
  </Container>
</motion.div>

        {/* Loading State */}
        {isLoading ? (
          <Container className="text-center py-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Container>
        ) : (
          <>
            {/* Featured Event */}
            {events.length > 0 && (
  <section className="featured-event-sectionevent py-5">
    <Container>
      {/* Section Header */}
      <motion.div
        className="section-headerevent text-center mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Featured Event</h2>
        <p className="text-muted">Don't miss our highlight of the season</p>
      </motion.div>

      <Row className="justify-content-center">
        <Col lg={10}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="featured-event-card"
          >
            <Card className="shadow-lg border-0 overflow-hidden">
              {/* Image with Overlay */}
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={events[0].image}
                  alt={events[0].title}
                  className="rounded-top featured-image"
                />
                <div className="image-overlay">
                  <Badge bg="primary" className="featured-badge">
                    Featured Event
                  </Badge>
                </div>
              </div>

              <Card.Body className="p-4">
                {/* Event Date Badge */}
                <motion.div
                  className="featured-date-badge"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span>{events[0].date}</span>
                </motion.div>

                <Card.Title className="mb-3 fw-bold">{events[0].title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  <div className="event-meta d-flex flex-wrap gap-3">
                    <span>
                      <i className="bi bi-calendar me-2" />
                      {events[0].date}
                    </span>
                    <span>
                      <i className="bi bi-clock me-2" />
                      {events[0].time}
                    </span>
                    <span>
                      <i className="bi bi-geo-alt me-2" />
                      {events[0].location}
                    </span>
                  </div>
                </Card.Subtitle>
                <Card.Text className="mb-4">{events[0].description}</Card.Text>

                {/* Action Buttons */}
                <div className="d-flex gap-3 flex-wrap">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="primary"
                      className="px-4 py-2"
                      onClick={() => handleRegisterClick(events[0].id)}
                    >
                      Register Now <i className="bi bi-arrow-right-circle ms-2" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline-secondary"
                      className="px-4 py-2"
                      onClick={() => alert('Learn more about ' + events[0].title)}
                    >
                      Learn More <i className="bi bi-info-circle ms-2" />
                    </Button>
                  </motion.div>
                </div>

                {/* Social Share (New Feature) */}
                <motion.div
                  className="social-share mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="small text-muted mb-2">Share this event:</p>
                  <div className="d-flex gap-2">
                    <a href="#" className="social-icon">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#" className="social-icon">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </motion.div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  </section>
)}
            

            {/* Events Grid */}
            <section className="event-calendar-section py-5">
              <Container>
                <motion.div
                  className="section-headerevent mb-5 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2>Event Calendar</h2>
                  <p className="text-muted">Join our upcoming events</p>
                </motion.div>

                <Row xs={1} md={2} lg={3} className="g-4">
                  {events.slice(0, visibleEvents).map((event) => (
                    <Col key={event.id}>
                      <motion.div
                        className="h-100"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="h-100 shadow-sm border-0">
                          <div className="position-relative">
                            <Card.Img
                              variant="top"
                              src={event.image}
                              alt={event.title}
                              className="rounded-top"
                            />
                            <Badge
                              bg={
                                event.category === 'Fundraising'
                                  ? 'success'
                                  : event.category === 'Training'
                                  ? 'info'
                                  : event.category === 'Community Service'
                                  ? 'warning'
                                  : 'primary'
                              }
                              className="position-absolute top-0 end-0 m-2"
                            >
                              {event.category}
                            </Badge>
                          </div>
                          <Card.Body className="d-flex flex-column">
                            <Card.Title className="mb-2">{event.title}</Card.Title>
                            <Card.Text className="text-muted small mb-3">
                              <i className="bi bi-clock me-2" /> {event.time} |{' '}
                              <i className="bi bi-geo-alt me-2 ms-2" /> {event.location}
                            </Card.Text>
                            <Card.Text className="flex-grow-1">
                              {event.description.substring(0, 100)}...
                            </Card.Text>
                            <Button
                              variant="outline-primary"
                              className="mt-auto"
                              onClick={() => handleRegisterClick(event.id)}
                            >
                              Learn More
                            </Button>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>

                {visibleEvents < events.length && (
                  <div className="text-center mt-5">
                    <Button
                      variant="outline-primary"
                      onClick={() => setVisibleEvents((prev) => prev + 3)}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Loading...' : 'Load More'}{' '}
                      <i className="bi bi-arrow-down ms-2" />
                    </Button>
                  </div>
                )}
              </Container>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-sectionevent">
  <Container>
    <Row className="justify-content-center">
      <Col lg={8}>
        <motion.div
          className="newsletter-containerevent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Header with Icon */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <i className="bi bi-envelope-paper-heart text-white display-4 mb-3" />
            <h3 className="fw-bold">Stay in the Loop</h3>
            <p className="text-light lead">
              Subscribe to get the latest event updates, exclusive offers, and community news delivered straight to your inbox.
            </p>
          </motion.div>

          {/* Enhanced Form */}
          <div className="newsletter-formevent">
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control shadow-sm"
              aria-label="Email address for newsletter"
              required
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                className="px-5 py-2 subscribe-btn"
                onClick={() => alert('Subscribed!')} // Replace with actual subscription logic
              >
                Subscribe Now <i className="bi bi-arrow-right ms-2" />
              </Button>
            </motion.div>
          </div>

          {/* New Features: Benefits and Social Links */}
          <motion.div
            className="newsletter-benefits mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="small text-light mb-3">Why subscribe?</p>
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
              <li><i className="bi bi-check-circle me-2" /> Event Reminders</li>
              <li><i className="bi bi-check-circle me-2" /> Exclusive Content</li>
              <li><i className="bi bi-check-circle me-2" /> Community Updates</li>
            </ul>
          </motion.div>

          <motion.div
            className="social-links mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="small text-light mb-2">Follow us for more:</p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook" /></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter" /></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram" /></a>
            </div>
          </motion.div>
        </motion.div>
      </Col>
    </Row>
  </Container>
</section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;