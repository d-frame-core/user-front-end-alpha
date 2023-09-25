/** @format */

//Importing the required packages
import './header.css';
import user from '../../assets/user.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useDisconnect } from 'wagmi';
import { useNavigate } from 'react-router-dom';

import { Button, Menu, MenuItem } from '@mui/material';
//declaring the function Header
export default function Header() {
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //creating the useState component

  const [logout, setLogout] = useState(false);

  const handleDisconnect = async () => {
    disconnect();
    // Disconnect from the provider when the button is clicked
    if ((window as any).ethereum) {
      (window as any).ethereum.removeAllListeners();
    }
    // Disconnect from the provider.
    console.log('Disconnecting the provider');

    // navigate to home page
    navigate('/');
  };

  return (
    <div>
      <Box className='header'>
        <IconButton
          className='arrow'
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={(e) => handleClick(e as any)}>
          <KeyboardArrowDownIcon />
        </IconButton>
        <div className='head1'>Username</div>
        <img
          className='user1'
          src={user}
          alt=''></img>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}>
          <MenuItem onClick={() => handleClose()}>
            <div onClick={() => handleDisconnect()}>Logout</div>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
}
