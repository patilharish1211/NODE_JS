import React, { useState } from 'react'
import axios from "axios"
import "./Singin.css"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Singup() {
    
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()

    const handelSubmit=(e)=>{
        e.preventDefault()
        
        axios.post(`${import.meta.env.VITE_BASEURL}/auth/register`,{name,email,password})
        .then((res)=>{
            toast.success(res.data.message)
            navigate("/singin")
        })
        .catch((err)=>{
            console.log(err)
            toast.error(err.message)
        })

    }

  return (
    <>
    <div className="singin-body pt-5 pb-5 ">
        <div class="box">
        <form action="" onSubmit={handelSubmit}>
            <div class="input-box">
                <h2>Sign Up</h2>
                <input  value={name} onChange={(e)=>setname(e.target.value)} type="text" required />
                <span>Name</span>
                <i></i>
            </div>
            <div class="input-box">
                <input  value={email} onChange={(e)=>setemail(e.target.value)} type="email" required />
                <span>Enter Email</span>
                <i></i>
            </div>
            <div class="input-box">
                <input  value={password} onChange={(e)=>setpassword(e.target.value)} type="password" required />
                <span>Enter Password</span>
                <i></i>
            </div>
            <input type="submit" value="SingUp" />
            <div class="Singin-links">
                <a href="/singin">Sign Up</a>
            </div>
        </form>
        </div>
            
        </div>

    </>
  )
}

export default Singup