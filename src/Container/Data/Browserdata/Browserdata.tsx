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
  var st:string;
  const [hoverOpen,setHoverOpen]=useState(false);
   const  Open=()=>{
    window.open('Dframe.pdf')
   }
  
  if(toggleState1 === 9){
    (b=browser);
    st='d11';
  }
  else if(toggleState1 === 10){
    (b=email);
    st='';  }
  else{
    (b=call);
    st='d12'
  }
  const setpop=()=>{
    <div></div>
  }
  return (
    <div>
        <>{Sidebar1(8)}</>

          <Container maxWidth={false} sx={{maxWidth:'82%'}} className='arm' >
            <Box className={toggleState1 === 9 ? 'bract' : 'brnot'} onClick={() =>toggleTab1(9)}>Browser Data</Box>
            <div className={st}></div>
            <Box className={toggleState1 === 10 ? 'emact' : 'emnot'} onClick={() =>toggleTab1(10)}>Email Data</Box>
            
            <Box className={toggleState1 === 11 ? 'clact' : 'clnot'} onClick={() =>toggleTab1(11)}>Call Data</Box> 
          </Container>
          <div id='iccs'>Privacy policy</div>
          <div className='brtitle'  >{b.name}<a href='#' onClick={Open}  style={{textDecoration:'none',color:'#017EFA'}}  ><InfoOutlinedIcon  className='icon' id='icon' onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}/>{hoverOpen && <p className='pp'>Privacy Policy</p>}</a></div>
          <Container maxWidth={false}  sx={{maxWidth:'75%',minHeight:'72vh'}}className='brrect2'>{b.detial}
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
        </Container>
       
      </div>
      
    
  )
}

export default Browserdata;