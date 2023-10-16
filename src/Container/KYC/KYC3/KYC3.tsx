/** @format */

import { Box, Step, StepLabel, Stepper, Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
// import HorizontalLabelPositionBelowStepper from '../../../components/stepper/HorizontalLabelPositionBelowStepper'
import UploadButtonForKYC from '../../../components/upload/UploadButtonForKYC';
import CaptureButtons from '../../../components/upload/CaptureButton';
import data from '../data';
import './kyc3.css';
import df from '../../../assets/dframe.png';
import Drawer from '../../../components/sidebar1/Drawer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { MyContext } from '../../../components/context/Context';
import toast from 'react-hot-toast';
import { useAccount } from 'wagmi';

export default function KYC3() {
  const [governmentProof1, setGovernmentProof1] = useState<any>(null);
  const [governmentProof2, setGovernmentProof2] = useState<any>(null);
  const [userPhoto, setUserPhoto] = useState<any>(null);
  const navigate = useNavigate();

  const { userDataa } = useContext(MyContext);
  var { address, isConnected }: any = useAccount();
  const isValidFileExtension = (file: any) => {
    const allowedExtensions = ['jpeg', 'png'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
  };
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    toast.loading('Uploading Proof', { id: '1' });
    if (!governmentProof1 || !governmentProof2 || !userPhoto) {
      toast.error('Select All files', { id: '1' });
      return;
    }
    if (
      (governmentProof1 && !isValidFileExtension(governmentProof1)) ||
      (governmentProof2 && !isValidFileExtension(governmentProof2)) ||
      (userPhoto && !isValidFileExtension(userPhoto))
    ) {
      // Invalid file type(s), show an error toast
      toast.error('Only JPEG and PNG files are supported', { id: '1' });
      return;
    }

    const formData = new FormData();
    formData.append('idProof', governmentProof1);
    formData.append('addressProof', governmentProof2);
    formData.append('userPhoto', userPhoto);

    try {
      const publicAddress =
        localStorage.getItem('userPublicAddress') ||
        userDataa.publicAddress ||
        address;
      await axios
        .patch(
          `https://user-backend-402016.el.r.appspot.com/user/api/kyc3/${publicAddress}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          console.log(response);
          toast.success('Uploaded Image Succesfully', { id: '1' });
          setTimeout(() => {
            toast.remove();
            navigate('/successful');
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          toast.error('Error Uploading Image', { id: '1' });
        });
    } catch (error) {
      console.error('Error submitting KYC information:', error);
      toast.error('Error sdUploading Image', { id: '1' });
    }
  };

  return (
    <Container>
      <Header />
      <Sidebar1 />
      <a className='smopen'>{Drawer(0)}</a>
      <Box className='ky2rectangle'>
        <div className='level'>KYC Level-3:</div>
        <div
          className='k0'
          style={{ fontSize: '24px', fontWeight: 500 }}>
          Photo:
          <br />
          <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>
            Please pose while holding Photo ID in your hand to make it readable.
          </span>
          <div className='up'>
            <div className='cbtn'>
              <input
                type='file'
                accept='image/*'
                onChange={(e: any) => setUserPhoto(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div
          className='k1'
          style={{ fontSize: '24px', fontWeight: 500 }}>
          ID Proof:
          <br />
          <span
            style={{ fontSize: '0.9rem', textAlign: 'left', fontWeight: 400 }}>
            Passport, Aadhar Card, Driving License, Voter ID, PAN Card etc.
          </span>
          <div className='up'>
            <div className='cbtn'>
              <input
                type='file'
                accept='image/*'
                onChange={(e: any) => setGovernmentProof1(e.target.files[0])}
              />
            </div>
            <span
              className='Image-warnings'
              style={{ fontSize: '0.8rem', fontWeight: 400 }}>
              <span style={{ color: 'red' }}>*</span>
              Upload your images less than or equal to
              <b style={{ color: 'red' }}> 1 MB</b> in .jpg or .png format
            </span>
          </div>
        </div>
        <div
          className='k2'
          style={{ fontSize: '24px', fontWeight: 500 }}>
          Address Proof:
          <br />
          <span
            style={{ fontSize: '0.9rem', textAlign: 'left', fontWeight: 400 }}>
            Electricity Bill, Phone Bill etc.
          </span>{' '}
          <div className='up'>
            <div className='cbtn'>
              <input
                type='file'
                accept='image/*'
                onChange={(e: any) => setGovernmentProof2(e.target.files[0])}
              />
            </div>
            <span
              className='Image-warnings'
              style={{ fontSize: '0.8rem', fontWeight: 400 }}>
              <span style={{ color: 'red' }}>*</span>
              Upload your images less than or equal to
              <b style={{ color: 'red' }}> 1 MB</b> in .jpg or .png format
            </span>
          </div>
        </div>

        <div className='stepper-3'>
          <Box sx={{ width: '300%' }}>
            <Stepper
              activeStep={2}
              alternativeLabel>
              {data.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        <Button
          sx={{
            backgroundColor: '#017EFA',
            borderRadius: '10px',
            textTransform: 'inherit',
            width: '100px',
          }}
          variant='contained'
          className='nextbtn'
          onClick={handleFormSubmit}>
          Submit
        </Button>

        <NavLink
          style={{ textDecoration: 'none' }}
          to='/kyc2'>
          <Button
            sx={{
              backgroundColor: '#017EFA',
              borderRadius: '10px',
              textTransform: 'inherit',
              width: '100px',
            }}
            variant='contained'
            className='backbtn'>
            Back
          </Button>
        </NavLink>
      </Box>
    </Container>
  );
}
