/** @format */

//Importing the required packages
import './header.css';
import user from '../../assets/user.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useEffect, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useNavigate } from 'react-router-dom';

import { Button, Menu, MenuItem } from '@mui/material';
import { Web3Button } from '@web3modal/react';
import { MyContext } from '../context/Context';
export default function Header() {
  const { disconnect } = useDisconnect();
  const { userDataa, image } = useContext(MyContext);
  var { address, isConnected }: any = useAccount();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [logout, setLogout] = useState(false);

  const handleDisconnect = async () => {
    // Disconnect from the provider when the button is clicked

    if ((window as any).ethereum) {
      (window as any).ethereum.removeAllListeners();
    }
    // Disconnect from the provider.
    console.log('Disconnecting the provider');

    // navigate to home page
    navigate('/');
  };
  useEffect(() => {
    if (address == undefined) {
      navigate('/');
      disconnect();
      if ((window as any).ethereum) {
        (window as any).ethereum.removeAllListeners();
      }
    }
  }, [address]);
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
        <div className='head1'>
          {userDataa ? userDataa.kyc1.details.userName : 'UserName'}
        </div>
        <img
          className='user1'
          src={
            userDataa
              ? userDataa.profileImage.toString().length < 3
                ? image
                : userDataa.profileImage
              : image
          }
          alt=''></img>
        {/* Dropdown menu */}
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}>
          <MenuItem onClick={() => handleClose()}>
            <div>
              <Web3Button />
            </div>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
}
