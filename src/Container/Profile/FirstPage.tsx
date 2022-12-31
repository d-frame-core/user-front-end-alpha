import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate, NavLink } from 'react-router-dom'
import './firstpage.css'
import { Container } from '@mui/system'

export default function FirstPage() {
  const[firstname, setfirstName]= useState('');
  const[lastname, setlastName]= useState('');
  const[username, setuserName]= useState('');
  const[email,setEmail]=useState('');
  const[number,setnumber] = useState('');
  const[address, setAddress]= useState('');
  const[arlist,setarlist]=useState({});
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    const userdata:any={
      First:firstname,
     Last:lastname,
      username,
      email,
      number,
      address
    }
    console.log(firstname,lastname,username,email,number,address);
    setarlist(userdata);
    console.log(JSON.stringify(arlist))
}
  return (
    <div className='fsbody'>
        <Container maxWidth='sm' className='fbox1'>
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
                  <input className='in' type='number' name='number' value={number} onChange={(e)=>setnumber(e.target.value)} required={true} />
                  </a>
                  </div>
            <div className='alignleft'>Address<a className='colon'>:
                  <input className='in' type='text' name='address' value={address} onChange={(e)=>setAddress(e.target.value)} required={true} />
                  </a>
            </div>
            
            <button  className='btnup' onClick={handleSubmit} >Submit</button>
        </form>
      </Container>
    </div>
  )
}
