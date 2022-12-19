import React from 'react'
import './profile.css'
import user from "../../assets/user.png";
import { NavLink } from 'react-router-dom';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


export default function Profile() {
  return (
    <div>
      <>{Sidebar1(1)}</>
      <Box className='prbox1'>
          <div className='prtext1'>Profile</div>
          <img src={user} alt='' className='primg'/>
        <Box className='contitem'>
          <div>Company Name : <a className='prfont'>Niranjan </a></div>
          <div>Company type  : <a className='prfont'>Type A</a></div>
          <div>Company Number  :<a className='prfont'>9800098000 </a><NavLink to='/update'><CreateOutlinedIcon sx={{color:'blue'}}/></NavLink></div>
          <div>Company email    : <a className='prfont'>abc@gmail.com</a><CreateOutlinedIcon sx={{color:'blue'}}/></div>
          <div>Company Address1: <a className='prfont'>address 1 </a><CreateOutlinedIcon sx={{color:'blue'}}/></div>
          <div>Company Address2: <a className='prfont'>Address 2</a><CreateOutlinedIcon sx={{color:'blue'}}/></div>
          <div>Wallet Address : <a className='prfont'>0x000000000000000</a></div>
        </Box>
        
      </Box>
      <Box className="kycitem">
          <div className='kyctitle'>KYC Verification</div>
          <p>This Verification makes us aware that you are a valid user. It may take upto 24 hours.</p>
          <NavLink to="/kyc1" style={{textDecoration:'none'}}><Button  variant='contained'>Verify</Button></NavLink>
        </Box>
    </div>
    )
}
