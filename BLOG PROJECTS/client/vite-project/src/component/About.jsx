import React from 'react'

const About = () => {
  return (
    <div className="about-container">
    <h1>About This Project</h1>
    <p className='Para'>This full-stack web application is designed for secure user authentication, role-based access, and CRUD operations, built with Node.js, Express, MongoDB, and React.</p>

    <div className="feature">
      <h2>Features</h2>
      <ul>
        <li>User Authentication</li>
        <li>Role-Based Access Control</li>
        <li>CRUD Operations</li>
      </ul>
    </div>

    <div className="technologies">
      <h2>Technologies Used</h2>
       <strong> <p>Node.js, Express, MongoDB, React</p></strong>
    </div>
  </div>
  )
}

export default About
