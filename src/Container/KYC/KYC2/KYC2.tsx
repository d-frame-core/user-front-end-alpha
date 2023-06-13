
import "./kyc2.css";
import Sidebar1 from "../../../components/sidebar1/Sidebar1";
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  
} from "@mui/material";

import { NavLink } from "react-router-dom";
import data from "../data";
import df from "../../../assets/dframe.png";


import ReCAPTCHA from "react-google-recaptcha";
import { useForm} from "react-hook-form";
import { FormInputDropdown } from "../../../components/form-components/FormInputDropdown";
import { FormInputIncome } from "../../../components/form-components/FormInputIncome";
import { FormInputText } from "../../../components/form-components/FormInputText";
import { FormInputDate } from "../../../components/form-components/FormInputDate";

import { FormInputDropdownCountries } from "../../../components/form-components/FormDropdownCountries";
import {useNavigate} from 'react-router-dom'
import Drawer from "../../../components/sidebar1/Drawer";
import Cookies from "js-cookie";
import axios from "axios";
import Header from '../../../components/Header/Header'


interface IFormInput {
  gender: string;
  country: string;
  state:string;
  city:string;
  street:string;
  doorno: string
  pincode:string;
  dob: Date;
  annualIncome: string;
  permanentAddress: string;
};

const defaultValues = {
  gender:"",
  country:"",
  state:"",
  city:"",
  street:"",
  doorno:"",
  pincode:"",
  dob: new Date(),
  annualIncome:"",
  permanentAddress:"",
}

export default function KYC2() {

  const navigate = useNavigate();
  


  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, control} = methods;
  const onSubmit = (data: IFormInput) =>{
    
    console.log(data);
    const token = Cookies.get('token');
    const id = Cookies.get('_id')
        console.log(token)
          axios.post(`http://localhost:3000/kyc1/step2/${id}`,data,{
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}` // set the Authorization header with the JWT token stored in localStorage
            }
          })
        .then((res)=>{
          console.log(res)
        })
        .catch((error)=>{
          console.log(error)
        })
    navigate('/kyc3'); 
  };

  return (
    <>
    <Header/>
      <div className="sb"><Sidebar1 /></div>
      <a className='smopen'>
        {Drawer(0)}
      </a>
      <div>
        <div className="container">
          <Box className="ky1rectangle">
          
              <div className="level">KYC Level-2:</div>
              <form onSubmit={handleSubmit(onSubmit)}>
                
                {/* <input type="submit"/> */}
              <div className="gender-input">
                Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                <div className="i select-gender">
                  <FormInputDropdown
                 name="gender"
                 control={control}
                 label="Select"
                />
                </div>
              </div>
              <div className="ktext2">
                Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                <div className="i select-country">

                  <FormInputDropdownCountries name="country" control={control} label="Select Your Country"/>
                  
                </div>
              </div>
              <div className="ktext3">
                State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                :<div className="stin">
                <FormInputText name="state" control={control} label="State"/>
                </div>
              </div>
              <div className="ktext4">
                City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                :<div className="citin">
                <FormInputText name="city" control={control} label="City"/>
                </div>
              </div>
              <div className="ktext5">
                Street &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;
                :<div className="streetin">
                <FormInputText name="street" control={control} label="Street"/>
                </div>
              </div>
              <div className="ktext6">
                House no &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                :<div className="doin">
                <FormInputText name="doorno" control={control} label="Door no"/>
                </div>
              </div>
              <div className="ktext9">
                Date of Birth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                
                <div className="date-picker">
                <FormInputDate name="dob" control={control} label=""/>
                </div>
                
              </div>
              <div className="ktext10">
                Annual Income &nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                <div className="i select-gender">
                  
                  <FormInputIncome
                     name="annualIncome"
                     control={control}
                     label="Select"
                  />
                </div>
              </div>
              <div className="ktext7">
                Permanent Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                <div className="i address-label">
                  
                  <FormInputText name="permanentAddress" control={control} label="Address"/>
                </div>
              </div>

              <div className="ktext8">
                Pincode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                :<div className="pinin">
                <FormInputText name="pincode" control={control} label="Pincode"/>
                </div>
              </div>

              <ReCAPTCHA
                className="captcha"
                sitekey="6LcBCP8jAAAAANnWNyJx7ERLW5IlR5yRO6v4HWfX"
                
              />

           
              <Button
                sx={{
                  backgroundColor: "#017EFA",
                  borderRadius: "10px",
                  textTransform: "inherit",
                  width: "100px",
                }}
                variant="contained"
                type="submit"
                className="kybtn"
                
              >
                Next
              </Button>
            
            </form>

           
            <div className="label">
              <Box sx={{ width: "300%" }}>
                <Stepper activeStep={1} alternativeLabel>
                  {data.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </div>
            
            <NavLink style={{ textDecoration: "none" }} to="/kyc1">
              <Button
                sx={{
                  position: "absolute",
                  left: "5vw",
                  
                  backgroundColor: "#017EFA",
                  borderRadius: "10px",
                  textTransform: "inherit",
                  width: "100px",
                }}
                variant="contained"
                className="btn"
              >
                Back
              </Button>
            </NavLink>
          </Box>
        </div>
      </div>
    </>
  );
}
