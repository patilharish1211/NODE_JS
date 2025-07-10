import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <h2>About MyProject</h2>
      <p>
        MyProject is a platform to showcase your creativity and skills. It features a
        fully responsive UI, modern authentication, and backend integration.
      </p>
      <h4>Features:</h4>
      <ul>
        <li>Sign Up and Login functionality</li>
        <li>Role-based access control</li>
        <li>Responsive design with React and Bootstrap</li>
      </ul>
    </Container>
  );
};

export default About;