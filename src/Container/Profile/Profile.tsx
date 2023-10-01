/** @format */

import React, { useEffect, useState } from 'react';
import './profile.css';
import user from '../../assets/user.png';
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
  var { address, isConnected }: any = useAccount();

  const [files, setFiles] = useState(user);
  const [image, setImage] = useState(null);

  let [gmail, setgmail] = useState('');

  var [ref, setRef] = useState('');

  const [popshow, setPopShow] = useState(false);

  const [popshow1, setPopShow1] = useState(false);

  const [userDataa, setUserData] = useState<any>(null);

  const [updatedUser, setUpdatedUser] = useState({});

  const [address1, setAddress1] = useState('');

  const [address2, setAddress2] = useState('');

  authentication.languageCode = 'en';

  const countrycode = '+91';

  const [otp, setOtp] = useState('');

  const [phonenumber, setPhoneNumber] = useState(countrycode);

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
        axios
          .patch(`http://localhost:3000/api/users/detail/${address}`, {
            phoneNumber: String(updatedPhoneNumber),
          })
          .then((response: any) => {
            console.log(response);
            setUpdatedField({});
            setOtp('');
            getUserDetails();
          })
          .catch((err) => {
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
        axios
          .patch(`http://localhost:3000/api/users/detail/${address}`, {
            email: String(user.email),
          })
          .then((result) => console.log(result))
          .catch((err) => console.log(err));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const updateaddress1 = (e: any) => {
    e.preventDefault();
    setAddress1(e.target.value);
  };
  const updateaddress2 = (e: any) => {
    e.preventDefault();
    setAddress1(e.target.value);
  };

  const navigate = useNavigate();
  async function getUserDetails() {
    try {
      await axios
        .get(`http://localhost:3000/api/get/${address}`)
        .then((res) => {
          setUserData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserDetails();
  }, []);
  console.log(userDataa);
  useEffect(() => {
    getUserDetails();
  }, [address]);

  async function handleAddressUpdate(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    console.log(address1, address2);
    const vars = address1.toString() + ' ' + address2.toString();
    vars.toString();
    try {
      await axios
        .patch(`http://localhost:3000/api/users/detail/${address}`, {
          address: String(vars),
        })
        .then((res) => {
          console.log('Updated address', res);
        })
        .catch((err) => {
          console.log('Error updating address', err);
        });
    } catch (error) {
      console.log(error);
    }
    setAddress1('');
    setAddress2('');
    setPopShow1(false);
    getUserDetails();
  }

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

          {image ? (
            <div className='profileImage'>
              <img
                src={image}
                alt='user'
                id='profilePicture'
                className='img'
              />
              <input
                type='file'
                accept='image/*'
                // onChange={handleFileChange}
                className='fileInput'
              />
            </div>
          ) : (
            <div className='profileImage'>
              <img
                src={files}
                alt='user'
                id='profilePicture'
                className='img'
              />
              <input
                type='file'
                accept='image/*'
                // onChange={handleFileChange2}
                className='fileInput'
              />
            </div>
          )}

          <Container
            maxWidth={false}
            sx={{ display: 'flex' }}
            className='contitem'>
            <div>
              <a className='pr'>First Name</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {userDataa ? (userDataa as any)?.firstName : ''}
              </a>
            </div>
            <div>
              <a className='pr'>Last Name</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {userDataa ? (userDataa as any)?.lastName : ''}
              </a>
            </div>
            <div>
              <a className='pr'>Number</a>
              <a className='colon1'>:</a>
              <a className='prfont'>
                {userDataa
                  ? `${phonenumber}${(userDataa as any)?.phoneNumber}`
                  : phonenumber}
                <a onClick={() => setPopShow(true)}>
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
                {userDataa ? (userDataa as any)?.email : gmail}
                <a onClick={signInWithGoogle}>
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
                {userDataa && (userDataa as any)?.address1.data}{' '}
                {(userDataa as any)?.address2.data}
                <a onClick={() => setPopShow1(true)}>
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
              <a className='pr'>Refferel Code</a>
              <a className='colon1'>:</a>
              {userDataa.referrals ? (
                <div className='prfont1'>
                  {userDataa.referrals} Code applied
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
                      await axios
                        .patch(
                          `http://localhost:3000/api/referral/${userDataa.publicAddress}`,
                          {
                            referral: ref,
                          }
                        )
                        .then((response) => console.log(response))
                        .catch((err) => console.log(err));

                      setRef('');
                    }}>
                    Send
                  </button>
                </>
              )}
            </div>
          </Container>
        </Container>

        {!successful && (
          <Container
            maxWidth={false}
            sx={{ maxWidth: '85%', minHeight: '24vh' }}
            className='kycitem'>
            <>
              <div className='kyctitle'>KYC Verification</div>

              <p>
                This Verification makes us aware that you are a valid user. It
                may take upto 24 hours.
              </p>

              <NavLink
                to='/kyc1'
                style={{
                  textDecoration: 'none',
                  position: 'relative',
                  top: '1vh',
                }}>
                <button className='pbtn1'>Verify</button>
              </NavLink>
              {}
            </>
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

            <CloseIcon
              onClick={() => setPopShow(false)}
              className='cross'
            />
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
                    Address Proof 1
                    <input
                      className='field'
                      accept='image/*'
                      name='proof1'
                      multiple
                      type='file'
                    />
                  </Button>
                </div>
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
                    Address Proof 2
                    <input
                      className='field'
                      accept='image/*'
                      name='proof2'
                      multiple
                      type='file'
                    />
                  </Button>
                </div>
                <br />
                <button
                  className='upbtn'
                  disabled={false}
                  onClick={(e: any) => handleAddressUpdate(e)}>
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
    </div>
  );
}

export default Profile;
