import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './browserdata.css'
import { Box, Container, Divider } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Browserdata() {
  const [toggleState1,setToggleState1] = useState(9);
  const toggleTab1 = (index: void |any) =>{
    setToggleState1(index);
  }
  return (
    <div>
        <>{Sidebar1(8)}</>
        <Box className='topcen'></Box>
        
        <NavLink to='/browserdata'>
          <div className={toggleState1 === 9 ? 'bract' : 'brnot'} onClick={() =>toggleTab1(9)}>Browser Data</div>
          </NavLink>
          <NavLink to='/emaildata'>
          <div className={toggleState1 === 10 ? 'emact' : 'emnot'} onClick={() =>toggleTab1(10)}>Email Data</div>
          </NavLink>
          <NavLink to='/calldata'>
          <div className={toggleState1 === 11 ? 'clact' : 'clnot'} onClick={() =>toggleTab1(11)}>Call Data</div>
          </NavLink>
          
        <div className='brtitle'>Browser Data<InfoOutlinedIcon className='icon'/></div>
        
        <div className='brrect2'>Browser Data Collected

        <Box className='brbox'>
          <span>
            {[...new Array(50)].map(()=>{
            return (<>
              <div className='brtext'>This is your data from -- website we will share it with our clients`</div>
              <Divider/>
              </>
            )
})}
          </span>
        </Box>
        </div>
      </div>
      
    
  )
}
