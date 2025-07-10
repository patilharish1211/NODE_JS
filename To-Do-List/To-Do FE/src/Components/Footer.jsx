import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Create a custom CSS file for any additional styling

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Showroom</h5>
            <ul className="list-unstyled">
              <li>Cars For Sale</li>
              <li>Previously Sold</li>
              <li>Sell Us Your Car</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>Our Story</li>
              <li>Why Amari FAQ</li>
              <li>Testimonials</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>How To Find Us</li>
              <li>T +44 (0)1772 663777</li>
              <li>E sales@amarisupercars.com</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="justify-content-between">
          <Col md={6} className="text-center text-md-start">
            <p>© 2024 AMARI™ Lifestyle Ltd. T/A AMARI™ Supercars. Registered Company Number: 06937335</p>
            <p>
              <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Contact Us</a>
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p>Site by <a href="#">racecar</a></p>
            <div className="social-icons">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-tiktok"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
