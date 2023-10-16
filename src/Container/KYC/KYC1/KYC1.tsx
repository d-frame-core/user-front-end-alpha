/** @format */

import { useState, useContext } from 'react';
import './kyc1.css';
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from '@mui/material';
import df from '../../../assets/dframe.png';
import data from '../data';
import { Backdrop } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import Drawer from '../../../components/sidebar1/Drawer';
import Cookies from 'js-cookie';
import { OAuthCredential, signInWithPhoneNumber } from 'firebase/auth';
import { RecaptchaVerifier } from 'firebase/auth';
import { authentication } from '../../../Firebase';
import CloseIcon from '@mui/icons-material/Close';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Header from '../../../components/Header/Header';
import { MyContext } from '../../../components/context/Context';
import toast from 'react-hot-toast';
export var userdata: any = {};

type FormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: number;
};

export default function KYC1() {
  const [dis, setDis] = useState(true);
  const navigate = useNavigate();
  const { userDataa, setUserData } = useContext(MyContext);
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    if (!userDataa) {
      alert('Sign In Again');
      navigate('/');
      return;
    }
    if (userDataa.kyc1.status === true) {
      navigate('/kyc2');
      return;
    }
    if (
      data.firstName.length < 1 ||
      data.lastName.length < 1 ||
      data.email.length < 1 ||
      data.userName.length < 1
    ) {
      toast.error('Fill all Details');
      return;
    }
    toast.loading('Submitting KYC level 1', { id: '1' });
    axios
      .patch(
        `http://localhost:8080/user/api/kyc1/${userDataa.publicAddress}`,
        data
      )
      .then((res) => {
        toast.success('Submitted KYC level 1 successfully', { id: '1' });
        console.log(res);
      })
      .catch((error) => {
        toast.error('Error submitting KYC level 1', { id: '1' });
        console.log(error);
      });
    setTimeout(() => {
      toast.remove();
      navigate('/kyc2');
    }, 1000);
  };

  const [field, setField] = useState('');
  const [fieldopen, setFieldOpen] = useState(false);

  // const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [popshow, setPopShow] = useState(false);

  authentication.languageCode = 'en';
  const countrycode = '+91';
  const [number, setnumber] = useState(countrycode);
  const generaterecaptcha = () => {
    (window as any).recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        lang: 'https://www.google.com/recaptcha/api.js?render=reCAPTCHA_site_key&lang=en',
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };

  const sendotp = (e: any) => {
    e.preventDefault();
    generaterecaptcha();

    let appVerifier = (window as any).recaptchaVerifier;

    signInWithPhoneNumber(authentication, number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        (window as any).confirmationResult = confirmationResult;
        // ...
      })
      .catch((error: any) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };
  const verifyOtp = (e: any) => {
    e.preventDefault();
    toast.loading('Verifying OTP', { id: '5' });

    let confirmationResult = (window as any).confirmationResult;

    confirmationResult
      .confirm(otp)
      .then((result: any) => {
        // User signed in successfully.
        const user = result.user;
        toast.success('Verified OTP', { id: '5' });
        setPopShow(false);
        // setDis(false);
        // ...
        setTimeout(() => {
          toast.remove();
        }, 1000);
      })
      .catch((error: any) => {
        // User couldn't sign in (bad verification code?)
        // ...
        toast.error('Error verifying code', { id: '5' });
      });
  };

  return (
    <>
      <Header />
      <div className='sb'>
        <Sidebar1 />
      </div>
      <a className='smopen'>{Drawer(0)}</a>

      <div>
        <div className='container'>
          <Box className='kyc-rectangle'>
            <div className='body'>
              <Box
                sx={{ top: '45vh' }}
                className='fbox1'>
                <div className='ftitle'>KYC Level-1:</div>

                <form
                  className='fbox2'
                  onSubmit={handleSubmit(onSubmit)}>
                  {userDataa && userDataa.kyc1.status === 'unverified' && (
                    <div className='submittedDiv'>
                      <div>You have already submitted your KYC1 details.</div>
                      <button
                        onClick={() => navigate('/kyc2')}
                        className='submittedButton'>
                        Next
                      </button>
                    </div>
                  )}
                  {userDataa && userDataa.kyc1.status === 'unsubmitted' && (
                    <>
                      <div className='alignleft'>
                        First Name
                        <a className='colon'>
                          :
                          <input
                            className='in'
                            {...register('firstName')}
                            required={true}
                          />
                          {/* <input className='in' type='text' name='firstname' value={firstname} onChange={(e)=>setfirstName(e.target.value)} required={true} /> */}
                        </a>
                      </div>
                      <div className='alignleft'>
                        Last Name
                        <a className='colon'>
                          :
                          <input
                            className='in'
                            {...register('lastName')}
                            required={true}
                          />
                          {/* <input className='in' type='text' name='lastname' value={lastname} onChange={(e)=>setlastName(e.target.value)} required={true} /> */}
                        </a>
                      </div>
                      <div className='alignleft'>
                        User Name
                        <a className='colon'>
                          :
                          <input
                            className='in'
                            {...register('userName')}
                            required={true}
                          />
                          {/* <input className='in' type='text' name='username' value={username} onChange={(e)=>setuserName(e.target.value)} required={true} /> */}
                        </a>
                      </div>

                      <div className='alignleft'>
                        Phone Number
                        <a className='colon'>
                          :{/*<input className='in'  required={true}/>*/}
                          {
                            <input
                              className='in'
                              type='tel'
                              {...register('phoneNumber')}
                              value={number}
                              onChange={(e) => setnumber(e.target.value)}
                              required={true}
                            />
                          }
                        </a>
                      </div>

                      <div className='alignleft'>
                        Email
                        <a className='colon'>
                          :
                          <input
                            className='in'
                            {...register('email')}
                            required={true}
                          />
                          {/* <input className='in' type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required={true} /> */}
                        </a>
                      </div>
                    </>
                  )}
                  {userDataa && userDataa.kyc1.status == 'unsubmitted' && (
                    <button
                      type='submit'
                      className='btnup'>
                      Submit
                    </button>
                  )}
                  {/* <input type="submit" /> */}
                </form>
                {userDataa && userDataa.kyc1.status == 'unsubmitted' && (
                  <button
                    className='verifyph'
                    onClick={() => setPopShow(true)}>
                    Verify
                  </button>
                )}
              </Box>
              <Backdrop open={fieldopen}>
                <Box className='fillbox'>
                  <div className='a1'>Please Fill in the {field}</div>
                  <button
                    className='a2'
                    onClick={() => setFieldOpen(false)}>
                    Okay
                  </button>
                </Box>
              </Backdrop>
            </div>
            {popshow && (
              <Backdrop
                open={popshow}
                sx={{
                  zIndex: (theme: { zIndex: { drawer: number } }) =>
                    theme.zIndex.drawer + 1,
                }}>
                <Box className='update'>
                  <div className='uphead'>Update Number</div>
                  <a className='upa'>
                    Phone Number<a className='colonpop'>:</a>{' '}
                    <input
                      className='uin'
                      name='phoneNumber'
                      type='tel'
                      value={number}
                      onChange={(e: any) => setnumber(e.target.value)}
                    />
                  </a>
                  <button
                    className='upbtn'
                    onClick={sendotp}>
                    Send OTP
                  </button>
                  <a className='upa'>
                    Enter Reason<a className='colonpop'>:</a>
                    <input className='uin' />
                  </a>
                  <div id='recaptcha-container'></div>
                  <a className='upa'>
                    Enter OTP <a className='colonpop'>:</a>
                    <input
                      className='uin'
                      name='otp'
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </a>
                  <button
                    className='upbtn'
                    onClick={verifyOtp}>
                    Save
                  </button>

                  <CloseIcon
                    onClick={() => setPopShow(false)}
                    className='cross'
                  />
                </Box>
              </Backdrop>
            )}
            <div className='step-1'>
              {' '}
              <Box sx={{ width: '250%' }}>
                <Stepper
                  activeStep={0}
                  alternativeLabel>
                  {data.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
