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



export var userdata:any ={}; 

type FormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  email:string;
  phone:number;
};


export default function KYC1() {

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
  const[number,setnumber] = useState('');
  const[address, setAddress]= useState('');
  const[arlist,setarlist]=useState({});
  const [field,setField] = useState('');
  const[fieldopen,setFieldOpen]=useState(false);
  
  // const navigate = useNavigate();
  



  return (
    <>
      <Sidebar1/>
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
            <div className='alignleft'>Email<a className='colon'>:
            <input className='in' {...register("email")} required={true}/>
                  {/* <input className='in' type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required={true} /> */}
                  </a>
                  </div>
            <div className='alignleft'>Phone Number<a className='colon'>:
            <input className='in' {...register("phone")} required={true}/>
                  {/* <input className='in' type='tel' name='number' value={number} onChange={(e)=>setnumber(e.target.value)} required={true} /> */}
                  </a>
                  </div>
            
            <button  type='submit' className='btnup'>Submit</button>
            {/* <input type="submit" /> */}
        </form>
        
      </Box>
        <Backdrop open={fieldopen}>
          <Box className='fillbox'>
            <div className='a1'>Please Fill in the {field}</div>
            <button className='a2' onClick={()=>setFieldOpen(false)}>Okay</button>
          </Box>
        </Backdrop>
    </div>

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

