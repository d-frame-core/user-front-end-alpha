
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

interface IFormInput {
  gender: string;
  income: string;
  date: Date;
  address: string;
  country: string;
};

const defaultValues = {
  gender:"",
  income:"",
  date: new Date(),
  address:"",
  country:"",
}

export default function KYC2() {

  const navigate = useNavigate();
  


  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, control} = methods;
  const onSubmit = (data: IFormInput) =>{
    
    console.log(data);
    navigate('/kyc3'); 
  };

  return (
    <Container>
      <Sidebar1 />

      <div>
        <div className="container">
          <Box className="ky1rectangle">
          
              <div className="level">KYC Level-2:</div>
              <form onSubmit={handleSubmit(onSubmit)}>
                
                {/* <input type="submit"/> */}
              <div className="gender-input">
                Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                <div className="i select-country">

                  <FormInputDropdownCountries name="country" control={control} label="Select Your Country"/>
                  
                </div>
              </div>
              <div className="ktext3">
                Date of Birth &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                
                <div className="date-picker">
                <FormInputDate name="date" control={control} label=""/>
                </div>
                
              </div>
              <div className="ktext4">
                Annual Income &nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                <div className="i select-gender">
                  
                  <FormInputIncome
                     name="income"
                     control={control}
                     label="Select"
                  />
                </div>
              </div>
              <div className="ktext5">
                Permanent Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                <div className="i address-label">
                  
                  <FormInputText name="address" control={control} label="Address"/>
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

            <img src={df} alt="" className="kyc1" />
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
                  top: "85vh",
                  backgroundColor: "#017EFA",
                  borderRadius: "10px",
                  textTransform: "inherit",
                  width: "100px",
                }}
                variant="contained"
                className="back-btn"
              >
                Back
              </Button>
            </NavLink>
          </Box>
        </div>
      </div>
    </Container>
  );
}
