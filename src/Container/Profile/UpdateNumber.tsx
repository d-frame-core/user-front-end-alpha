import { Box } from '@mui/material'
import { style } from '@mui/system'
import React from 'react'
import Profile from './Profile';

export default function UpdateNumber() {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height:'60%',
        width: "40%",
        bgcolor: 'background.paper',
        boxShadow: 24,
        border:'0',
        p: 4,
        borderRadius:'1.1vh',
      };
      
{/*
const auth = getAuth();
(window as any).recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response : any) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
}, auth);

const onSignInSubmit = () =>{
   
    var phoneNumber = '+919787263980';
    const appVerifier = (window as any).recaptchaVerifier;
    
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          (window as any).confirmationResult = confirmationResult;
          // ...
          
        }).catch((error:any) => {
          // Error; SMS not sent
          // ...
          console.log('error')
        });
}*/}
  return (
    <>
    <div>
        <Profile/>
        <div> Update Number</div>
       
            <form >
            
            <div>Phone Number: <input type='number' name='mobile' placeholder='Mobile Number'/></div>
            <button>Send OTP</button>
            </form>
            <div>Enter OTP: <input type='number' name='otp' placeholder='Enter OTP'/></div>
            <button>Submit</button>
       
    </div>
    </>
  )
}
