import { useState } from 'react'
// Bootstrap file imported Here
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.js'

import SideNav from '../src/Components/SideNavbar/SideNavbar'
import Navbar from '../src/Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import './App.css'

function App() {

  return (
   <div>
     <div className="row w-100">
        <div className="col-2 position-fixed"> <SideNav /></div>
        <div className="w-75" id='Navbar'><Navbar /></div>
      </div>
   <div className='HomePage'> 
     <Home /> 
     </div>
   </div>
  

  )
}

export default App
