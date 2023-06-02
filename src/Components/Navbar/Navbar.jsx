import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavbarVideo from '../../assets/NavbarVideo.gif'
import UserIcon from '../../assets/UserIcon.png';
import { BsCashStack } from "react-icons/bs";
import { MdCropFree } from "react-icons/md";
import { Link } from 'react-router-dom';
import Home from '../Home/Home'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='MainNavbar'>
            <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        {/* import logo here which not yet imported */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link fs-4" href="#"> <MdCropFree /> </a>
        </li>
        <li className="nav-item">
          <a className="btn btn-danger mt-2 mx-2" href="#"><BsCashStack /> Apply for Business Loan</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><img src={NavbarVideo} alt="gif" width='370' id='NavbarVideo' /></a>
        </li>
        <li className="nav-item " >
          <a className="nav-link " href="#"> <img src={UserIcon} alt="img" id='UserIcon'/></a>
        </li>
        </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar