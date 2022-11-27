import { Box, Button, Container, Grid, Hidden } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import './sidebar1.css';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { NavLink } from 'react-router-dom';
import df from '../../assets/dframe.png';
import Header from '../Header/Header';
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


export default function Sidebar1() {
  
  return (
   <Container>
   <Header/>
   <img src={df} className='dframe' alt=''/>
   <div className='dftext'>DFrame</div>
   <div className='rectangle'>
            <div className='rect3'><div className='text6'>Need help with Dframe?</div></div>
            <div className='rect4'></div>
        </div>
  
   <Box className='side'>
    <Grid className='item'>
      <NavLink to='/profile' style={{textDecoration:'none'}}>
        <Button  sx={{width:'17.3vw',height:'5vh',color:'white',paddding:'10vh'}} startIcon={<PortraitIcon/>}> Profile</Button>
      </NavLink>

      <NavLink to='/wallet' style={{textDecoration:'none'}}>
        <Button   sx={{width:'17.3vw',height:'5vh',color:'white'}} startIcon={<AccountBalanceWalletOutlinedIcon/>}>Wallet</Button>
      </NavLink>
   
   <TreeView 
      aria-label="file system navigator"
        sx={{width:'17vw', paddingTop:'0.2vh',paddingDown:'0vh',color:'white'}}
      className='b'
    >
  <TreeItem nodeId="1" label="DATA" >
    <Button sx={{width:'14.3vw',height:'5vh',color:'white'}} className='t'startIcon={<CalendarTodayOutlinedIcon/>}>
      <NavLink to='/browserdata' style={{textDecoration:'none',color:'white'}}>
        <TreeItem nodeId="2" label="Browser Data" />
      </NavLink>
    </Button>
    
  <Button sx={{width:'14.3vw',height:'5vh',color:'white'}} className='t'>
    <NavLink to='/calldata' style={{textDecoration:'none',color:'white'}}>
      <TreeItem nodeId="3" label="Call Data" />
    </NavLink>
  </Button>

  <Button sx={{width:'14.3vw',height:'5vh',color:'white'}} className='t'>
    <NavLink to='/emaildata' style={{textDecoration:'none',color:'white'}}>
      <TreeItem nodeId="4" label="Email Data" />
    </NavLink>
  </Button>
      
  <Button sx={{width:'14.3vw',height:'5vh',color:'white'}} className='t'>
    <NavLink to='/survey' style={{textDecoration:'none',color:'white'}}>
      <TreeItem nodeId="5" label="Survey" />
    </NavLink>
  </Button>
  </TreeItem>
</TreeView>
    <NavLink to='/rewards' style={{textDecoration:'none'}}>
      <Button className=''sx={{width:'17.3vw',height:'5vh',color:'white'}}>Rewards
      </Button>
    </NavLink>
  <TreeView 
   aria-label="file system navigator"
   sx={{ width:'17.3vw' ,paddingTop:'0.2vh'}}
   className='b'
 >
   <TreeItem nodeId="1" label="ANALYTICS">
     <Button>
        <NavLink to='/topsitevisited'style={{textDecoration:'none',color:'white'}}>
          <TreeItem nodeId="2" label="TopSitevisited" />
        </NavLink>
      </Button>
      <Button>
        <NavLink to='/monetization'style={{textDecoration:'none',color:'white'}}>
         <TreeItem nodeId="3" label="Monetization" />
        </NavLink>
      </Button>
      <Button>
        <NavLink to='/sitebytime'style={{textDecoration:'none',color:'white'}}>
          <TreeItem nodeId="4" label="Site By Time" />
        </NavLink>
      </Button>
      <Button>
        <NavLink to='/sitedistribution'style={{textDecoration:'none',color:'white'}}>
          <TreeItem nodeId="5" label="Site distribution" />
        </NavLink>
      </Button>
   </TreeItem> 
 </TreeView>
      <Button sx={{width:'17.3vw',height:'5vh',color:'white'}}>
        <NavLink to='/permission'style={{textDecoration:'none',color:'white'}}>
          <div className=''>Permission</div>
        </NavLink>
      </Button>
</Grid>
</Box>
<NavLink to='/help'>
        <div className='text7'>Help</div>
        </NavLink>
      <NavLink to='/learnmore' className=''>
        <div className='text8'>LearnMore</div>
        </NavLink>
   </Container>
  )
}
