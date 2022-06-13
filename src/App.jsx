import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/Navbar'
import PageRoutes from './components/Routing'
import { BrowserRouter as Router} from "react-router-dom";

function App() {   

  return (
    <Router>
        <div className='body'>
          <MainNavbar />    
          <PageRoutes />        
        </div>
    </Router>
  )
}

export default App
