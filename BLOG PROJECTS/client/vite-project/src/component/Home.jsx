import React, { useContext } from 'react';
import gif from "../assets/gifwelcome.gif"
import { NameContext } from './context';

const Home = () => {
  
  return (
    <div className="home-container">
      <h1 className="welcome-heading">Welcome!</h1>
      <p className="welcome-message">We're thrilled to have you here. Explore and enjoy!</p>
      <div className="image-container">
        <img  
          src={gif}
          alt="Welcome animation" 
          className="welcome-gif"   
        />
      </div>
    </div>
  );
};

export default Home;
