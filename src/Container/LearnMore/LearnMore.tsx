import { Container, Box, Button } from '@mui/material';
import React from 'react'
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import './learnmore.css';


export default function LearnMore() {
  return (
    <Container>
    <Sidebar1/>
    <div className='title'>Help</div>
    <Box className='lmrect'>
      
        <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',top:'10vh',color:'black',fontSize:'3vh'}}>
          Why D Frame ?
          </Button>
        <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',top:'14vh',color:'black',fontSize:'3vh'}}>
          What is value of Your Data ?
        </Button>
        <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',top:'18vh',color:'black',fontSize:'3vh'}}>
          How safe is your data with us ?
        </Button>
        <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',top:'22vh',color:'black',fontSize:'3vh'}}>
          How will you get token ?
        </Button>
        <Button sx={{width:'65vw',height:'10vh',bgcolor:'white',top:'26vh',color:'black',fontSize:'3vh'}}>
          Faqs
        </Button>
     
    </Box>

  </Container>
  )
}
