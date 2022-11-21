import React from 'react'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './emaildata.css'
import ClearIcon from '@mui/icons-material/Clear';

export default function Browserdata() {
  return (
    <div>
        <Sidebar1/>
        <div className='title'>Email Data</div>

      <div className='erRect'>
        <div className='errect1'><div className='ertext1'>Email Data Policy</div></div>
        <div className='errect2'><div className='ertext2'>Email Data Collected</div>
</div>
      </div>
      <div className='ertext3'>We take data only for analyzing, we do not share direct data with anyone else directly.</div>
      <div className='ertext'>
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
