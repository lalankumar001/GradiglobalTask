import React from 'react'
import '../../../App.css'
import WalletHistory from '../../../Components/WalletHistory/walletHistory'


const Transitions = () => {
  return (
<div className='HomePage'>
      <div className='text-danger p-3'>
        <p>Any Help: support@globalbusinesspays.com</p>
      </div>
        <div>
        <div className="card">
          <span className='p-3 mt-2'>Mine Your First Crypto In Just 4 Hours</span>    
  <div className="card-header mt-2">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="true" href="#">Packegs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info">Transactions</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-info">Transactions</a>
      </li>
    </ul>
  </div>
  {/* wallet history component call here */}
<WalletHistory />

        </div>
     </div>
    </div>
  )
}

export default Transitions