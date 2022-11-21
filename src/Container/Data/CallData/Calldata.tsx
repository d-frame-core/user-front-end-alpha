import React from 'react'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './calldata.css'
import ClearIcon from '@mui/icons-material/Clear';

export default function Browserdata() {
  return (
    <div>
        <Sidebar1/>
        <div className='title'>Call Data</div>

      <div className='crRect'>
        <div className='crrect1'><div className='crtext1'>Call Data Policy</div></div>
        <div className='crrect2'><div className='crtext2'>Call Data Collected</div>
</div>
      </div>
      <div className='crtext3'>We take data only for analyzing, we do not share direct data with anyone else directly.</div>
      <div className='crtext'>
        <ul>
        <a> This is your data from -- website we will share it with our clients <ClearIcon sx={{color:'red',}} className='c'/></a><br/>
            <a> This is your data from -- website we will share it with our clients <ClearIcon sx={{color:'red',}} className='c'/></a><br/>
            <a> This is your data from -- website we will share it with our clients <ClearIcon sx={{color:'red',}} className='c'/></a><br/>
            <a> This is your data from -- website we will share it with our clients <ClearIcon sx={{color:'red',}} className='c'/></a><br/>
            <a> This is your data from -- website we will share it with our clients <ClearIcon sx={{color:'red',}} className='c'/></a><br/>
            <a> This is your data from -- website we will share it with our clients <ClearIcon sx={{color:'red',}} className='c'/></a><br/>
            <a> This is your data from -- website we will share it with our clients <ClearIcon sx={{color:'red',}} className='c'/></a><br/>
            <a> This is your data from -- website we will share it with our clients <ClearIcon sx={{color:'red',}} className='c'/></a><br/>
        </ul>
        
      </div>
    </div>
  )
}
