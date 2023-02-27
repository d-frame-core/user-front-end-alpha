import { Container, Box, DialogProps, ListItemText, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import './sitebytime.css'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import Divider from '@mui/material/Divider/Divider'
import analyticsdata from '../analyticsdata'
import { NavLink } from 'react-router-dom'
import Charts2 from '../../../components/charts/Charts2/Charts2'

export default function SiteByTime() {

  const [toggleState,setToggleState] = useState(12);
  const toggleTab = (i: any) =>{
    setToggleState(i);
  }
  return (
    <div>
      <>{Sidebar1(5)}</>
      
      <Box sx={{maxWidth:'84%'}}className='top1'>
        <NavLink to='/topsitevisited'><div className={toggleState === 11 ? "tab1active":"tab1"} onClick={()=> toggleTab(11)}>Top Sites Visited</div></NavLink>
        <Divider variant='middle' orientation='vertical' light={true} sx={{zIndex:1}}/>
        <NavLink to='/sitebytime'><div className={toggleState === 12 ? "tab2active":"tab2"} onClick={()=> toggleTab(12)}>Site By Time</div></NavLink>
        </Box>
   
    <Box className='sdbox1'>
    <div className='tschart' style={{paddingTop:'1000px',border:'2px solid black'}}>{Charts2(analyticsdata,"long1")}</div>
    </Box>
    <Box className='sdbox2'>
           <span> {
           analyticsdata.map(item=>{
              return (<>
              <div className='gap'>
                {item.name}
                <a className='gap1'>{item.long1+" minutes"}</a> 
              </div>
              <Divider/></>
              );
              
            })
            }</span><br/>
       
    </Box>
   </div>
  )
}
