import { Stepper, Step, StepLabel } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import df from '../../assets/dframe.png'
import Sidebar1 from '../../components/sidebar1/Sidebar1'
import './success.css'
import data from './data'

export default function Success() {
  return (
    <Container>
        <Sidebar1/>
        <Box className='sucbox'>
            <img src={df} alt='' className='success1'/><br/>
            <div className='ww'>You have successfully completed the KYC Verification process ,
Thank you and Enjoy your journey with D Frame Privacy.</div>
            
           
           <img src={df} alt='' className='success2'></img>  
           <div className='label'><Box sx={{ width: '300%' }}><Stepper activeStep={3} alternativeLabel>
        {data.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper></Box></div>
      <NavLink to='/profile'><button className='kybtn'>Finish</button></NavLink>
        </Box>
    </Container>

  )
}
