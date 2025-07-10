import React from 'react'
import "./About.css"

import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from '../Components/Footer';
function About() {
  return (
    <>
    <h2 className='text-center text-white'>Our Story</h2>
    <div className="car-bg">
    </div>

    <Container className="my-5">
      <Row className="align-items-center text-white">
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="https://www.amarisupercars.com/images/about/our-story/1.jpg"
            alt="Car"
            className="img-fluid"
            style={{ borderRadius: '8px' }}
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">Our approach</h2>
          <p>
            We only deal in the best, most pristine, well-specified stock, as
            experience has taught us that these calibers of cars sell themselves.
            For this reason, we do not employ sales staff in the traditional sense
            of the word, although we do ensure all our staff have extensive product
            knowledge of the cars and realize that at this level, the customer
            service experience needs to be absolutely first class.
          </p>
          <p>
            We are a predominantly family-run business with a high level of lengthy
            staff retention, and this has enabled us to build long-term
            relationships with clients, ensuring we develop a strong understanding
            of how to meet or exceed their expectations.
          </p>
          <p>
            The rarity and exclusivity of the type of cars we deal in, obviously
            attracts a global audience and although we always hope to meet our
            clients in person, we have routinely sent cars to customers "sight
            unseen" all over the world.
          </p>
          <Button variant='outline-primary' className="mt-3">
            WHY JDCars FAQ
          </Button>
        </Col>
      </Row>
    </Container>

    <Footer />
    </>

  )
}

export default About