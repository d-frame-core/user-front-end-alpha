/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ useState }  from 'react'; 
import './permission.css';
import { FormControlLabel, Switch, Box, Radio, FormControl, RadioGroup } from '@mui/material';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import { Container } from '@mui/system';

export default function Permission(){
  
  const[checked,setChecked] = useState('true');
  const [value, setValue] = React.useState('aws');
  const handlesubmit=(e: any) => { 
    e.preventDefault();
    }
    
  const handleChange = (event:any) => {
      setChecked(event.target.checked)
      setValue((event.target as HTMLInputElement).value);
      console.log({checked})
    }
  return (
      <>
      <>{Sidebar1(3)}</>
      <Container maxWidth={false} sx={{maxWidth:'70%'}} className="percont">
      <a className="pertitle">Permission</a> 
        <Box><form className="perbox" onSubmit={handlesubmit}>

          <a>Location<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>
          <a>Cookies<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>
          <a>Call Tracking<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>
          <a>Email Sharing<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>
          <a>Notification<a className="percol">:</a><FormControlLabel className="pertog" control={<Switch defaultChecked onChange={handleChange} />} label="" /></a>
          <a>Storage Option<a className="percol">:</a>
            <FormControl>
              <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange} className='pertog1'>
                 <FormControlLabel value="aws" control={<Radio />} label="AWS" />
                  <FormControlLabel value="ipfs" control={<Radio />} label="IPFS" />
                </RadioGroup>
            </FormControl>
          </a>
          <a>Devices<a className="percol">:</a><FormControlLabel className="pertog" disabled control={<Switch />} label="(In Progress)" /></a>
          
          <button onClick={handlesubmit} type="submit" className="perbtn">Save</button>

          </form>
        </Box>
      </Container>
      </>
  );
}