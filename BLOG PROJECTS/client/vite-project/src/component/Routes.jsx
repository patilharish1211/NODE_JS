import React from 'react';
import {    Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
  );
};

export default AppRoutes;
