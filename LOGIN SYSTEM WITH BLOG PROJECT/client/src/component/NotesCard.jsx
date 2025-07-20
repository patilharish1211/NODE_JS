import axios from 'axios'
import React from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
const NotesCard = ({
    title,
    key,
    Image,
    notesid,
    Fetchdata
}) => {
  const Deletenotes=(notesid)=>{
axios.delete(`${import.meta.env.VITE_URL}notes/delete/${notesid}`,{
  withCredentials:true
})
.then((res)=>{
  Fetchdata()
  toast.success(res.data.message)
})
.catch((err)=>{
  toast.error(err.message)
  console.log(err)
})
  }
  return (
    <div >
      <div className="card   card-notes" key={notesid}>
        <Link to={`/Notesdescription/${notesid}`}>
      <img  src={`${import.meta.env.VITE_URL}/${Image}`  }
      alt={title} className="card-image" />
      </Link>
      <h3 className="card-title">{title}</h3>

      <div className="card-buttons">
        <button className="edit-btn" >
          <Link style={{color:"white",textDecoration:"none"}}   to={`/Updatenotes/${notesid}`}>Edit</Link>
        </button>
        <button className="delete-btn" onClick={()=>Deletenotes(notesid)} >
          Delete
        </button>
      </div>
    </div>
    </div>
  )
}

export default NotesCard
