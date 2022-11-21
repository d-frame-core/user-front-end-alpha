import './header.css'
import user from '../../assets/user.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Container,Box } from '@mui/material';

export default function Header() {
  return (
    <Container>
      <Box className='header'>
        <KeyboardArrowDownIcon className='arrow'/>
          <div className='head1'>User Name</div>
          <img className='user1' src={user} alt=''></img>
      </Box>
    </Container>
  )
}
