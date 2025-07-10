import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to MyProject</h1>
      <p>Your one-stop solution to learn and grow!</p>
      <img src="https://via.placeholder.com/800x400" className="img-fluid mt-3" alt="Welcome" />
    </Container>
  );
};

export default Home;