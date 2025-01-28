import EnviarDados from './EnviarDados.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Login from './Login.jsx'
import Contador from './Contador.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

export default function App() {

  return (

      <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contador' element={<Contador/>} />
          <Route path='/enviardados' element={<EnviarDados/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

