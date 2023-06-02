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
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

// Side nav bar all components imported here from component/sidenavbar file 
import MainDashboard from './Components/SideNavbarComponent/DashBoard/MainDashboard';
import Kyc from './Components/SideNavbarComponent/Kyc/Kyc';
import VisaCard from './Components/SideNavbarComponent/VisaCard/VisaCard';
import Fund from './Components/SideNavbarComponent/Fund/Fund'
import Wallet from './Components/SideNavbarComponent/Wallet/Wallet'
import Withdraw from './Components/SideNavbarComponent/Withdraw/Withdraw'
import Wheels from './Components/SideNavbarComponent/Wheels/Wheels'
import BtcMining from './Components/SideNavbarComponent/BtcMining/BtcMining'
import Transitions from './Components/SideNavbarComponent/Transitions/Transitions'
import LoanRequest from './Components/LoanRequest/LoanRequest'


function App() {

  return (
   <div>
     <div className="row w-100">
        <div className="col-2 position-fixed"> <SideNav /></div>
        <div className="w-75" id='Navbar'><Navbar /></div>
      </div>       
       <Routes>
        <Route exact path="/" Component={MainDashboard}/>
        <Route exact path="/dashboard" Component={MainDashboard}/>
        <Route exact path="/kyc" Component={Kyc}/>
        <Route exact path="/card" Component={VisaCard}/>
        <Route exact path="/fund" Component={Fund}/>
        <Route exact path="/wallet" Component={Wallet}/>
        <Route exact path="/withdraw" Component={Withdraw}/>
        <Route exact path="/Whelloffortune" Component={Wheels}/>
        <Route exact path="/btcmining" Component={BtcMining}/>
        <Route exact path="/transitions" Component={Transitions}/>
        <Route exact path="/loan_req" Component={LoanRequest}/>
      </Routes>
 
      <div className='Footer shadow'> 
          <Footer />
     </div>
   </div>
  

  )
}

export default App
