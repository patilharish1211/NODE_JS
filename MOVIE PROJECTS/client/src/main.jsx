import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { CookiesProvider } from 'react-cookie'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <CookiesProvider>
    <App />
    </CookiesProvider>
    <ToastContainer/>
  </BrowserRouter>,
)
