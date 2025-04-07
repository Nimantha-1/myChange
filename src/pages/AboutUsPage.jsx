import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './AboutUsPage.css';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { ref: missionRef, inView: missionVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: historyRef, inView: historyVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: valuesRef, inView: valuesVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: teamRef, inView: teamVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: impactRef, inView: impactVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: ctaRef, inView: ctaVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Executive Director",
      image: "/api/placeholder/200/200",
      bio: "With over 15 years of experience in social work, Sarah leads our organization with passion and dedication."
    },
    {
      name: "Michael Chen",
      position: "Operations Manager",
      image: "/api/placeholder/200/200",
      bio: "Michael ensures our projects are executed efficiently while maximizing our resources and impact."
    },
    {
      name: "Priya Sharma",
      position: "Community Outreach",
      image: "/api/placeholder/200/200",
      bio: "Priya builds and maintains relationships with communities, ensuring our work addresses real needs."
    },
    {
      name: "Daniel Okafor",
      position: "Programs Director",
      image: "/api/placeholder/200/200",
      bio: "Daniel develops and oversees our various initiatives with a focus on sustainability and impact."
    }
  ];

  const coreValues = [
    {
      title: "Compassion",
      icon: "❤️",
      description: "We approach our work with empathy and understanding, recognizing the dignity of all people."
    },
    {
      title: "Integrity",
      icon: "✓",
      description: "We maintain transparency and honesty in all our operations and decision-making processes."
    },
    {
      title: "Innovation",
      icon: "💡",
      description: "We constantly seek creative solutions to address complex social challenges."
    },
    {
      title: "Sustainability",
      icon: "🌱",
      description: "We develop long-term solutions that can continue to benefit communities for generations."
    }
  ];

  return (

    
    <div className={`about-us-page ${isLoaded ? 'loaded' : ''}`}>

        <NavigationBar />
       {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="parallax-bg" 
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` 
          }}
        >
          <div className="overlay"></div>
        </div>
        <Container className="hero-content">
          <h1 className="fade-up-animation">About Our Organization</h1>
          <p className="lead fade-up-animation delay-1">
            Empowering communities through sustainable development and positive social change since 2005.
          </p>
          <div className="scroll-indicator fade-up-animation delay-2">
            <span>Scroll to explore</span>
            <div className="arrow-down"></div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className={`mission-vision-section ${missionVisible ? 'visible' : ''}`}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mission-text slide-in-left">
              <h2>Our Mission & Vision</h2>
              <p>
                We envision a world where all communities have the resources and opportunities they need to thrive. Our mission is to empower underserved populations through education, advocacy, and sustainable development programs.
              </p>
              <p>
                By 2030, we aim to impact over one million lives across 20 countries, creating resilient communities that can sustain positive change for generations to come.
              </p>
            </Col>
            <Col lg={6} className="mission-image slide-in-right">
              <div className="image-container">
                <img src="/api/placeholder/500/400" alt="Our mission in action" className="img-fluid rounded shadow" />
                <div className="floating-badge">
                  <span>Impact-Driven</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* History & Background */}
      <section ref={historyRef} className={`history-section ${historyVisible ? 'visible' : ''}`}>
        <Container>
          <h2 className="text-center mb-5 fade-up-animation">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item left fade-up-animation">
              <div className="timeline-content">
                <h3>2005</h3>
                <p>Founded by a group of passionate social workers responding to community needs after natural disasters.</p>
              </div>
            </div>
            <div className="timeline-item right fade-up-animation delay-1">
              <div className="timeline-content">
                <h3>2010</h3>
                <p>Expanded operations to five countries, focusing on education and healthcare initiatives.</p>
              </div>
            </div>
            <div className="timeline-item left fade-up-animation delay-2">
              <div className="timeline-content">
                <h3>2015</h3>
                <p>Launched innovative microfinance programs enabling communities to develop sustainable businesses.</p>
              </div>
            </div>
            <div className="timeline-item right fade-up-animation delay-3">
              <div className="timeline-content">
                <h3>2020</h3>
                <p>Pivoted quickly to address pandemic challenges, providing relief and digital education resources.</p>
              </div>
            </div>
            <div className="timeline-item left fade-up-animation delay-4">
              <div className="timeline-content">
                <h3>Today</h3>
                <p>Operating in 12 countries with focused programs addressing education, healthcare, environmental sustainability, and economic empowerment.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className={`values-section ${valuesVisible ? 'visible' : ''}`}>
        <Container>
          <h2 className="text-center mb-5 fade-up-animation">Our Core Values</h2>
          <Row>
            {coreValues.map((value, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className={`value-card fade-up-animation delay-${index}`}>
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className={`team-section ${teamVisible ? 'visible' : ''}`}>
        <Container>
          <h2 className="text-center mb-5 fade-up-animation">Leadership Team</h2>
          <Row>
            {teamMembers.map((member, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className={`team-card fade-up-animation delay-${index}`}>
                  <div className="member-image-container">
                    <Card.Img variant="top" src={member.image} alt={member.name} />
                    <div className="social-icons">
                      <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <button className="btn btn-outline-primary btn-lg hover-effect fade-up-animation">Meet the Full Team</button>
          </div>
        </Container>
      </section>

      {/* Impact Numbers Section */}
      <section ref={impactRef} className={`impact-section ${impactVisible ? 'visible' : ''}`}>
        <Container>
          <h2 className="text-center mb-5 fade-up-animation">Our Impact</h2>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <div className="impact-counter fade-up-animation">
                <span className="counter">500+</span>
                <p>Projects Completed</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="impact-counter fade-up-animation delay-1">
                <span className="counter">12</span>
                <p>Countries Served</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="impact-counter fade-up-animation delay-2">
                <span className="counter">250,000+</span>
                <p>Lives Impacted</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="impact-counter fade-up-animation delay-3">
                <span className="counter">5,000+</span>
                <p>Volunteers Worldwide</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className={`cta-section ${ctaVisible ? 'visible' : ''}`}>
        <Container className="text-center">
          <h2 className="mb-4 fade-up-animation">Join Our Mission</h2>
          <p className="lead mb-5 fade-up-animation delay-1">
            Together, we can create lasting change and empower communities around the world.
          </p>
          <div className="cta-buttons fade-up-animation delay-2">
            <button className="btn btn-primary btn-lg me-3 hover-effect">Become a Volunteer</button>
            <button className="btn btn-outline-light btn-lg hover-effect">Donate Now</button>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
  
};

export default AboutUsPage;
