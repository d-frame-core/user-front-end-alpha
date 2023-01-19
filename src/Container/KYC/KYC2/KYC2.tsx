import { Box, Step, StepLabel, Stepper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import HorizontalLabelPositionBelowStepper from '../../../components/stepper/HorizontalLabelPositionBelowStepper'
import UploadButtons from '../../../components/upload/UploadButtons'
import data from '../data'
import './kyc2.css'
import df from '../../../assets/dframe.png'


export default function KYC2() {
  return (
    <div>
        <>{Sidebar1(1)}</>
        <div className='title'>KYC Verification</div>
        <Box className='ky2rectangle'>
        <div className='level'>Level-2</div>
            <div className='k0'><b>Photo:</b><div className='up'></div></div>
            <div className='k1'><b>Government Verification 1:</b> (Photo proof)<div className='up'></div></div>
            <div className='k2'><b>Government Verification 2:</b> (Address proof)<div className='up'></div></div>
            <img src={df} alt='' className='kyc2'/> 

            <div className='label'>  <Box sx={{ width: '300%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {data.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box></div>
    <NavLink to='/kyc3'><button className='kybtn'>Next</button></NavLink>

        </Box>
    </div>
  )
}
