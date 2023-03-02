import { Box } from '@mui/material'
import{ useState } from 'react'
import './sidebar1.css';
import { NavLink } from 'react-router-dom';
import df from '../../assets/dframe.png';
import Header from '../Header/Header';
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PaddingOutlinedIcon from '@mui/icons-material/PaddingOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Sidebar1(index : any) {
  var [dataActive, setDataActive] = useState(false);
  var dataActive1 = false;
  const[toggleState,setToggleState] = useState(index);
  
  const toggleTab = (index: any) =>{
    setToggleState(index);
  }
  
  if(toggleState=== 5 ||toggleState=== 6 ){
      dataActive=(true);
    }

  return (
    <>
    <div>
      <Header/>
        <img src={df} className='dframe' alt=''/>
   
        <div className='dftext'>D FRAME</div>

        <Box className='side'>
          <div className='item'>
            
            <NavLink to='/profile' style={{textDecoration:'none'}} onClick={()=> index=1} >
              <div className={toggleState === 1? "act1" : "notActive"} >
                <PortraitIcon className='ic'/>Profile</div>
            </NavLink>

            <NavLink to='/wallet' style={{textDecoration:'none',color:'white',width:'18vw'}}onClick={()=> index=2}>
              <div className={toggleState === 2? "act1" : "notActive"}>
                <AccountBalanceWalletOutlinedIcon className='ic' />Wallet</div>
            </NavLink>
            
            <NavLink to='/permission'style={{textDecoration:'none',color:'white'}}>
            <div className={toggleState === 3? "act1" : "notActive"}onClick={()=> toggleTab(3)}>
              <SettingsOutlinedIcon className='ic'/>Permission</div>
            </NavLink>
            
            <NavLink to='#' onClick={()=>{setDataActive(!dataActive)}}  style={{textDecoration:'none',color:'white'}} className='notActive1'>
            <div ><InsertChartOutlinedOutlinedIcon className='ic'/>Analytics {dataActive && <KeyboardArrowDownOutlinedIcon className='kc'/>}{!dataActive && <ChevronLeftIcon className='kc'/>}</div></NavLink>
              <div >
                {dataActive&&(
                  <>
                    <div><NavLink to='/topsitevisited' style={{textDecoration:'none',color:'white'}} >
                      <div className={toggleState === 5? "act3" : "notActive2"}onClick={()=> toggleTab(5)}>
                        <SearchOutlinedIcon className='ic'/>Sites Visited</div></NavLink></div>
                    <div><NavLink to='/sitedistribution' style={{textDecoration:'none',color:'white'}}>
                      <div className={toggleState === 6? "act3" : "notActive2"}onClick={()=> toggleTab(6)}>
                      <SearchOutlinedIcon className='ic'/>Site distriution</div></NavLink></div>
                  </>
              )}
              </div>
              <NavLink to='/rewards' style={{textDecoration:'none',color:'white'}}>
          <div className={toggleState === 4? "act1" : "notActive"}onClick={()=> toggleTab(4)}>
            <DnsOutlinedIcon className='ic'/>Rewards</div> 
          </NavLink>
          <NavLink to='/browserdata' style={{textDecoration:'none',color:'white'}}>
          <div className={toggleState === 8? "act1" : "notActive"}onClick={()=> toggleTab(8)}>
          <BarChartOutlinedIcon className='ic'/>Data</div>
          </NavLink>
          <NavLink to='/survey' style={{textDecoration:'none',color:'white'}}>
          <div className={toggleState === 9? "act1" : "notActive"}onClick={()=> toggleTab(9)}>
            <PaddingOutlinedIcon className='ic'/>Survey</div>
          </NavLink>
      </div>
            

</Box>

   </div>
   <div>
<div className='rectangle'>
        <div className='rect3'>
        <div className='text6'>Need help with D Frame?</div>
        <NavLink to='/help'> <div className='rect1' >Go to Help</div> </NavLink>
        </div>
        </div>

            <NavLink to='/learnmore' className=''>
        <div className='text9'>Learn More</div>
        </NavLink>
   </div>
   </>
  )
}
