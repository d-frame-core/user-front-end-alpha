import { Box, Container } from '@mui/material'
import React from 'react'
import Charts1 from '../../../components/charts/Charts1/Charts1'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './topsite.css'

export default function Topsite() {
  return (
   <Container>
   <Sidebar1/>
   <div className='tschart'><Charts1/></div>

  <Box className='tsbox1'>
    
   </Box>
   <div className='tsbox2'></div>
    

   </Container>
  )
}
