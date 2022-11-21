import React from 'react'

import Sidebar1 from '../../components/sidebar1/Sidebar1';
import './wallet.css';
export default function Wallet() {
  return (
    <div>
      
      <Sidebar1/>
      <div className='Wallet'>
        <div className='wrectangle'>
          <div className='wr1'></div>
          <div className='wr2'></div>
          <div className='wr3'></div>
          <div className='wr4'></div>
          <div className='wr5'></div>

            <div className='wtext'>
              <div className='wtext8'>Wallet</div>
              <div className='wtext1'>Total DFT Earnings</div>
              <div className='wtext2'>DFT 0.000</div>
              <div className='wtext3'>Your Wallet Address</div>
              <div className='wtext4'>Withdraw Your Earnings</div>
              <div className='wtext5'>Enter Amount</div>
              <div className='wtext7'>Recipient Wallet Address</div>
            </div>
            
            <div className='winput'>
                <input className='winput1' type='text' placeholder='0x0000000000000000000000000000000000000000' />
                <input className='winput2' type='text'  />
                <input className='winput3' type='text' placeholder='Enter Recipient wallet address' />
                <button className='wbutton1'>Terms & Condition</button>
                <button className='wbutton2'>Send</button>
            </div>  
      </div>
      
      </div>
    </div>
  )
}
