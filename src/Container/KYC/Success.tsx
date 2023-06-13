import { Stepper, Step, StepLabel, Button } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import df from '../../assets/dframe.png'
import Sidebar1 from '../../components/sidebar1/Sidebar1'
import './success.css'
import data from './data'
import Drawer from '../../components/sidebar1/Drawer'
import Header from '../../components/Header/Header'


export default function Success() {
  return (
    <Container>
      <Header/>
        <Sidebar1/>
        <a className='smopen'>
          {Drawer(0)}
        </a>
        <Box className='sucbox'>
            <img src={df} alt='' className='logo'/><br/>
            <div style={{fontWeight:'bold'}} className='ww'>You have successfully completed the KYC Verification process.
            <br/>Thank you!</div>
            
           
            
           <div className='step-3'><Box sx={{ width: '300%' }}><Stepper activeStep={4} alternativeLabel>
        {data.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper></Box></div>
      <NavLink style={{textDecoration:'none'}} to='/profile'><Button sx={{backgroundColor:'#017EFA', borderRadius:'10px',textTransform:'inherit'}} variant='contained' className='btn-step-3'>Finish</Button></NavLink>
        </Box>
    </Container>

  )
}
