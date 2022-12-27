import React, { useState } from 'react'
import './profile.css'
import user from "../../assets/user.png";
import { NavLink } from 'react-router-dom';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import list from './FirstPage'

export default function Profile() {
   {console.log(list)}
  return (
    <div>
<>{Sidebar1(1)}</>      
<Box className='profilebox' sx={{display:"flex"}}>
        <Container maxWidth={false} sx={{maxWidth:'80%',display:'flex'}} className='prbox1'>
          <div className='prtext1'>Profile</div>
          <img src={user} alt='' className='primg'/>
         <Container maxWidth={false} sx={{maxWidth:'60%',display:'flex'}} className='contitem'>
          <div><a className='pr'>First Name : </a>    <a className='prfont' >Niranjan </a></div>
          <div><a className='pr'>Last Name :  </a>     <a className='prfont' >babu</a></div>
          <div><a className='pr'>Number  :    </a>     <a className='prfont' >9800098000 <CreateOutlinedIcon sx={{color:'blue'}}/></a></div>
          <div><a className='pr'>email    :   </a>     <a className='prfont'>abc@gmail.com<CreateOutlinedIcon sx={{color:'blue'}}/></a></div>
          <div><a className='pr'>Address1:    </a>     <a className='prfont'>address 1 <CreateOutlinedIcon sx={{color:'blue'}}/></a></div>
          <div><a className='pr'>Address2:    </a>     <a className='prfont'>Address 2<CreateOutlinedIcon sx={{color:'blue'}}/></a></div>
          <div><a className='pr'>Wallet Address : </a> <a className='prfont'>0x000000000000000</a></div>
        </Container>
        </Container>
        <Container maxWidth={false} sx={{maxWidth:'80%', minHeight:'28vh'}}className="kycitem">
          <div className='kyctitle'>KYC Verification</div>
          <p>This Verification makes us aware that you are a valid user. It may take upto 24 hours.</p>
          <NavLink to="/kyc1" style={{textDecoration:'none'}}><Button  variant='contained'>Verify</Button></NavLink>
        </Container>
        </Box>
    </div>
    )
}
