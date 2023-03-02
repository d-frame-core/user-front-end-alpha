import React, { useState } from 'react'
import './profile.css'
import user from "../../assets/user.png";
import { NavLink } from 'react-router-dom';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {  OAuthCredential, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import { authentication } from '../../Firebase';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop/Backdrop';
import { userdata } from './FirstPage';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import EditButton from '../../components/upload/EditButton';




 function Profile() {
  
  const[successful,setSuccessful]=useState(false);


    const [popshow,setPopShow]=useState(false);

    authentication.languageCode = 'en';

    const countrycode='+91';

    const [otp,setOtp]=useState('');
    
    const [phonenumber,setPhoneNumber]=useState(countrycode);
    
    const generaterecaptcha = ()=>{
      (window as any).recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        lang:'https://www.google.com/recaptcha/api.js?render=reCAPTCHA_site_key&lang=en'
        ,
        'callback': (response:any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          
        }
      }, authentication);
    }
   
  
      const sendotp=(e:any)=>{
            e.preventDefault();
            generaterecaptcha();

            let appVerifier=(window as any).recaptchaVerifier;

            signInWithPhoneNumber(authentication,phonenumber,appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              (window as any).confirmationResult = confirmationResult;
              // ...
            }).catch((error:any) => {
              // Error; SMS not sent
              // ...
              console.log(error)
            });
      }
    const verifyOtp=(e:any)=>{
          e.preventDefault();

          let confirmationResult = (window as any).confirmationResult;

          confirmationResult.confirm(otp).then((result:any) => {
              // User signed in successfully.
              const user = result.user;
              console.log('it is working')
              setPopShow(false);
              // ...
            }).catch((error:any) => {
              // User couldn't sign in (bad verification code?)
              // ...
            });
      
    }
    const signInWithGoogle =()=>{
      const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
  .then((result:any) => {
    console.log(result)
  }).catch((error : any) => {
    console.log(error)
  });
}


  return (
    <div>
      <>{Sidebar1(1)}</>      
        <Box className='profilebox' sx={{display:"flex"}}>
          <Container maxWidth={false} sx={{maxWidth:'85%',display:'flex'}} className='prbox1'>
            
            <div className='prtext1'>Profile</div>

            <img src={user} alt='' className='primg'/>
             
              <Container maxWidth={false} sx={{maxWidth:'60%',display:'flex'}} className='contitem'>
                <div><a className='pr'>First Name</a><a className='colon1'>:</a><a className='prfont' >Niranjan</a></div>
                <div><a className='pr'>Last Name</a><a className='colon1'>:</a><a className='prfont' >babu</a></div>
                <div><a className='pr'>Number</a><a className='colon1'>:</a><a className='prfont' >{phonenumber} <a onClick={()=>setPopShow(true)}><CreateOutlinedIcon   sx={{color:'#47B5FF',top:'4px',left:'15%',position:'relative'}} /></a></a></div>
                <div><a className='pr'>Email</a><a className='colon1'>:</a><a className='prfont'>abc@gmail.com<a onClick={signInWithGoogle}><CreateOutlinedIcon sx={{color:'#47B5FF',top:'4px',left:'15%',position:'relative'}}/></a></a></div>
                <div><a className='pr'>Address 1</a><a className='colon1'>:</a><a className='prfont'>address 1 <a ><EditButton/></a></a></div>
                <div><a className='pr'>Address 2</a><a className='colon1'>:</a><a className='prfont'>Address 2<EditButton/></a></div>
                <div><a className='pr'>Wallet Address</a><a className='colon1'>:</a><a className='prfont'>0x000000000000000</a></div>
              </Container>
        
          </Container>
        
          {!successful &&<Container maxWidth={false} sx={{maxWidth:'85%', minHeight:'24vh'}}className="kycitem">
          <>
             <div className='kyctitle'>KYC Verification</div>
          
            <p>This Verification makes us aware that you are a valid user. It may take upto 24 hours.</p>
          
            <NavLink to="/kyc1" style={{textDecoration:'none',position:'relative',top:'1vh'}}>
              <button className='pbtn1'>Verify</button>
            </NavLink>
            {

            }
            </>
          </Container>}
         
          {successful && <Container maxWidth={false} sx={{maxWidth:'85%', minHeight:'15vh',position:'relative',bottom:'4vh'}}className="kycitem">
            <p>Successfully KYC verification part is completed</p>
          </Container>}

          </Box>
            {popshow && <Backdrop open={popshow} sx={{  zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        
              <Box  className='update'>
                <div className='uphead'>Update Number</div>
                  <a className='upa'>Phone Number<a className="colonpop">:</a> <input className='uin'name='phonenumber' type='tel' value={phonenumber} onChange={(e)=> setPhoneNumber(e.target.value)}/></a>
                  <button className='upbtn'onClick={sendotp}>Send OTP</button>
                  <a className='upa'>Enter Reason<a className="colonpop">:</a><input className='uin'/></a>
                  <div id='recaptcha-container'></div>
                  <a className='upa'>Enter OTP <a className="colonpop">:</a><input className='uin' name='otp'  value={otp} onChange={(e)=>setOtp(e.target.value)}/></a>
                  <button className='upbtn' onClick={verifyOtp}>Save</button>
                  <div></div>
                  <CloseIcon onClick={()=>setPopShow(false)} className='cross'/>
              </Box>
            </Backdrop>
            
            }
    </div>
    )
}

export default Profile
