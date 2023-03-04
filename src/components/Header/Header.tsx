import './header.css'
import user from '../../assets/user.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
export default function Header() {
  const logout = useState(false);
  return (
    <div>
      <Box className='header'>
        
        <KeyboardArrowDownIcon className='arrow'/>
          <div className='head1'>Username</div>
          <img className='user1' src={user} alt=''></img>
          {logout&&<div>Logout</div>}
      </Box>
    </div>
  )
}
