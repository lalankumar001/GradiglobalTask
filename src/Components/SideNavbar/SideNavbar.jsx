import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
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
  <Link to='/dashboard' className="nav-link fs-6 fw-bold p-3 text-white shadow"><MdOutlineHome  className='fs-3'/> Dashboard </Link>
  </li>
  <li className="nav-item">
   <Link to='/kyc'className="nav-link fs-6 fw-semibold p-3 text-white"><FiPaperclip className='fs-3' /> KYC Status </Link>
  </li>
  <li className="nav-item">
   <Link to='card' className="nav-link fs-6 fw-semibold p-3 text-white"><FiCreditCard className='fs-3'/> Visa Card</Link>
  </li>
  <li className="nav-item">
   <Link to='/fund' className="nav-link fs-6 fw-semibold p-3 text-white"><FiPlus className='fs-3'/> Fund Wallet</Link>
  </li>
  <li className="nav-item">
  <Link to='/wallet' className="nav-link fs-6 fw-semibold p-3 text-white" ><GrGoogleWallet  className='fs-3'/> Wallet Transfer</Link>
  </li>
  <li className="nav-item">
   <Link to='withdraw' className="nav-link fs-6 fw-semibold p-3 text-white" ><TfiBag className='fs-3'/> Withdrawal</Link>
  </li>
  <li className="nav-item">
   <Link to='whelloffortune' className="nav-link fs-6 fw-semibold p-3 text-white" ><TfiMedallAlt className='fs-3'/> Whell of Fortune</Link>
  </li>
  <li className="nav-item">
   <Link to='/btcmining' className="nav-link fs-6 fw-semibold p-3 text-white"><TbCurrencyBitcoin className='fs-3' /> BTC Mining</Link>
  </li>
  <li className="nav-item">
   <Link to='/transitions' className="nav-link fs-6 fw-semibold p-3 text-white"><MdFormatAlignCenter className='fs-3'/> Transactions</Link>
  </li>
 
</ul> 
    </div>
  )
}

export default SideNavbar

