import React from 'react'
import './permission.css';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import Sidebar1 from '../../components/sidebar1/Sidebar1';

export default function Permission() {
  return (
    <div>
        <Sidebar1/>
      <div className='srect1'></div>
        
        <div className='title'>Permission</div>
        <form>
        <div className='stext1'>Update Email :</div>    
        <div className='stext2'>Update Number :</div>    
        <div className='stext3'>Location:</div>
        <div className='stext4'>Cookies:</div>
        <div className='stext5'>Call Tracking:</div>    
        <div className='stext6'>Email Sharing:</div>    
        <div className='stext7'>Notification:</div>  
        </form>
        <input className='sinput1'></input>
        <input className='sinput2'></input>
        <FormGroup>
        <FormControlLabel className='sbtn1'control={<Switch defaultChecked />} label="" />
        <FormControlLabel className='sbtn2'control={<Switch defaultChecked/>} label="" />
        <FormControlLabel className='sbtn3'control={<Switch defaultChecked/>} label="" />
        <FormControlLabel className='sbtn4'control={<Switch defaultChecked/>} label="" />
        <FormControlLabel className='sbtn5'control={<Switch defaultChecked/>} label="" />
        </FormGroup>

    </div>
  )
}
