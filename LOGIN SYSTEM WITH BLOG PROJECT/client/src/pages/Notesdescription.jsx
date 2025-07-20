import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import moment from "moment"

const Notesdescription = () => {
    const containerStyle = {
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        maxWidth:"600px",
        height:"500px",
        width: '100%',
        margin: '0 auto',
      };
    
      const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '10px',
      };
    
      const headingStyle = {
        fontSize: '2rem',
        marginBottom: '10px',
      };
    
      const paragraphStyle = {
        fontSize: '1rem',
        color: '#333',
      };
const [state,setstate]=useState({})
    const {notesid}=useParams()
  const Fetchdata = () => {
    axios.get(`${import.meta.env.VITE_URL}notes/getsingle/${notesid}`, {
      withCredentials: true
    })
      .then((res) => {
        setstate(res.data.message)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    Fetchdata()
  }, [])

  return (

<div style={{height:"100vh"}}>


    <div className="container" style={containerStyle}>
      <h1 style={headingStyle}>{state.title}</h1>
      <img src={state.Image} alt=""  style={imageStyle}/>
      <p>{moment().startOf(state.createdAt).fromNow()}</p>
      <p style={paragraphStyle}>
        {
            state.description
        }
      </p>
    </div>
    </div>
  );
};

export default Notesdescription;
