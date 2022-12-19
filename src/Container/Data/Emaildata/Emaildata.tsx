import React, { useState } from 'react'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './emaildata.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import ClearIcon from '@mui/icons-material/Clear';
import { Container, Box, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Browserdata() {
  const [toggleState1,setToggleState1] = useState(10);
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
       
      
    <div className='brtitle'>Email Data<InfoOutlinedIcon className='icon'/></div>
    
    <div className='brrect2'>Email Data Collected

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
