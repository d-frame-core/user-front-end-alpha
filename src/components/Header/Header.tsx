//Importing the required packages 
import './header.css'
import user from '../../assets/user.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import {useDisconnect} from 'wagmi';

//declaring the function Header
export default function Header() {
  //creating the useState component
  
  const [logout,setLogout] = useState(false);
  return (
    <div>
      <Box className='header'>
        
        <IconButton className='arrow' onClick={()=>setLogout(!logout)}><KeyboardArrowDownIcon /></IconButton>
          <div className='head1'>Username</div>
          <img className='user1' src={user} alt=''></img>
          {logout&&<><div className='logout'>Log out</div></>}
      </Box>
    </div>
  )
}
