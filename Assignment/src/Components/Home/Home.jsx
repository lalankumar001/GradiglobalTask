import React from 'react'
import AccountBlock from '../Pages/AccountBlock/AccountComponent'
import KycBlock from '../Pages/KycBlock/KycCompontnt'
import CardBlock from '../Pages/CardBlock/CardComponent'
import FacilityBlock from '../Pages/FacilitiesBlock/FacilityComponent'
import FeaturesBlock from '../Pages/FeaturesBlock/FeaturesComponent'
import WalletHistory from '../WalletHistory/walletHistory'
import WithdrawHistory from '../WalletHistory/WithdrawHistory'

const Home = () => {
  return (
    <div >
      <div className='p-3'>
        <p className='text-danger'>Any Help: support@globalbusinesspays.com</p>
      </div>
 {/* Fist row , including AccountBlock , VisaCardBlock and KycBlock */}
    <div class="row">
    <div class="col-5">
    <AccountBlock />
    </div>
    <div class="col-4">
      <KycBlock />
    </div>
    <div class="col-3">
      <CardBlock />
    </div>
    </div>
{/* Second row, including Facilities and features  */}
    <div class="row">
    <div class="col-5 mt-2">
    <FacilityBlock />
    </div>
    <div class="col-7 mt-1">
      <FeaturesBlock />
    </div>
    </div>
  {/* START Wallet Transition Section  */}
    <div class="row">
    <div class="col-12">
    <WalletHistory />
    </div>
    </div>
    {/* END Wallet Transition Section  */}
    <div class="row">
    <div class="col-12">
    <WithdrawHistory />
    </div>
    </div>

    </div>
  )
}

export default Home