import { Container, Box, DialogProps, ListItemText, List, ListItem} from '@mui/material'
import React, { useState } from 'react'
import './sitebytime.css'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import Divider from '@mui/material/Divider/Divider'
import analyticsdata from '../analyticsdata'
import { NavLink } from 'react-router-dom'
import Charts2 from '../../../components/charts/Charts2/Charts2'
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '../../../components/sidebar1/Drawer'

export default function SiteByTime() {
  const ma = useMediaQuery('(min-width:880px)');
  var h:number = 300;
  var w:number =700;
  const [toggleState,setToggleState] = useState(12);
  const toggleTab = (i: any) =>{
    setToggleState(i);
  }
  const matches = useMediaQuery('(max-width:770px)');

  
  return (
    <div>
      <>{Sidebar1(5)}</>
      <a className='smopen'>
    {Drawer(5)}
    </a>
      
      <Box className='top1'>
        <NavLink to='/topsitevisited'><div className={toggleState === 11 ? "tab1active":"tab1"} onClick={()=> toggleTab(11)}>Top Sites Visited</div></NavLink>
        <Divider variant='middle' orientation='vertical' light={true} sx={{zIndex:1}}/>
        <NavLink to='/sitebytime'><div className={toggleState === 12 ? "tab2active":"tab2"} onClick={()=> toggleTab(12)}>Site By Time</div></NavLink>
        </Box>
   
    <Box className='sdbox1'>
    <div className='tschart'>{Charts2(analyticsdata,"long1",h,w,ma)}</div>
    </Box>
    <Box className='sdbox2'>
           <span> {
           analyticsdata.map(item=>{
              return (<>
              <div className='gap'>
              <a className='legendcolor'style={{background: `${item.col}`}}></a>
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
