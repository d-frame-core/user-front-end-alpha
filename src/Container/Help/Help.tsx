import React from 'react'
import './help.css';
import { Container } from '@mui/material';
import Sidebar1 from '../../components/sidebar1/Sidebar1';

export default function Help() {
  return (
    
    <div>
      <Sidebar1/>
      <div className='title'>Help</div>
      <div className='htext2'>Read More</div>
      <div className='htext3'>Privacy Policy</div>
      <div className='htext4'>Support</div>
      <div className='htext5'>Terms of Service</div>
      <div className='htext6'>FAQs</div>

      <button className='hrect1'></button>
      <button className='hrect2'></button>
      <button className='hrect3'></button>
      <button className='hrect4'></button>
      <button className='hrect5'></button>
      <div className='hrect6'></div>
    </div>
    
  )
}

