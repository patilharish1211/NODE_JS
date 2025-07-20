import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import  AuthContext  from './component/context.jsx'

createRoot(document.getElementById('root')).render(

<AuthContext>
<BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthContext>
    
)
