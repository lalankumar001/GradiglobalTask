import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Logo from '../../assets/Logo.png'
// React icons imported here from react Icons
import { MdOutlineHome ,MdFormatAlignCenter} from "react-icons/md";
import { FiPaperclip ,FiCreditCard ,FiPlus} from "react-icons/fi";
import { GrGoogleWallet } from "react-icons/gr";
import { TfiBag,TfiMedallAlt } from "react-icons/tfi";
import { TbCurrencyBitcoin } from "react-icons/tb";
import './SideNavbar.css'

const SideNavbar = () => {
  return (
    <div className='SideNav'> 
  <img src={Logo} alt="img" width='230' className='mt-3 my-2 shadow' />
<ul className="nav flex-column mx-2">
  <li className="nav-item">
    <a className="nav-link fs-6 fw-bold p-3 text-white shadow" href="#"><MdOutlineHome  className='fs-3'/> Dashboard</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"><FiPaperclip className='fs-3' /> KYC Status</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"><FiCreditCard className='fs-3'/> Visa Card</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"><FiPlus className='fs-3'/> Fund Wallet</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"><GrGoogleWallet  className='fs-3'/> Wallet Transfer</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"><TfiBag className='fs-3'/> Withdrawal</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"><TfiMedallAlt className='fs-3'/> Whell fo Fortune</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"><TbCurrencyBitcoin className='fs-3' /> BTC Mining</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-6 fw-semibold p-3 text-white" href="#"><MdFormatAlignCenter className='fs-3'/> Transactions</a>
  </li>
 
</ul> 
    </div>
  )
}

export default SideNavbar

