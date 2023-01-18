import { Box, Step, StepLabel, Stepper,Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
// import HorizontalLabelPositionBelowStepper from '../../../components/stepper/HorizontalLabelPositionBelowStepper'
import UploadButtons from '../../../components/upload/UploadButtons'
import CaptureButtons from '../../../components/upload/CaptureButton'
import data from '../data'
import './kyc2.css'
import df from '../../../assets/dframe.png'


export default function KYC2() {
  return (
    <Container>
        <Sidebar1/>
        
        <Box className='ky2rectangle'>
        <div className='level'>KYC Level-2:</div>
            <div className='k0' style={{fontSize:'24px', fontWeight:500}}>Photo:<br/><span style={{fontSize:'0.9rem', fontWeight:400 }}>
              Please pose while holding Photo ID in your hand to make it readable.</span>
              <div className='up'><CaptureButtons/>
              <span className='Image-warnings' style={{fontSize:'0.8rem', fontWeight:400}}>
                <span style={{color:'red'}}>*</span>
                Upload your images less than or equal to 
                <b style={{color:'red'}}> 2 MB</b> in .jpg or .png format</span>
                </div>
                </div>
            <div  className='k1' style={{fontSize:'24px', fontWeight:500}}>Government Verification 1: 
            
            <br/><span style={{fontSize:'0.9rem',textAlign:'left' , fontWeight:400}}> 
            Passport, Aadhar Card, Driving License, Voter ID, PAN Card etc.</span>
            <div className='up'><UploadButtons/>
            <span className='Image-warnings-2' style={{fontSize:'0.8rem', fontWeight:400}}>
                <span style={{color:'red'}}>*</span>
                Upload your images less than or equal to 
                <b style={{color:'red'}}> 2 MB</b> in .jpg or .png format</span>
            </div></div>
            <div className='k2' style={{fontSize:'24px', fontWeight:500}}>Government Verification 2:<br/>
            <span style={{fontSize:'0.9rem',textAlign:'left' , fontWeight:400}}> 
            Electricity Bill, Phone Bill etc.</span> <div className='up'><UploadButtons/>
            <span className='Image-warnings-3' style={{fontSize:'0.8rem', fontWeight:400}}>
                <span style={{color:'red'}}>*</span>
                Upload your images less than or equal to 
                <b style={{color:'red'}}> 2 MB</b> in .jpg or .png format</span>
            </div></div>
            <img src={df} alt='logo' className='logo-step-2'/> 

            <div className='step-2'>  <Box sx={{ width: '300%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {data.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box></div>
    <NavLink style={{textDecoration:'none'}} to='/successful'><Button sx={{backgroundColor:'#017EFA', borderRadius:'10px',textTransform:'inherit'}} variant='contained' className='next-btn'>Submit</Button></NavLink>
    <NavLink style={{textDecoration:'none'}} to='/kyc1'><Button sx={{backgroundColor:'#017EFA', borderRadius:'10px', textTransform:'inherit'}} variant='contained' className='back-btn'>Back</Button></NavLink>

        </Box>
    </Container>
  )
}
