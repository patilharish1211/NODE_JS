import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DescriptionNotes() {

  const {notesId}=useParams()
  const [notes,setnotes]=useState([])
  
  const getAllNotes = () => {
    axios.get(`${import.meta.env.VITE_BASEURL}/notes/singelNote/${notesId}`, {
      withCredentials: true
    })
      .then((res) => {
        setnotes(res.data.isExistNotes)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  useEffect(() => {
    getAllNotes()
  }, [])

  return (
    <>
      <div className="container">
        <div className="row justify-content-center " >
          <div className="col-md-4">
            <div className="text-center">
              <img src={`${import.meta.env.VITE_BASEURL}/${notes.Notesimg}`}
                // src={notes.Notesimg[0]=="h" ? notes.Notesimg : `${import.meta.env.VITE_BASEURL}/${notes.Notesimg}`}
              alt="" className='img-fluid rounded mb-3' height={200} width={400} />
              <h2>{notes.title}</h2>
              <p>{notes.body}</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DescriptionNotes