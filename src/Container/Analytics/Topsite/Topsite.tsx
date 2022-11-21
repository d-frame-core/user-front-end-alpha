import { Box, Container } from '@mui/material'
import React from 'react'
import Charts1 from '../../../components/charts/Charts1/Charts1'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './topsite.css'
import ClearIcon from '@mui/icons-material/Clear';


export default function Topsite() {
  return (
   <Container>
   <Sidebar1/>
   <div className='title'>Topsite Visited</div>
   <div className='tschart'><Charts1/></div>
  <Box className='tsbox1'>
   </Box>
   <Box className='tsbox2'>
    <ul className='list'>
      <span>1.Youtube <a className='space'>9 times <ClearIcon sx={{color:'red',}} /></a></span><br/>
      <span>2.Netflix <a className='space'>5 times <ClearIcon sx={{color:'red',}} /></a></span><br/>
      <span>3.Codechef <a className='space'>2 times <ClearIcon sx={{color:'red',}} /></a></span><br/>
      <span>4.Flipkart <a className='space'>1 times <ClearIcon sx={{color:'red',}} /></a></span><br/>
      <span>5.Team <a className='space'>3 times <ClearIcon sx={{color:'red',}} /></a></span><br/>
    </ul>
   </Box>
   </Container>
  )
}
