import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Create() {

  const [title,settitle]=useState("")
  const [description, setdescription] = useState("")

  const handelSubmit=(e)=>{
    e.preventDefault()
    const notesData={title,body:description}
    axios.post(`${import.meta.env.VITE_BASEURL}/notes/create`,notesData,{
      withCredentials:true
    })
    .then((res)=>{
      toast.success(res.data.message || "Notes Create Ho Gya ")
      settitle("");
      setdescription("");
    })
    .catch((err)=>{
      toast.error(err.response.data.message || "Error")
    })

  }

  return (
    <>
        <h2>Create Your Notes</h2>
      <form action="" className='position-relative w-50 m-auto p-4' style={{inset:"0px"}} onSubmit={handelSubmit}>
        <input type="text" className='m-5 p-3 font' placeholder='Title Here' style={{height:"50px"}} onChange={(e)=>settitle(e.target.value)} />
        <textarea type="text" className=' p-3 font' placeholder='Description Here' style={{height:"50px"}} onChange={(e)=>setdescription(e.target.value)} />
        <input type="submit" />
      </form>
    </>
  )
}

export default Create