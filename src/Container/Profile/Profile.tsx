import React from 'react'
import './profile.css'
import user from "../../assets/user.png";

import { NavLink } from 'react-router-dom';
import Sidebar1 from '../../components/sidebar1/Sidebar1';

export default function Profile() {
  return (
    
    <div>
      <Sidebar1/>
      <img src={user} alt='' className='pruser'/>
      <div className='prinput'>
        <input className='prinput1'placeholder='FirstName:'></input>
        <input className='prinput2' placeholder='LastName:'></input>
        <input className='prinput3'placeholder='Email:'></input>
        <input className='prinput4' placeholder='Phone Number:'></input>
        <input className='prinput5' placeholder='User Name:'></input>
        <div className='prtext1'><b>Profile Improvement:</b>This enable us to know about you better and show more relevant Ads</div>
      </div>
      <div className='prRectangle'>
        <div className='prrect1'></div>
        <div className='prrect2'></div>
      </div>
      <div className='prbutton'>
        <NavLink to='/survey'><button className='prbtn1'>Survey</button></NavLink>
        <button className='prbtn2'>Save</button>
        <NavLink to='/kyc1'><button className='prbtn3'>3 Level Verification</button></NavLink>
      </div>
      <div className='prtext8'>Profile</div>
      <div className='prtext2'>Full Name:</div>
      <div className='prtext3'>Email:</div>
      <div className='prtext4'>Phone Number:</div>
      <div className='prtext5'>User Name:</div>
      <div className='prtext6'>KYC Verification(I,II,III)</div>
      <div className='prtext7'>This Verification makes us aware that you are a valid user. It may take upto 24 hours.</div>
    </div>
  )
}
