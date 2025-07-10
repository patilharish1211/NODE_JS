import React, { useState } from 'react'
import "./Singin.css"
import axios from "axios"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Singin() {

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()


    const handelSubmit=(e)=>{
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_BASEURL}/auth/login`,{email,password},{
            withCredentials:true
        })
        .then((res)=>{
            localStorage.setItem("userData",JSON.stringify(res.data.userData))
            toast.success(res.data.message)
            navigate("/home")
            window.location.reload()
        })
        .catch((err)=>{
            toast.error(err.response.data.message)
        })
    }

  return (
    <>
        <div className="singin-body pt-5 pb-5 ">
        <div class="box">
        <form action="" onSubmit={handelSubmit}>
            <div class="input-box">
                <h2>Sign In</h2>
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} required />
                <span >Email</span>
                <i></i>
            </div>
            <div class="input-box">
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} required />
                <span>Enter Password</span>
                <i></i>
            </div>
            <input type="submit" value="Login" />
            <div class="Singin-links">
                <a href="#">Forgot Password?</a>
                <a href="/singup">Sign Up</a>
            </div>
        </form>
        </div>
            
        </div>
    </>
  )
}

export default Singin