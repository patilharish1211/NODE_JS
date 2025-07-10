import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function UpdateNotes() {

  const {notesId}=useParams()

  const [title,settitle]=useState("")
  const [file,setfile]=useState(null)
  const [body, setbody] = useState("")
  

  const handelSubmit=(e)=>{
    e.preventDefault()
    
    axios.patch(`${import.meta.env.VITE_BASEURL}/notes/update/${notesId}`,{title,body,file},{
      headers:{
        "Content-Type": "multipart/form-data",
      },
      withCredentials:true
    })
    .then((res)=>{
      toast.success(res.data.message || "Notes Update Ho Gya ")
      settitle("");
      setbody("");
    })
    .catch((err)=>{
      toast.error(err.message || "Error")
    })

    

  }


  return (
    <>
     <h2>Update Your Notes</h2>
    <form action="" className='position-relative w-50 m-auto p-4' style={{inset:"0px"}} onSubmit={handelSubmit}>

        <input type="text" className='m-5 p-3 font' placeholder='Title Here' style={{height:"50px"}} value={title} onChange={(e)=>settitle(e.target.value)} />

        <input type="file" className='mb-3 p-3 font' placeholder='image Url Here' style={{height:"50px"}}  onChange={(e)=>setfile(e.target.files[0])} />

        <textarea type="text" className=' p-3 font' placeholder='Description Here' style={{height:"50px"}}  onChange={(e)=>setbody(e.target.value)} />

        <input type="submit" />
      </form>
      

    </>
  )
}

export default UpdateNotes