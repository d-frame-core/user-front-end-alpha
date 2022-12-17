import { Container, Box, DialogProps, ListItemText, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import './sitebytime.css'
import Charts1 from '../../../components/charts/Charts1/Charts1'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import ClearIcon from '@mui/icons-material/Clear';

import TabScrollButton from '@mui/material/TabScrollButton';
import Divider from '@mui/material/Divider/Divider'
import analyticsdata from '../analyticsdata'
import { NavLink } from 'react-router-dom'
import Charts2 from '../../../components/charts/Charts2/Charts2'

const data = [
  { name: "YouTube", value: 400 },
  { name: "Netflix", value: 300 },
  { name: "Codechef", value: 300 },
  { name: "Flipkart", value: 200 },
  { name: "TATA NEU", value: 189 }
];

export default function SiteByTime() {

  const [toggleState,setToggleState] = useState(1);
  const toggleTab = (index: any) =>{
    setToggleState(index);
  }
  return (
    <Container>
      <Sidebar1/>
      <div className='top1'>
        <NavLink to='/sitebytime'><div className={toggleState === 1? "tab1active" : "tab1"} onClick={()=> toggleTab(1)}>Site by Time</div></NavLink>
        <Divider variant='middle' orientation='vertical' light={true}/>
        <NavLink to='/topsitevisited'><div className={toggleState === 2? "tab2active" : "tab2"}onClick={()=> toggleTab(2)}>Topsite Visited</div></NavLink>
      </div>
    <Box className='tsbox1'>
    <div className='tschart'>{Charts2(analyticsdata)}</div>
    </Box>
    <Box className='tsbox2'>
           <span> {
           analyticsdata.map(item=>{
              return (<>
              <div className='gap'>
                {item.name}
                <a className='gap1'>{item.long}</a> 
              </div>
              <Divider className='divider'/></>
              );
              
            })
            }</span><br/>
       
    </Box>
   </Container>
  )
}
