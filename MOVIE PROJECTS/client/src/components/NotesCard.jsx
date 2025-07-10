import React from 'react'
import { Link, useParams } from "react-router-dom";
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';


function NotesCard({title,genre,director,releaseYear,description,id}) {

  

  const handelDelete=(id)=>{
    axios.delete(`${import.meta.env.VITE_BASEURL}/notes/delete/${id}`,{
      withCredentials:true
    })
    .then((res)=>{
      console.log(res)
      toast.success(res?.data?.message ||  "Note deleted successfully")
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
      <div className='' >
            <div
             
              key={id}
              className='m-2 text-white text-center '
              style={{ backgroundColor: '#15162C'}}
              
            >
              <br /> <br />
              <h3>{title}</h3>
              <h6>{genre}</h6>
              <h5>{director}</h5>
              <h5>{releaseYear}</h5>
              <p>{description}</p>

              <br />
              
              <Button variant='outline-primary'  className='text-white m-2'>
                <Link to={`/editnotes/${id}`}>
                Edit
                </Link>
              </Button> 
              <Button variant='outline-danger' onClick={()=>handelDelete(id)} >
                Delete
              </Button>
            </div>
    </div>
      
    </>
  )
}

export default NotesCard