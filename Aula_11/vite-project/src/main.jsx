import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import MudaNome from './components/JuntaNome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <MudaNome />
    <App />
    <Footer/>
  </StrictMode>,
)
