import { Box, Step, StepLabel, Stepper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import data from '../data'
import './kyc3.css'
import df from '../../../assets/dframe.png'

export default function KYC3() {
  return (
    <Container>
       <>{Sidebar1(1)}</>
            <Box className='ky3rectangle'>
            <img src={df} alt='' className='kyc3'/> 
            <div className='kyc3box'></div>
                 <div className='label'><Box sx={{ width: '300%' }}><Stepper activeStep={3} alternativeLabel>
        {data.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper></Box></div>
      <NavLink to='/successful'><button className='kybtn'>Next</button></NavLink>

      </Box>          
        
    </Container>
    )
}
