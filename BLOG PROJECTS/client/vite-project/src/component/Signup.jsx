import axios from 'axios';
import React, { useContext, useState } from 'react'
import Navbar from './Navbar';
import { NameContext } from './context';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const {setState}=useContext(NameContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    role: "explorer",
    Location: "",
    dob: ""
  }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8080/signup",formData

      ).then((res)=>{
        setState(res.data.User.name)
        navigate("/")
      })
      .catch((err)=>{
        console.log(err)
        
      })
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form.");
    }
  };




  return (
    <div>
      <div className="form-container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="ConfirmPassword"
          name="ConfirmPassword"
          value={formData.ConfirmPassword}
          onChange={handleChange}
          required
        />

        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="explorer">Explorer</option>
          <option value="admin">Admin</option>
        </select>

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="Location"
          name="Location"
          value={formData.Location}
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  )
}

export default Signup
