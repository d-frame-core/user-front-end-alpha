import { Backdrop, Box } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './firstpage.css'
import { Container } from '@mui/system'

export var userdata: any = {};

export default function FirstPage() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [arlist, setarlist] = useState({});
  const [field, setField] = useState('');
  const [fieldopen, setFieldOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (firstname === '') {
      setField('First Name');
    }
    else if (lastname === '') {
      setField('Last Name');
    }
    else if (username === '') {
      setField('User Name');
    }
    else if (email === '') {
      setField('Email');
    }
    else if (number === '') {
      setField('Phone Number');
    }
    else if (address === '') {
      setField('Address');
    }
    else {
      userdata = {
        F1: firstname,
      }
      setarlist(userdata);
      console.log(userdata);
      navigate('/profile');
      console.log(arlist);
      return;
    }
    setFieldOpen(true);
  }

  return (
    <div className='fsbody'>
      <Container maxWidth='sm' className='fbox1'>
        <div className='ftitle'>User Profile</div>
        <form className='fbox2' >
          <div className='alignleft'>First Name<a className='colon'>:
            <input className='in' type='text' name='firstname' value={firstname} onChange={(e) => setFirstName(e.target.value)} required={true} />
          </a>
          </div>
          <div className='alignleft'>Last Name<a className='colon'>:
            <input className='in' type='text' name='lastname' value={lastname} onChange={(e) => setLastName(e.target.value)} required={true} />
          </a>
          </div>
          <div className='alignleft'>User Name<a className='colon'>:
            <input className='in' type='text' name='username' value={username} onChange={(e) => setUserName(e.target.value)} required={true} />
          </a>
          </div>
          <div className='alignleft'>Email<a className='colon'>:
            <input className='in' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
          </a>
          </div>
          <div className='alignleft'>Phone Number<a className='colon'>:
            <input className='in' type='tel' name='number' value={number} onChange={(e) => setNumber(e.target.value)} required={true} />
          </a>
          </div>
          <div className='alignleft'>Address<a className='colon'>:
            <input className='in' type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} required={true} />
          </a>
          </div>
          <button className='btnup' onClick={handleSubmit} >Submit</button>
        </form>

      </Container>
      <Backdrop open={fieldopen}>
        <Box className='fillbox'>
          <div className='a1'>Please Fill in the {field}</div>
          <button className='a2' onClick={() => setFieldOpen(false)}>Okay</button>
        </Box>
      </Backdrop>
    </div>
  )
}
