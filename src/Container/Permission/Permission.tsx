/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ useState }  from 'react'; 
import './permission.css';
import { FormControlLabel, Switch, Box } from '@mui/material';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import { Container } from '@mui/system';

export default function Permission(){
  const[number,setnumber] = useState('');
  const[email,setemail] = useState('');
  const[checked,setChecked] = useState('false');
  const handlesubmit=(e: any) => { 
    e.preventDefault();
    console.log(email, number); 
    }
    
  const handleChange = (event:any) => {
      setChecked(event.target.checked)
      console.log({checked})
    }
  return (
      <>
      <>{Sidebar1(3)}</>
      <Container maxWidth={false} sx={{maxWidth:'70%'}} className="percont">
        <a className="pertitle">Permission</a> 
        <Box><form className="perbox" onSubmit={handlesubmit}>

          <a>Update Email<a className="percol">:</a> <input className="perinput" placeholder="Enter Email" name='email' type='email' value={email} onChange={(e)=>setemail(e.target.value)} required ></input></a>
          <a>Update Number<a className="percol">:</a> <input className="perinput" placeholder='Enter Number'name='number' type='number' value={number} onChange={(e)=>setnumber(e.target.value)} required ></input></a>
          
          <a>Location<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>
          <a>Cookies<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>
          <a>Call Tracking<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>
          <a>Email Sharing<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>
          <a>Notification<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>

          <button onClick={handlesubmit} type="submit" className="perbtn">Save</button>
          </form>
        </Box>
      </Container>
      
      </>
  );
}