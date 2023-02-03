import './header.css'
import user from '../../assets/user.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <div>
      <Box className='header'>
        <KeyboardArrowDownIcon className='arrow'/>
          <div className='head1'>Username</div>
          <img className='user1' src={user} alt=''></img>
      </Box>
    </div>
  )
}
