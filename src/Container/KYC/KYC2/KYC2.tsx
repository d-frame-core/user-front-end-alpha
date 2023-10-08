/** @format */

import './kyc2.css';
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';

import { NavLink } from 'react-router-dom';
import data from '../data';
import df from '../../../assets/dframe.png';

import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { FormInputDropdown } from '../../../components/form-components/FormInputDropdown';
import { FormInputIncome } from '../../../components/form-components/FormInputIncome';
import { FormInputText } from '../../../components/form-components/FormInputText';
import { FormInputDate } from '../../../components/form-components/FormInputDate';

import { FormInputDropdownCountries } from '../../../components/form-components/FormDropdownCountries';
import { useNavigate } from 'react-router-dom';
import Drawer from '../../../components/sidebar1/Drawer';
import Cookies from 'js-cookie';
import axios from 'axios';
import Header from '../../../components/Header/Header';
import { MyContext } from '../../../components/context/Context';
import { useContext } from 'react';
import toast from 'react-hot-toast';

interface IFormInput {
  gender: string;
  country: string;
  state: string;
  city: string;
  street: string;
  doorno: string;
  pincode: string;
  dob: Date;
  annualIncome: string;
  permanentAddress: string;
}

const defaultValues = {
  gender: '',
  country: '',
  state: '',
  city: '',
  street: '',
  doorno: '',
  pincode: '',
  dob: new Date(),
  annualIncome: '',
  permanentAddress: '',
};

export default function KYC2() {
  const { userDataa, setUserData } = useContext(MyContext);
  const navigate = useNavigate();

  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, control } = methods;
  const onSubmit = (data: IFormInput) => {
    console.log(data);
    console.log(userDataa);

    if (!userDataa) {
      alert('Sign In Again');
      navigate('/');
      return;
    }
    if (userDataa.kyc2.status === true) {
      navigate('/kyc3');
      return;
    }
    if (
      data.gender.length < 1 ||
      data.annualIncome.length < 1 ||
      data.city.length < 1 ||
      data.country.length < 1 ||
      !data.dob ||
      data.doorno.length < 1 ||
      data.permanentAddress.length < 1 ||
      data.state.length < 1 ||
      data.street.length < 1 ||
      data.pincode.length < 1
    ) {
      toast.error('Fill all fields');
      return;
    }
    toast.loading('Submitting KYC2 Data', { id: '1' });
    axios
      .patch(`http://localhost:3000/api/kyc2/${userDataa.publicAddress}`, data)
      .then((res) => {
        toast.success('Submitted KYC2 Data Succesfully', { id: '1' });
        console.log(res);
      })
      .catch((error) => {
        toast.error('Error Submitting KYC2 Data', { id: '1' });
        console.log(error);
      });
    setTimeout(() => {
      toast.remove();
      navigate('/kyc3');
    }, 1000);
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
          <Box className='ky1rectangle'>
            <div className='level'>KYC Level-2:</div>
            {userDataa.kyc2.status == 'unverified' && (
              <div className='submittedInfo'>
                You have already submitted your KYC2 details.
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <input type="submit"/> */}
              {userDataa.kyc2.status == 'unsubmitted' && (
                <>
                  <div className='gender-input'>
                    Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    <div className='i select-gender'>
                      <FormInputDropdown
                        name='gender'
                        control={control}
                        label='Select'
                      />
                    </div>
                  </div>
                  <div className='ktext2'>
                    Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    <div className='i select-country'>
                      <FormInputDropdownCountries
                        name='country'
                        control={control}
                        label='Select Your Country'
                      />
                    </div>
                  </div>
                  <div className='ktext3'>
                    State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; :
                    <div className='stin'>
                      <FormInputText
                        name='state'
                        control={control}
                        label='State'
                      />
                    </div>
                  </div>
                  <div className='ktext4'>
                    City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                    <div className='citin'>
                      <FormInputText
                        name='city'
                        control={control}
                        label='City'
                      />
                    </div>
                  </div>
                  <div className='ktext5'>
                    Street &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; :
                    <div className='streetin'>
                      <FormInputText
                        name='street'
                        control={control}
                        label='Street'
                      />
                    </div>
                  </div>
                  <div className='ktext6'>
                    House no &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;:
                    <div className='doin'>
                      <FormInputText
                        name='doorno'
                        control={control}
                        label='Door no'
                      />
                    </div>
                  </div>
                  <div className='ktext9'>
                    Date of Birth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    <div className='date-picker'>
                      <FormInputDate
                        name='dob'
                        control={control}
                        label=''
                      />
                    </div>
                  </div>
                  <div className='ktext10'>
                    Annual Income &nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    <div className='i select-gender'>
                      <FormInputIncome
                        name='annualIncome'
                        control={control}
                        label='Select'
                      />
                    </div>
                  </div>
                  <div className='ktext7'>
                    Permanent Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    <div className='i address-label'>
                      <FormInputText
                        name='permanentAddress'
                        control={control}
                        label='Address'
                      />
                    </div>
                  </div>

                  <div className='ktext8'>
                    Pincode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                    <div className='pinin'>
                      <FormInputText
                        name='pincode'
                        control={control}
                        label='Pincode'
                      />
                    </div>
                  </div>

                  <ReCAPTCHA
                    className='captcha'
                    sitekey='6LcBCP8jAAAAANnWNyJx7ERLW5IlR5yRO6v4HWfX'
                  />
                </>
              )}
              <Button
                sx={{
                  backgroundColor: '#017EFA',
                  borderRadius: '10px',
                  textTransform: 'inherit',
                  width: '100px',
                }}
                variant='contained'
                type='submit'
                className='kybtn'>
                Next
              </Button>
            </form>

            <div className='label'>
              <Box sx={{ width: '300%' }}>
                <Stepper
                  activeStep={1}
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
              to='/kyc1'>
              <Button
                sx={{
                  position: 'absolute',
                  left: '5vw',

                  backgroundColor: '#017EFA',
                  borderRadius: '10px',
                  textTransform: 'inherit',
                  width: '100px',
                }}
                variant='contained'
                className='btn'>
                Back
              </Button>
            </NavLink>
          </Box>
        </div>
      </div>
    </>
  );
}
