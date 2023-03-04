import { Box, Container, Divider } from '@mui/material'
import React,{ useState } from 'react'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './topsite.css'
import { NavLink } from 'react-router-dom'
import analyticsdata from '../analyticsdata'
import Charts2 from '../../../components/charts/Charts2/Charts2'
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Topsite() {
  const ma = useMediaQuery('(min-width:880px)');
  var h:number = 300;
 var w:number =700;
  const [toggleState,setToggleState] = useState(11);
  const toggleTab = (i: any) =>{
    setToggleState(i);
  }
  return (
   <div><>{Sidebar1(5)}</>
      <Box  className='top1'>
        <NavLink to='/topsitevisited'><div className={toggleState === 11 ? "tab1active":"tab1"} onClick={()=> toggleTab(11)}>Top Sites Visited</div></NavLink>
        <Divider variant='middle' orientation='vertical' light={true}/>
        <NavLink to='/sitebytime'><div className={toggleState === 12 ? "tab2active":"tab2"} onClick={()=> toggleTab(12)}>Site By Time</div></NavLink>
        </Box>
   
  <Box className='sdbox1'>
  <div className='tschart'>{Charts2(analyticsdata,"time1",h,w,ma)}</div>
   </Box>
   <Box className='sdbox2'>
   <span> {
           analyticsdata.map(item=>{
              return (<>
              <div className='gap'>
                {item.name}
                <a className='gap1'>{item.time1+" times"}</a> 
              </div>
              <Divider /></>
              );
              
            })
            }</span><br/>
   </Box>
   </div>
  )
}


