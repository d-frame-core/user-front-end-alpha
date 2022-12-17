import { Box, Container, Divider } from '@mui/material'
import React,{ useState } from 'react'
import Charts1 from '../../../components/charts/Charts1/Charts1'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './topsite.css'
import { NavLink } from 'react-router-dom'
import analyticsdata from '../analyticsdata'
import Charts2 from '../../../components/charts/Charts2/Charts2'



export default function Topsite() {
 
 
  const [toggleState,setToggleState] = useState(2);
  const toggleTab = (index: any) =>{
    setToggleState(index);
  }
  return (
   <Container>
   <Sidebar1/>
   <div className='top1'>
        <NavLink to='/sitebytime'><div className={toggleState === 1? "tab1active" : "tab1"} onClick={()=> toggleTab(1)}>Site BY Time</div></NavLink>
        <Divider variant='middle' orientation='vertical' light={true}/>
        <NavLink to='/topsitevisited'><div className={toggleState === 2? "tab2active" : "tab2"}onClick={()=> toggleTab(2)}>Topsite Visited</div></NavLink>
      </div>
   
  <Box className='sdbox1'>
  <div className='tschart'>{Charts2(analyticsdata)}</div>
   </Box>
   <Box className='sdbox2'>
   <span> {
           analyticsdata.map(item=>{
              return (<>
              <div className='gap'>
                {item.name}
                <a className='gap1'>{item.times}</a> 
              </div>
              <Divider className='divider'/></>
              );
              
            })
            }</span><br/>
   </Box>
   </Container>
  )
}


