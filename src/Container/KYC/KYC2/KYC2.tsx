import {useState, FormEvent, useEffect} from 'react'
import './kyc2.css'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import { Box, Button, Container, Step, StepLabel, Stepper , TextField} from '@mui/material'
import CountrySelector from '../../../components/country-selector/Country-selector'
import { NavLink } from 'react-router-dom'
import data from '../data'
import df from '../../../assets/dframe.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import ReCAPTCHA from 'react-google-recaptcha'



export default function KYC2() {

  const [gender, setGender] = useState(" ")
  const [income, setIncome] = useState("")
  const [dob, setDob] = useState("")
  const [address, setAddress] = useState("")
  const [verified, setVerified] = useState(false);

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
    
    
  };

  const handleIncomeChange = (event: SelectChangeEvent) => {
    setIncome(event.target.value);
    
    
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
   
    
  };

  

  useEffect(() => {
    console.log(gender);
    }, [gender]);


    useEffect(() => {
    console.log(address);
    }, [address])


  useEffect(() => {
    console.log(income);
    }, [income])

    useEffect(() => {
      console.log(dob);
      }, [dob])  
  
  useEffect(()=>{
    console.log(verified);

    if(verified === true){
      return console.log("user verified");
      
    }
    
  },[verified])


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    
     
  };

function onChange() {
  
  setVerified(true);
}



const isFormValid=()=>{
  return(
   gender && income && dob && address && verified
  )
 }

  return (
    <Container>
      <Sidebar1/>
      
      <div>
        
      
          <div className='container'>
        <Box className='ky1rectangle'>
          <div className='level'>KYC Level-2:</div>
          <div className='gender-input'>Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          <div className='i select-gender'>
          <FormControl  sx={{ borderRadius:'10px' , width: 350, backgroundColor:'white' , textAlign:'left' , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , border:'none'}}>
          <InputLabel  id="demo-simple-select-helper-label">Select</InputLabel>
        <Select 
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gender}
          label="Select"
          onChange={handleGenderChange}
        >
          
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Others</MenuItem>
        </Select>
        </FormControl>
        </div>
          </div>
          <div className='ktext2'>Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          <div className='i select-country'>
          
          {/* country selector starts */}
          
          <CountrySelector />
          
          {/* country selector ends */}
          </div>
          </div>
          <div className='ktext3'>Date of Birth &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          <TextField sx={{width:350 , marginTop:'-0.5rem',boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}} className='date-picker'
          value={dob}
        id="date"
        // label="Choose your birthdate"
        type="date"
        // defaultValue="2001-05-24"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>{setDob(e.target.value)}}    />
      </div>
          <div className='ktext4'>Annual Income &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          <div className='i select-gender'>
          <FormControl sx={{ borderRadius:'10px', width: 350, backgroundColor:'white' , textAlign:'left',boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
          <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={income}
          label="Select"
          onChange={handleIncomeChange}
          color='primary'
        >
          
          <MenuItem value={'INR 0 - INR 5,00,000'}>INR 0 - INR 5,00,000</MenuItem>
          <MenuItem value={'INR 5,00,000 - INR 10,00,000'}>INR 5,00,000 - INR 10,00,000</MenuItem>
          <MenuItem value={'INR 10,00,000 - INR 15,00,000'}>INR 10,00,000 - INR 15,00,000</MenuItem>
          <MenuItem value={'Greater than INR 15,00,000'}>&gt; INR 15,00,000</MenuItem>
        </Select>
        </FormControl>
          </div>
          </div>
          <div className='ktext5'>Permanent Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          <div className='i address-label'>
          <TextField 
          sx={{ borderRadius:'10px', width:350, backgroundColor:'white', boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}} 
          id="outlined-basic" 
          label="Address" 
          variant="outlined"  
          onChange={handleAddressChange}
          />
          </div>
          
         </div>
          
         <ReCAPTCHA 
          className='captcha' 
          sitekey='6LcBCP8jAAAAANnWNyJx7ERLW5IlR5yRO6v4HWfX'
          onChange={onChange}
          />
          
          <img src={df} alt='' className='kyc1'/> 
          <div className='label'><Box sx={{ width: '300%' }}><Stepper activeStep={1} alternativeLabel>
        {data.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper></Box></div>
          <NavLink style={{textDecoration:'none'}} to='/kyc3'><Button sx={{backgroundColor:'#017EFA', borderRadius:'10px',textTransform:'inherit',width:'100px'}}  variant='contained' type="submit" className='kybtn' disabled={!isFormValid()}>Next</Button></NavLink>
        </Box>
        </div>
        
      </div>
    </Container>
  )
}

