/** @format */

import React, { useContext, useEffect, useState } from 'react';
import './profile.css';

import { NavLink } from 'react-router-dom';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { OAuthCredential, signInWithPhoneNumber } from 'firebase/auth';
import { RecaptchaVerifier } from 'firebase/auth';
import { authentication } from '../../Firebase';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop/Backdrop';
import { userdata } from './FirstPage';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import EditButton from '../../components/upload/EditButton';
import UploadButtons from '../../components/upload/UploadButtonForKYC';
import Drawer from '../../components/sidebar1/Drawer';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { MyContext } from '../../components/context/Context';
import toast from 'react-hot-toast';
import KYC2 from '../KYC/KYC2/KYC2';

const firebaseConfig = {
  apiKey: 'AIzaSyCYpkhlVsy1eO1vVuRNpa6l1CWONEKiXU8',
  authDomain: 'client-dashboard-2.firebaseapp.com',
  projectId: 'client-dashboard-2',
  storageBucket: 'client-dashboard-2.appspot.com',
  messagingSenderId: '578943720826',
  appId: '1:578943720826:web:d6d52242c9743e540d0ac3',
};

function Profile() {
  const [successful, setSuccessful] = useState(false);
  const { userDataa, setUserData, image, setImage, setUserToken } =
    useContext(MyContext);
  var { address, isConnected }: any = useAccount();

  let [gmail, setgmail] = useState('');

  var [ref, setRef] = useState('');

  const [popshow, setPopShow] = useState(false);

  const [popshow1, setPopShow1] = useState(false);

  const [address1, setAddress1] = useState<string | null | any>('');
  const [address2, setAddress2] = useState<string | null | any>('');

  const [imageSelected, setImageSelected] = useState(false);
  const [addressProof2File, setAddressProof2File] = useState<File | null>(null);

  authentication.languageCode = 'en';

  const countrycode = '+91';

  const [otp, setOtp] = useState('');

  const [phonenumber, setPhoneNumber] = useState(countrycode);

  const [profileImage, setProfileImage] = useState<any>('');

  const [userImage, setUserImage] = useState<any>(null);

  const [confirmationResult, setConfirmationResult] = useState(null);

  const [updatedField, setUpdatedField] = useState({});

  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState('');

  const connectToPolygonMainnet = async () => {
    if ((window as any).ethereum) {
      const chainId = await (window as any).ethereum.request({
        method: 'eth_chainId',
      });

      // Check if connected to a different network (not Polygon mainnet)
      if (chainId !== '0x89') {
        // ChainId of Polygon mainnet is '0x89'
        try {
          await (window as any).ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x89' }],
          });
        } catch (error) {
          // Handle error
          console.log('Error while switching to Polygon mainnet:', error);
        }
      }
    } else {
      // Handle case where window.ethereum is not available (e.g., Metamask is not installed)
      console.log('Metamask not available');
    }
  };

  const checkMetamaskConnection = () => {
    if (!(window as any).ethereum?.selectedAddress) {
      // Metamask wallet disconnected, redirect to root route
      navigate('/');
    }
  };
  const handleWalletDisconnect = () => {
    if (!(window as any).ethereum?.selectedAddress) {
      // Metamask wallet disconnected
      navigate('/');
    }
  };

  useEffect(() => {
    // Listen for changes in the selected address property
    if ((window as any).ethereum) {
      (window as any).ethereum.on('accountsChanged', handleWalletDisconnect);
    }
    checkMetamaskConnection();
    connectToPolygonMainnet();
  }, [(window as any).ethereum]);

  useEffect(() => {
    checkMetamaskConnection();
    connectToPolygonMainnet();
  }, []);

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

    signInWithPhoneNumber(
      authentication,
      `+91${updatedPhoneNumber}`,
      appVerifier
    )
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

    let confirmationResult = (window as any).confirmationResult;

    confirmationResult
      .confirm(otp)
      .then((result: any) => {
        // User signed in successfully.
        const user = result.user;
        setPopShow(false);
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const publicAddress =
          localStorage.getItem('userPublicAddress') ||
          userDataa.publicAddress ||
          address;
        toast.loading('Updating Phone Number', { id: '9' });
        axios
          .patch(
            `https://user-backend-402016.el.r.appspot.com/user/api/kyc1/${publicAddress}`,
            {
              firstName: userDataa.kyc1.details.firstName,
              lastName: userDataa.kyc1.details.lastName,
              userName: userDataa.kyc1.details.userName,
              phoneNumber: updatedPhoneNumber,
              email: userDataa.kyc1.details.email,
            }
          )
          .then((response: any) => {
            console.log(response);
            setUpdatedField({});
            setOtp('');
            toast.success('Updated Phone Number', { id: '9' });
            getUserDetails();
          })
          .catch((err) => {
            toast.error('Error Updating Phone Number', { id: '9' });
            console.log(err);
          });
      })
      .catch((error: any) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result: any) => {
        const user = result.user;
        setgmail(user.email);
        const publicAddress =
          localStorage.getItem('userPublicAddress') ||
          userDataa.publicAddress ||
          address;
        toast.loading('Updating Email Id', { id: '10' });
        axios
          .patch(
            `https://user-backend-402016.el.r.appspot.com/user/api/kyc1/${publicAddress}`,
            {
              firstName: userDataa.kyc1.details.firstName,
              lastName: userDataa.kyc1.details.lastName,
              userName: userDataa.kyc1.details.userName,
              phoneNumber: userDataa.kyc1.details.phoneNumber,
              email: user.email,
            }
          )
          .then((response: any) => {
            console.log(response);
            setUpdatedField({});
            setOtp('');
            toast.success('Updated Email Id', { id: '10' });
            getUserDetails();
          })
          .catch((err) => {
            toast.error('Error Updating Email Id', { id: '10' });
            console.log(err);
          });
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  async function getUserDetails() {
    try {
      await axios
        .get(
          `https://user-backend-402016.el.r.appspot.com/user/api/user/${address}`
        )
        .then(async (res) => {
          setUserData(res.data.user);
          localStorage.setItem('userToken', res.data.token);
          setUserToken(res.data.token);
          console.log('dframeUserId', res.data.user.id);
          localStorage.setItem('dframeUserId', res.data.user.id);
          localStorage.setItem(
            'userPublicAddress',
            res.data.user.publicAddress
          );
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserDetails();
  }, []);
  useEffect(() => {
    getUserDetails();
  }, [address]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    toast.loading('Uploading Image', { id: '1' });
    const allowedExtensions = ['jpeg', 'png'];
    const fileExtension = profileImage.name.split('.').pop()?.toLowerCase();
    console.log('profileImage', profileImage);
    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      // Invalid file type, show an error toast
      toast.error('Only JPEG and PNG files are supported', { id: '1' });
      return;
    }
    try {
      const formData = new FormData();
      formData.append('profile-image', profileImage);

      // Send a POST request to your backend to upload the image
      const publicAddress =
        localStorage.getItem('userPublicAddress') ||
        userDataa.publicAddress ||
        address;

      const response = await axios.patch(
        `https://user-backend-402016.el.r.appspot.com/user/api/image/${publicAddress}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
          },
        }
      );
      toast.success('Uploaded Image', { id: '1' });
      console.log('Posted Image Details', response.data);
      getUserDetails();
      setImageSelected(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Error Uploading Image', { id: '1' });
    }
    setTimeout(() => {
      toast.remove();
    }, 1000);
  };

  // const fetchImage = async () => {
  //   const publicAddress =
  //     localStorage.getItem('userPublicAddress') ||
  //     userDataa.publicAddress ||
  //     address;

  //   try {
  //     const response = await axios.get(
  //       `https://user-backend-402016.el.r.appspot.com/user/api/image/${publicAddress}`,
  //       {
  //         responseType: 'blob',
  //       }
  //     );

  //     const imageUrlObject = URL.createObjectURL(response.data);
  //     setImage(imageUrlObject);
  //     localStorage.setItem('userProfileImage', imageUrlObject);
  //     setImage(imageUrlObject);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   console.log('running fetch image');
  // };

  // const handleAddressProof = async (e: any) => {
  //   e.preventDefault();
  //   toast.loading('Uploading Address Proof', { id: '4' });
  //   try {
  //     const data = address1 + address2;
  //     // Create a FormData object to send the images
  //     const formData = new FormData();
  //     formData.append('image', addressProof2File as any);
  //     formData.append('data', address1 + ' ' + ' ' + address2);
  //     const publicAddress =
  //       localStorage.getItem('userPublicAddress') ||
  //       userDataa.publicAddress ||
  //       address;
  //     // Send a POST request to the backend to upload the images
  //     await axios
  //       .post(
  //         `https://user-backend-402016.el.r.appspot.com/user/api/address/${publicAddress}`,
  //         formData,
  //         {
  //           headers: {
  //             'Content-Type': 'multipart/form-data',
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         toast.success('Uploaded Address Proof', { id: '4' });
  //         setPopShow1(false);
  //         setTimeout(() => {
  //           toast.remove();
  //           getUserDetails();
  //         }, 1000);
  //       });
  //   } catch (error) {
  //     console.error('Error uploading images:', error);
  //     toast.error('Error in Uploading Address Proof', { id: '4' });
  //   }
  // };

  return (
    <div>
      <Header />
      <>{Sidebar1(1)}</>
      <a className='smopen'>{Drawer(1)}</a>
      <Box
        className='profilebox'
        sx={{ display: 'flex' }}>
        <Container
          maxWidth={false}
          sx={{ maxWidth: '85%', display: 'flex' }}
          className='prbox1'>
          <div className='prtext1'>Profile</div>
          {userDataa && (
            <div className='profileImage'>
              <img
                src={
                  userDataa?.profileImage.toString().length < 3
                    ? image
                    : userDataa.profileImage
                }
                alt='user'
                id='profilePicture'
                className='img'
              />
              <input
                type='file'
                accept='image/jpeg, image/png'
                onChange={(e: any) => {
                  setProfileImage(e.target.files[0]);
                  setImageSelected(true);
                }}
                className='fileInput'
              />
            </div>
          )}

          {imageSelected && (
            <button
              onClick={(e: any) => handleImageUpload(e)}
              style={{
                position: 'absolute',
                top: '33vh',
                left: '8vw',
                padding: '5px',
                borderRadius: '10px',
                cursor: 'pointer',
                color: 'white',
                background: '#017EFA',
                textDecoration: 'none',
                outline: 'none',
                border: 'none',
              }}>
              Edit Image
            </button>
          )}
          <Container
            maxWidth={false}
            sx={{ display: 'flex' }}
            className='contitem'>
            <div>
              <a className='pr'>First Name</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {userDataa ? (userDataa as any).kyc1?.details.firstName : ''}
              </a>
            </div>
            <div>
              <a className='pr'>Last Name</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {userDataa ? (userDataa as any)?.kyc1.details.lastName : ''}
              </a>
            </div>
            <div>
              <a className='pr'>Number</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {userDataa
                  ? `${(userDataa as any)?.kyc1.details.phoneNumber}`
                  : phonenumber}
                <a
                  onClick={() => {
                    if (userDataa.kyc1.status === 'unsubmitted') {
                      toast.error('Complete KYC1 First to edit info');
                      setTimeout(() => {
                        toast.remove();
                      }, 800);
                      return;
                    } else {
                      setPopShow(true);
                    }
                  }}>
                  <CreateOutlinedIcon
                    sx={{
                      color: '#47B5FF',
                      top: '4px',
                      left: '0%',
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                    className='editicon'
                  />
                </a>
              </a>
            </div>
            <div>
              <a className='pr'>Email</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {userDataa ? (userDataa as any)?.kyc1.details.email : gmail}
                <a
                  onClick={() => {
                    if (userDataa.kyc1.status === 'unsubmitted') {
                      toast.error('Complete KYC1 First to edit info');
                      setTimeout(() => {
                        toast.remove();
                      }, 800);
                      return;
                    } else {
                      signInWithGoogle();
                    }
                  }}>
                  <CreateOutlinedIcon
                    sx={{
                      color: '#47B5FF',
                      top: '4px',
                      left: '5%',
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                  />
                </a>
              </a>
            </div>
            <div>
              <a className='pr'>Address</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {userDataa &&
                  (userDataa as any)?.kyc2.details.city +
                    ' ' +
                    (userDataa as any)?.kyc2.details.country}
              </a>
            </div>
            {/* <div>
              <a className='pr'>Address 2</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {address2}{' '}
                <a onClick={() => setPopShow1(true)}>
                  <CreateOutlinedIcon
                    sx={{
                      color: '#47B5FF',
                      top: '4px',
                      left: '5%',
                      position: 'relative',
                    }}
                  />
                </a>
              </a>
            </div> */}
            <div>
              <a className='pr'>Wallet Address</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {' '}
                {userDataa &&
                  (userDataa as any).publicAddress.slice(0, 12) +
                    '...' +
                    (userDataa as any).publicAddress.slice(-12)}
              </a>
            </div>
            <div>
              <a className='pr'>Referral Code</a>
              <a className='colon1'>:</a>
              {userDataa && userDataa.referralCode ? (
                <div className='prfont1'>
                  {userDataa.referralCode} Code applied
                </div>
              ) : (
                <>
                  <a className='prfont'>
                    <input
                      name='refferel'
                      onChange={(e) => setRef(e.target.value)}
                    />
                  </a>
                  <button
                    className='refbtn'
                    onClick={async (e) => {
                      e.preventDefault();
                      toast.loading('Updating Referral Code', { id: '7' });
                      await axios
                        .patch(
                          `https://user-backend-402016.el.r.appspot.com/user/api/referral/${userDataa.publicAddress}`,
                          {
                            referralCode: ref,
                          }
                        )
                        .then((response) =>
                          toast.success('Updated Referral Code', { id: '7' })
                        )
                        .catch((err) => {
                          console.log(err);
                          toast.error('Error Updating Referral Code', {
                            id: '7',
                          });
                        });

                      setTimeout(() => {
                        toast.remove();
                        setRef('');
                        getUserDetails();
                      }, 1000);
                    }}>
                    Send
                  </button>
                </>
              )}
            </div>
          </Container>
        </Container>

        {userDataa && (
          <Container
            maxWidth={false}
            sx={{ maxWidth: '85%', minHeight: '24vh' }}
            className='kycitem'>
            {userDataa.kyc1.status === 'unverified' &&
            userDataa.kyc2.status === 'unverified' &&
            userDataa.kyc3.status === 'unverified' ? (
              <div className='kyctitle'>You have submitted the details</div>
            ) : userDataa.kyc1.status === 'verified' &&
              userDataa.kyc2.status === 'verified' &&
              userDataa.kyc3.status === 'verified' ? (
              <div className='kyctitle'>You details are verified</div>
            ) : (
              <>
                <div className='kyctitle'>KYC Verification</div>

                <p>
                  This Verification makes us aware that you are a valid user. It
                  may take upto 24 hours.
                </p>

                <NavLink
                  to={
                    userDataa.kyc1.status === 'unsubmitted'
                      ? '/kyc1'
                      : userDataa.kyc2.status === 'unsubmitted'
                      ? '/kyc2'
                      : userDataa.kyc3.status === 'unsubmitted'
                      ? '/kyc3'
                      : '/successful'
                  }
                  style={{
                    textDecoration: 'none',
                    position: 'relative',
                    top: '1vh',
                  }}>
                  <button className='pbtn1'>Verify</button>
                </NavLink>
              </>
            )}
          </Container>
        )}
      </Box>
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
                value={updatedPhoneNumber}
                onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
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
            <div style={{ margin: 'auto' }}>
              <div id='recaptcha-container'></div>
            </div>
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

            <p
              style={{
                fontSize: '4vh',
                color: 'red',
                position: 'absolute',
                right: '4vh',
                top: '-3vh',
                cursor: 'pointer',
              }}
              onClick={() => setPopShow(false)}>
              X
            </p>
          </Box>
        </Backdrop>
      )}
      {popshow1 && (
        <>
          <Backdrop
            open={popshow1}
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Box className='update1'>
              <div className='uphead'>Update Address</div>
              <form>
                <a className='upa'>
                  Enter Address 1<a className='colonpop'>:</a>
                  <input
                    className='uin'
                    name='address1'
                    type='text'
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    required
                  />
                </a>
                <a className='upa'>
                  Enter Address 2<a className='colonpop'>:</a>
                  <input
                    className='uin'
                    name='address2'
                    type='text'
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    required
                  />
                </a>
                <div className='upbtn1'>
                  <Button
                    variant='contained'
                    component='label'
                    sx={{
                      textTransform: 'none',
                      bgcolor: '#017EFA',
                      width: '15vw',
                      height: '7vh',
                      fontSize: '18px',
                      borderRadius: '10px',
                    }}>
                    Address Proof
                    <input
                      className='field'
                      accept='image/*'
                      name='proof2'
                      multiple
                      type='file'
                      required
                      onChange={(e) =>
                        setAddressProof2File(
                          e.target.files ? e.target.files[0] : null
                        )
                      }
                    />
                  </Button>
                </div>
                {/* {(userDataa as any).address.submitted && (
                  <div>**You have Submitted Data earlier</div>
                )} */}
                <br />
                <button
                  className='upbtn'
                  disabled={false}>
                  Update
                </button>
                <br />
              </form>
              <CloseIcon
                onClick={() => setPopShow1(false)}
                className='cross'
              />
            </Box>
            <br />
          </Backdrop>
          <div className='upbtn1'>
            <UploadButtons />
          </div>
          <CloseIcon
            onClick={() => setPopShow1(false)}
            className='cross'
          />
        </>
      )}
      {popshow1 && (
        <>
          <Backdrop
            open={popshow1}
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Box className='update11'>
              <p
                style={{
                  fontSize: '4vh',
                  color: 'red',
                  position: 'absolute',
                  right: '4vh',
                  top: '-3vh',
                  cursor: 'pointer',
                }}
                onClick={() => setPopShow1(false)}>
                X
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '7vh',
                }}>
                <h3>
                  <b>{`**Your Address Proof is already submitted.**`}</b>
                </h3>
                {/* <p>{userDataa.address.data}</p> */}
              </div>
            </Box>
          </Backdrop>
        </>
      )}
    </div>
  );
}

export default Profile;
