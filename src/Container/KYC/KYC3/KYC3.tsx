/** @format */

import { Box, Step, StepLabel, Stepper, Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
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

export default function KYC3() {
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
              <CaptureButtons />
            </div>
          </div>
        </div>
        <div
          className='k1'
          style={{ fontSize: '24px', fontWeight: 500 }}>
          Government Verification 1:
          <br />
          <span
            style={{ fontSize: '0.9rem', textAlign: 'left', fontWeight: 400 }}>
            Passport, Aadhar Card, Driving License, Voter ID, PAN Card etc.
          </span>
          <div className='up'>
            <div className='cbtn'>
              <UploadButtonForKYC />
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
          Government Verification 2:
          <br />
          <span
            style={{ fontSize: '0.9rem', textAlign: 'left', fontWeight: 400 }}>
            Electricity Bill, Phone Bill etc.
          </span>{' '}
          <div className='up'>
            <div className='cbtn'>
              <UploadButtonForKYC />
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
        <NavLink
          style={{ textDecoration: 'none' }}
          to='/successful'>
          <Button
            sx={{
              backgroundColor: '#017EFA',
              borderRadius: '10px',
              textTransform: 'inherit',
              width: '100px',
            }}
            variant='contained'
            className='nextbtn'>
            Submit
          </Button>
        </NavLink>

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

// import React, { useContext, useState } from 'react';
// import { Box, Step, StepLabel, Stepper, Button } from '@mui/material';
// import { Container } from '@mui/system';
// import { NavLink } from 'react-router-dom';
// import Sidebar1 from '../../../components/sidebar1/Sidebar1';
// import UploadButtonForKYC from '../../../components/upload/UploadButtonForKYC';
// import CaptureButtons from '../../../components/upload/CaptureButton';
// import data from '../data';
// import './kyc3.css';
// import Drawer from '../../../components/sidebar1/Drawer';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../../components/Header/Header';
// import { MyContext } from '../../../components/context/Context';
// import { useAccount } from 'wagmi';

// // Define your KYC3 component
// export default function KYC3() {
//   const [photo, setPhoto] = useState<any>(null);
//   const [governmentProof1, setGovernmentProof1] = useState<any>(null);
//   const [governmentProof2, setGovernmentProof2] = useState<any>(null);
//   const { userDataa, setUserData } = useContext(MyContext);
//   var { address, isConnected }: any = useAccount();
//   const navigate = useNavigate();

//   // Function to handle file input change for KYC images
//   const handleImageChange = (event: any, imageType: any) => {
//     const file = event.target.files[0];
//     if (file) {
//       // Depending on the image type, set the state accordingly
//       if (imageType === 'photo') {
//         setPhoto(file);
//       } else if (imageType === 'governmentProof1') {
//         setGovernmentProof1(file);
//       } else if (imageType === 'governmentProof2') {
//         setGovernmentProof2(file);
//       }
//     }
//   };

//   // Function to upload KYC images
//   const uploadKYCImages = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('photo', photo);
//       formData.append('governmentProof1', governmentProof1);
//       formData.append('governmentProof2', governmentProof2);
//       const publicAddress =
//         localStorage.getItem('userAddress') ||
//         userDataa.publicAddress ||
//         address;

//       // Make a PATCH request to upload the images
//       await axios.patch(`http://localhost/api/kyc/${publicAddress}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Images uploaded successfully, you can navigate to the next page
//       alert('Submitted KYC3 data successfully');
//       setTimeout(() => {
//         navigate('/successful');
//       }, 1000);
//     } catch (error) {
//       // Handle error
//       alert('Error submitting KYC3 data');
//       setTimeout(() => {
//         navigate('/');
//       }, 1000);
//       console.error('Error uploading KYC images:', error);
//     }
//   };

//   return (
//     <Container>
//       <Header />
//       <Sidebar1 />
//       <a className='smopen'>{Drawer(0)}</a>
//       <Box className='ky2rectangle'>
//         {/* ... (Your existing JSX code) */}

//         {/* File input for KYC images */}
//         <div
//           className='k1'
//           style={{ fontSize: '24px', fontWeight: 500 }}>
//           Government Verification 1:
//           <br />
//           <span
//             style={{ fontSize: '0.9rem', textAlign: 'left', fontWeight: 400 }}>
//             Passport, Aadhar Card, Driving License, Voter ID, PAN Card etc.
//           </span>
//           <div className='up'>
//             <div className='cbtn'>
//               <input
//                 type='file'
//                 accept='.jpg, .png'
//                 onChange={(e) => handleImageChange(e, 'governmentProof1')}
//               />
//             </div>
//             <span
//               className='Image-warnings'
//               style={{ fontSize: '0.8rem', fontWeight: 400 }}>
//               <span style={{ color: 'red' }}>*</span>
//               Upload your images less than or equal to
//               <b style={{ color: 'red' }}> 1 MB</b> in .jpg or .png format
//             </span>
//           </div>
//         </div>

//         {/* File input for KYC images */}
//         <div
//           className='k2'
//           style={{ fontSize: '24px', fontWeight: 500 }}>
//           Government Verification 2:
//           <br />
//           <span
//             style={{ fontSize: '0.9rem', textAlign: 'left', fontWeight: 400 }}>
//             Electricity Bill, Phone Bill etc.
//           </span>{' '}
//           <div className='up'>
//             <div className='cbtn'>
//               <input
//                 type='file'
//                 accept='.jpg, .png'
//                 onChange={(e) => handleImageChange(e, 'governmentProof2')}
//               />
//             </div>
//             <span
//               className='Image-warnings'
//               style={{ fontSize: '0.8rem', fontWeight: 400 }}>
//               <span style={{ color: 'red' }}>*</span>
//               Upload your images less than or equal to
//               <b style={{ color: 'red' }}> 1 MB</b> in .jpg or .png format
//             </span>
//           </div>
//         </div>

//         {/* Submit button */}
//         <div className='stepper-3'>
//           <Button
//             sx={{
//               backgroundColor: '#017EFA',
//               borderRadius: '10px',
//               textTransform: 'inherit',
//               width: '100px',
//             }}
//             variant='contained'
//             className='nextbtn'
//             onClick={uploadKYCImages}>
//             Submit
//           </Button>
//         </div>
//         <NavLink
//           style={{ textDecoration: 'none' }}
//           to='/kyc2'>
//           <Button
//             sx={{
//               backgroundColor: '#017EFA',
//               borderRadius: '10px',
//               textTransform: 'inherit',
//               width: '100px',
//             }}
//             variant='contained'
//             className='backbtn'>
//             Back
//           </Button>
//         </NavLink>
//       </Box>
//     </Container>
//   );
// }
