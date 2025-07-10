import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    role: 'Explorer',
    location: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post('/api/signup', formData);
      alert(response.data.message);
    } catch (error) {
      alert('Error registering user!');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" name="dob" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Select name="role" onChange={handleChange} required>
            <option value="Explorer">Explorer</option>
            <option value="Admin">Admin</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" name="location" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirmPassword" onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;