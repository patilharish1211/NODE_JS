import React, { useContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { NameContext } from './context';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {setState}=useContext(NameContext)
  const Navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
          const response=await axios.post("http://localhost:8080/signin",{
            email,
            password
          })
          if(response.status===200){
            Navigate("/")
            setState(response.data.User.name)

          }

      } catch (error) {
        console.log(error.response.message)
        alert("Something went wrong.")
      }
  };
  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
