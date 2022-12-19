import { Box, Button, Container, Grid, Hidden } from '@mui/material'
import { width } from '@mui/system'
import React, { useState } from 'react'
import './sidebar1.css';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { NavLink } from 'react-router-dom';
import df from '../../assets/dframe.png';
import Header from '../Header/Header';
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import FlipCameraAndroidOutlinedIcon from '@mui/icons-material/FlipCameraAndroidOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PaddingOutlinedIcon from '@mui/icons-material/PaddingOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


export default function Sidebar1(index: any) {
 
  const [dataActive, setDataActive] = useState(false);
  const [dropActive, setDropActive] = useState(false);
  const [toggleState,setToggleState] = useState(index);
  const toggleTab = (index: any) =>{
    setToggleState(index);
  }

  return (
    <>
   <div>
   <Header/>
   <img src={df} className='dframe' alt=''/>
   <div className='dftext'>DFrame</div>
  
  
   <Box className='side'>
    <div className='item'>
      
      <NavLink to='/profile' style={{textDecoration:'none'}} onClick={()=> toggleTab(1)} >
        <div className={toggleState === 1? "active" : "notActive"} >
          <PortraitIcon className='ic'/>Profile</div>
      </NavLink>

      <NavLink to='/wallet' style={{textDecoration:'none',color:'white',width:'18vw'}}onClick={()=> toggleTab(2)}>
        <div className={toggleState === 2? "active" : "notActive"}>
          <AccountBalanceWalletOutlinedIcon className='ic' />Wallet</div>
      </NavLink>
      
      <NavLink to='/permission'style={{textDecoration:'none',color:'white'}}>
      <div className={toggleState === 3? "active" : "notActive"}onClick={()=> toggleTab(3)}>
        <SettingsOutlinedIcon className='ic'/>Permission</div>
      </NavLink>
      
      <NavLink to='#' onClick={(e)=>{setDataActive(!dataActive)}}  style={{textDecoration:'none',color:'white'}} className='notActive1'>
      <div ><KeyboardArrowDownOutlinedIcon className='ic'/><InsertChartOutlinedOutlinedIcon className='ic'/>Analytics</div></NavLink>
        <div >
          {dataActive && (
            <>
              <div><NavLink to='/topsitevisited' style={{textDecoration:'none',color:'white'}} >
                <div className={toggleState === 5? "active" : "notActive"}onClick={()=> toggleTab(5)}>
                  <SearchOutlinedIcon className='ic'/>Sites Visited</div></NavLink></div>
              <div><NavLink to='/sitedistribution' style={{textDecoration:'none',color:'white'}}>
                <div className={toggleState === 6? "active" : "notActive"}onClick={()=> toggleTab(6)}>
                <SearchOutlinedIcon className='ic'/>Site distribution</div></NavLink></div>
            </>
        )}
        </div>
        <NavLink to='/rewards' style={{textDecoration:'none',color:'white'}}>
    <div className={toggleState === 4? "active" : "notActive"}onClick={()=> toggleTab(4)}>
      <DnsOutlinedIcon className='ic'/>Rewards</div> 
    </NavLink>
     
    
    <NavLink to='/referals' style={{textDecoration:'none',color:'white'}}>
    <div className={toggleState === 7? "active" : "notActive"}onClick={()=> toggleTab(7)}>
      <FlipCameraAndroidOutlinedIcon className='ic'/>Referals</div>
        </NavLink>
    <NavLink to='/browserdata' style={{textDecoration:'none',color:'white'}}>
    <div className={toggleState === 8? "active" : "notActive"}onClick={()=> toggleTab(8)}>
    <BarChartOutlinedIcon className='ic'/>Data</div>
    </NavLink>
    <NavLink to='/survey' style={{textDecoration:'none',color:'white'}}>
    <div className={toggleState === 9? "active" : "notActive"}onClick={()=> toggleTab(9)}>
      <PaddingOutlinedIcon className='ic'/>Survey</div>
    </NavLink>
</div>
      

</Box>

   </div>
   <div>
<div className='rectangle'>
        <div className='rect3'>
        <div className='text6'>Need help with Dframe?</div>
        <NavLink to='/help'> <div className={toggleState=== 10? "rect4":'rect1'} onClick={()=>toggleTab(10)}>Go to Help</div> </NavLink>
        </div>
        </div>

            <NavLink to='/learnmore' className=''>
        <div className={toggleState=== 11? "text8":'text9'} onClick={()=>toggleTab(10)}>LearnMore</div>
        </NavLink>
   </div>
   </>
  )
}
