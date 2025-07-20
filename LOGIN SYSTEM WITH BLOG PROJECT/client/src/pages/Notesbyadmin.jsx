import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NotesCard from '../component/NotesCard';

const Notesbyadmin = () => {

    const [state, setstate] = useState([]);
    const Fetchdata = () => {
      axios.get(`${import.meta.env.VITE_URL}notes/Allnotesget`, {
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

        <h2>Total Notes :{state.length}</h2>
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

export default Notesbyadmin
