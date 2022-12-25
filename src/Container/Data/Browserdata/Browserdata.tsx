import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './browserdata.css'
import { Box, Container, Divider } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

var b:any={};
  const browser={
    name:'Browser Data',
    detial:'Browser Data Collected'
  };
  const email={
    name:'Email Data',
    detial:'Email Data Collected'
  };
  const call={
    name:'Call Data',
    detial:'Call Data Collected'
  };

function Browserdata() {
  const [toggleState1,setToggleState1] = useState(9);
  const toggleTab1 = (index: void |any) =>{
    setToggleState1(index);
  }
  
  if(toggleState1 === 9){
    (b=browser);
  }
  else if(toggleState1 === 10){
    (b=email);
  }
  else{
    (b=call);
  }

  return (
    <div>
        <>{Sidebar1(8)}</>

          <Container maxWidth='lg' className='arm' >
            <a className={toggleState1 === 9 ? 'bract' : 'brnot'} onClick={() =>toggleTab1(9)}>Browser Data</a>
            <a className={toggleState1 === 10 ? 'emact' : 'emnot'} onClick={() =>toggleTab1(10)}>Email Data</a>
            <a className={toggleState1 === 11 ? 'clact' : 'clnot'} onClick={() =>toggleTab1(11)}>Call Data</a> 
          </Container>
          <div className='brtitle'>{b.name}<InfoOutlinedIcon className='icon'/></div>
          <div className='brrect2'>{b.detial}
        <Box className='brbox'>
          <span>
            {[...new Array(50)].map(()=>{
            return (<>
              <div className='brtext'>`This is your data from <b>{b.name}</b> website we will share it with our clients`</div>
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

export default Browserdata;