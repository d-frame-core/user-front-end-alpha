import {useState} from 'react'
import './kyc1.css'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import { Box, Button, Container, Step, StepLabel, Stepper , TextField} from '@mui/material'
import df from '../../../assets/dframe.png'
import data from '../data'
import { Backdrop } from '@mui/material'

import {useNavigate} from 'react-router-dom'





export var userdata:any ={}; 

export default function KYC1() {

  const[firstname, setfirstName]= useState('');
  const[lastname, setlastName]= useState('');
  const[username, setuserName]= useState('');
  const[email,setEmail]=useState('');
  const[number,setnumber] = useState('');
  const[address, setAddress]= useState('');
  const[arlist,setarlist]=useState({});
  const [field,setField] = useState('');
  const[fieldopen,setFieldOpen]=useState(false);
  const navigate = useNavigate();
  
  const handleSubmit=(e:any)=>{
    e.preventDefault();

    if(firstname === ''){
      setField('First Name');
      setFieldOpen(true);
    }
    else if(lastname === ''){
      setField('Last Name');
      setFieldOpen(true);
    }
    else if(username === ''){
      setField('User Name');
      setFieldOpen(true);
    }
    else if(email === ''){
      setField('Email');
      setFieldOpen(true);
    }
    else if(number === ''){
      setField('Phone Number');
      setFieldOpen(true);
    }
    else if(address === ''){
      setField('Address');
      setFieldOpen(true);
    }
    else{
        userdata={
          F1:firstname,
        }
        setarlist(userdata);
        console.log(userdata);
        navigate('/kyc2');
        console.log(arlist);
    }
}

  return (
    <Container>
      <Sidebar1/>
      
      <div>
        
      
          <div className='container'>
        <Box className='kyc-rectangle'>
        <div className='body'>
        <Container maxWidth='sm' sx={{top:'45vh'}} className='fbox1'>
          <div className='ftitle'>User Profile</div>
          <form className='fbox2' >
            <div className='alignleft'>First Name<a className='colon'>:
                  <input className='in' type='text' name='firstname' value={firstname} onChange={(e)=>setfirstName(e.target.value)} required={true} />
                  </a>
            </div>
            <div className='alignleft'>Last Name<a className='colon'>:
                  <input className='in' type='text' name='lastname' value={lastname} onChange={(e)=>setlastName(e.target.value)} required={true} />
                  </a>
                  </div>
            <div className='alignleft'>User Name<a className='colon'>:
                  <input className='in' type='text' name='username' value={username} onChange={(e)=>setuserName(e.target.value)} required={true} />
                  </a>
                  </div>
            <div className='alignleft'>Email<a className='colon'>:
                  <input className='in' type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required={true} />
                  </a>
                  </div>
            <div className='alignleft'>Phone Number<a className='colon'>:
                  <input className='in' type='tel' name='number' value={number} onChange={(e)=>setnumber(e.target.value)} required={true} />
                  </a>
                  </div>
            <div className='alignleft'>Address<a className='colon'>:
                  <input className='in' type='text' name='address' value={address} onChange={(e)=>setAddress(e.target.value)} required={true} />
                  </a>
            </div>
            
            <button  className='btnup' onClick={handleSubmit} >Submit</button>
        </form>
        
      </Container>
        <Backdrop open={fieldopen}>
          <Box className='fillbox'>
            <div className='a1'>Please Fill in the {field}</div>
            <button className='a2' onClick={()=>setFieldOpen(false)}>Okay</button>
          </Box>
        </Backdrop>
    </div>

    <div className="step-1">
    <img src={df} alt='' style={{position:'absolute' ,  width:'20%', left:'4.5vw', top:'-7vh'}}/> 
          {" "}
          <Box sx={{ width: "300%" }}>
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
    </Container>
  )
}

