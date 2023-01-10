import { Container, Box, DialogProps, ListItemText, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import './sitebytime.css'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
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

  const [toggleState,setToggleState] = useState(12);
  const toggleTab = (i: any) =>{
    setToggleState(i);
  }
  return (
    <div>
      <>{Sidebar1(5)}</>
      
      <Box sx={{maxWidth:'82%'}}className='top1'>
        <NavLink to='/topsitevisited'><div className={toggleState === 11 ? "tab1active":"tab1"} onClick={()=> toggleTab(11)}>Topsite Visited</div></NavLink>
        <Divider variant='middle' orientation='vertical' light={true} sx={{zIndex:1}}/>
        <NavLink to='/sitebytime'><div className={toggleState === 12 ? "tab2active":"tab2"} onClick={()=> toggleTab(12)}>Site by time</div></NavLink>
        </Box>
   
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
              <Divider/></>
              );
              
            })
            }</span><br/>
       
    </Box>
   </div>
  )
}
