import React from 'react'
import './help.css';
import { Box, Button, ButtonGroup, Container } from '@mui/material';
import Sidebar1 from '../../components/sidebar1/Sidebar1';

export default function Help() {
  return (
    <Container>
      <Sidebar1/>
      <div className='title'>Help</div>
      <Box className='hrect'>
        
          <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',top:'10vh',color:'black',fontSize:'3vh'}}>
            Read More
            </Button>
          <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',top:'14vh',color:'black',fontSize:'3vh'}}>
            Privacy Policy
          </Button>
          <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',top:'18vh',color:'black',fontSize:'3vh'}}>
            Support
          </Button>
          <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',top:'22vh',color:'black',fontSize:'3vh'}}>
            terms of services
          </Button>
          <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',borderRadius:'1.1vh',textAlign:'left',top:'26vh',color:'black',fontSize:'3vh'}}>
            Faqs
          </Button>
       
      </Box>

    </Container>
    
  )
}

