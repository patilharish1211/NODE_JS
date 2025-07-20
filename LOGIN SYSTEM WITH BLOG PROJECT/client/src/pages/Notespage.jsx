import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import NotesCard from '../component/NotesCard';

const Notespage = () => {

  
  const [state, setstate] = useState([]);
  const Userid = JSON.parse(localStorage.getItem("User"))

  const Fetchdata = () => {
    axios.get(`${import.meta.env.VITE_URL}notes/get/${Userid?._id}`, {
      withCredentials: true
    })
      .then((res) => {
        setstate(res.data)
      })
      .catch((err) => {
        console.log(err);
        toast.error(res.data.message)
      })
  }

  useEffect(() => {
    Fetchdata()
  }, [])
  return (
    <div>
      <div style={{height:"100vh",display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {
          state.length > 0 ?
            state.map((el) => <NotesCard Image={el.Image} title={el.title} key={el._id}  Fetchdata={Fetchdata} notesid={el._id} />)
            : <p>No notes found</p>
        }
      </div>

    </div>
  )
}

export default Notespage
