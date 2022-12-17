import React ,{useState}from 'react'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './calldata.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import ClearIcon from '@mui/icons-material/Clear';
import { Container, Box, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Browserdata() {
  const [toggleState,setToggleState] = useState(11);
  const toggleTab = (index: void |any) =>{
    setToggleState(index);
  }
  return (
    
    <Container>
    <Sidebar1/>
    <div className='topcen'>
    <div>
    <NavLink to='/browserdata'><div className={toggleState === 9 ? 'brtopactive' : 'brtop'} onClick={()=> toggleTab(9)}>Browser Data</div></NavLink>
    <NavLink to='/emaildata'><div className={toggleState === 10 ? 'ertopactive' : 'ertop'} onClick={()=> toggleTab(10)}>Email Data</div></NavLink> 
    <NavLink to='/calldata'> <div className={toggleState === 11 ? 'cltopactive' : 'cltop'} onClick={()=> toggleTab(11)}>Call Data</div></NavLink> 
    </div>
    </div> 
    <div className='brtitle'>Call Data<InfoOutlinedIcon className='icon'/></div>
    
    <div className='brrect2'>Call Data Collected

    <Box className='brbox'>
      <span>
        {[...new Array(50)].map(()=>{
        return (<>
          <div className='brtext'>This is your data from -- website we will share it with our clients`</div>
          <Divider/>
          </>
        )
})}
      </span>
    </Box>
    </div>
  </Container>
  )
}
