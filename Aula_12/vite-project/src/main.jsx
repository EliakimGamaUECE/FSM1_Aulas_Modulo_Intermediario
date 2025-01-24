import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EnviarDados from './components/EnviarDados.jsx'
import Nav from './components/Nav.jsx'
import Login from './components/Login.jsx'
import Contador from './components/Contador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Contador />
    <Login />
    <EnviarDados />
  </StrictMode>,
)
