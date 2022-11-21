import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './browserdata.css'

export default function Browserdata() {
  return (
    <div>
        <Sidebar1/>
      <div className='brRect'>
        <div className='brrect1'><div className='brtext1'>Browser Data Policy</div></div>
        <div className='brrect2'><div className='brtext2'>Browser Data Collected</div>
</div>
      </div>
      <div className='brtext3'>We take data only for analyzing, we do not share direct data with anyone else directly.</div>
      <div className='brtext'>
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
