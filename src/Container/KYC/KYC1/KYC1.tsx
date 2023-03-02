import React from 'react'
import './kyc1.css'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import { Box, Button, Container, Step, StepLabel, Stepper } from '@mui/material'
import { NavLink } from 'react-router-dom'
import data from '../data'
import df from '../../../assets/dframe.png'


export default function KYC1() {
  return (
    <div>
     <>{Sidebar1(1)}</>
      
      <div>
        <div className='title'>KYC Verification</div>
        <Box className='ky1rectangle'>
          <div className='level'>Level-1:</div>
          <div className='ktext1'>First Name: <input className='i' placeholder=''/></div>
          <div className='ktext2'>Last Name: <input className='i' placeholder=''/></div>
          <div className='ktext3'>Date of Birth: <input className='i' placeholder=''/></div>
          <div className='ktext4'>Country: <input className='i' placeholder=''/></div>
          <div className='ktext5'>Phone No:<input className='i' placeholder=''/></div>
          <div className='ktext6'>Gender:<input className='i' placeholder=''/></div>
          <img src={df} alt='' className='kyc1'/> 
          <div className='label'><Box sx={{ width: '300%' }}><Stepper activeStep={3} alternativeLabel>
        {data.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper></Box></div>
          <NavLink to='/kyc2'><button className='kybtn'>Next</button></NavLink>
        </Box>
      </div>
    </div>
  )
}
