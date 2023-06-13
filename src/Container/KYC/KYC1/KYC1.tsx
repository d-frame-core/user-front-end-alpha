import {useState} from 'react'
import './kyc1.css'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import { Box, Button, Container, Step, StepLabel, Stepper , TextField} from '@mui/material'
import df from '../../../assets/dframe.png'
import data from '../data'
import { Backdrop } from '@mui/material'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import Drawer from '../../../components/sidebar1/Drawer'
import Cookies from 'js-cookie'
import { OAuthCredential, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import { authentication } from "../../../Firebase";
import CloseIcon from "@mui/icons-material/Close";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Header from '../../../components/Header/Header'



export var userdata:any ={}; 

type FormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  email:string;
  phoneNumber:number;
};


export default function KYC1() {
  const [dis,setDis] = useState(true)
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data:any) => {
       
        
        console.log(data); 
        
        const token = Cookies.get('token');
        const id = Cookies.get('_id')
        console.log(token)
          axios.post(`http://localhost:3000/kyc1/step1/${id}`,data,{
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

   navigate('/kyc2');
  };

  const[firstname, setfirstName]= useState('');
  const[lastname, setlastName]= useState('');
  const[username, setuserName]= useState('');
  const[email,setEmail]=useState('');
  
  const[address, setAddress]= useState('');
  const[arlist,setarlist]=useState({});
  const [field,setField] = useState('');
  const[fieldopen,setFieldOpen]=useState(false);
  
  // const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [popshow, setPopShow] = useState(false);

  authentication.languageCode = "en";
  const countrycode = "+91";
  const[number,setnumber] = useState(countrycode);
  const generaterecaptcha = () => {
    (window as any).recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        lang: "https://www.google.com/recaptcha/api.js?render=reCAPTCHA_site_key&lang=en",
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

    let confirmationResult = (window as any).confirmationResult;

    confirmationResult
      .confirm(otp)
      .then((result: any) => {
        // User signed in successfully.
        const user = result.user;
        console.log("it is working");
        setPopShow(false);
        setDis(false)
        // ...
      })
      .catch((error: any) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };


  return (
    <>
    <Header/>
      <div  className='sb'><Sidebar1/></div>
      <a className='smopen'>
        {Drawer(0)}
      </a>
     
      <div>
        
      
          <div className='container'>
        <Box className='kyc-rectangle'>
        <div className='body'>
        <Box  sx={{top:'45vh'}} className='fbox1'>
          <div className='ftitle'>KYC Level-1:</div>
          <form className='fbox2' onSubmit={handleSubmit(onSubmit)} >
            <div className='alignleft'>First Name<a className='colon'>:
                  <input className='in' {...register("firstName")} required={true}/>
                  {/* <input className='in' type='text' name='firstname' value={firstname} onChange={(e)=>setfirstName(e.target.value)} required={true} /> */}
                  </a>
            </div>
            <div className='alignleft'>Last Name<a className='colon'>:
            <input className='in' {...register("lastName")} required={true}/>
                  {/* <input className='in' type='text' name='lastname' value={lastname} onChange={(e)=>setlastName(e.target.value)} required={true} /> */}
                  </a>
                  </div>
            <div className='alignleft'>User Name<a className='colon'>:
            <input className='in' {...register("userName")} required={true}/>
                  {/* <input className='in' type='text' name='username' value={username} onChange={(e)=>setuserName(e.target.value)} required={true} /> */}
                  </a>
                  </div>
            
            <div className='alignleft'>Phone Number<a className='colon'>:
            {/*<input className='in'  required={true}/>*/}
            
                  {<input className='in' type='tel'  {...register("phoneNumber")} value={number} onChange={(e)=>setnumber(e.target.value)} required={true} /> }
                  </a>
                  </div>
                  
                  
                  <div className='alignleft'>Email<a className='colon'>:
            <input className='in' {...register("email")} required={true}/>
                  {/* <input className='in' type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required={true} /> */}
                  </a>
                  </div>
            <button  type='submit' className='btnup' disabled={dis}>Submit</button>
            {/* <input type="submit" /> */}
        </form>
        <button className='verifyph' onClick={() => setPopShow(true)}>Verify</button>
      </Box>
        <Backdrop open={fieldopen}>
          <Box className='fillbox'>
            <div className='a1'>Please Fill in the {field}</div>
            <button className='a2' onClick={()=>setFieldOpen(false)}>Okay</button>
          </Box>
        </Backdrop>
    </div>
    {popshow && (
        <Backdrop
          open={popshow}
          sx={{ zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}
        >
          <Box className="update">
            <div className="uphead">Update Number</div>
            <a className="upa">
              Phone Number<a className="colonpop">:</a>{" "}
              <input
                className="uin"
                name="phoneNumber"
                type="tel"
                value={number}
                readOnly={true}
              />
            </a>
            <button className="upbtn" onClick={sendotp}>
              Send OTP
            </button>
            <a className="upa">
              Enter Reason<a className="colonpop">:</a>
              <input className="uin" />
            </a>
            <div id="recaptcha-container"></div>
            <a className="upa">
              Enter OTP <a className="colonpop">:</a>
              <input
                className="uin"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </a>
            <button className="upbtn" onClick={verifyOtp}>
              Save
            </button>

            <CloseIcon onClick={() => setPopShow(false)} className="cross" />
          </Box>
        </Backdrop>
      )}
    <div className="step-1">
    
          {" "}
          <Box sx={{ width: "250%" }}>
            <Stepper activeStep={0} alternativeLabel>
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
  )
}

