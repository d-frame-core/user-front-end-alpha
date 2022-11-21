import React from 'react'
import './kyc1.css'
import HorizontalLabelPositionBelowStepper from '../../../components/stepper/HorizontalLabelPositionBelowStepper'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
export default function KYC1() {
  return (
    <div>
      <Sidebar1/>
      
      <div>
        <div className='title'>KYC Verification</div>
        <div className='Rectangle'>
          <div className='ktext1'>First Name: </div>
          <div className='ktext2'>Last Name:</div>
          <div className='ktext3'>Date of Birth:</div>
          <div className='ktext4'>Country:</div>
          <div className='ktext5'>Phone Number:</div>
          <div className='ktext6'>Gender:</div>
          <div className='ktext7'>Level-1:</div>
          <input className='kin1' placeholder=''/>
          <input className='kin2' placeholder=''/>
          <input className='kin3' placeholder=''/>
          <input className='kin4' placeholder=''/>
          <input className='kin5' placeholder=''/>
          <input className='kin6' placeholder=''/>

          <div className='label'><HorizontalLabelPositionBelowStepper/></div>
        </div>
      </div>
    </div>
  )
}
