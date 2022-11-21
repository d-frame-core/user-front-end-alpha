import { Container, Box } from '@mui/material'
import React from 'react'
import Charts1 from '../../../components/charts/Charts1/Charts1'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import ClearIcon from '@mui/icons-material/Clear'
import './sitedistribution.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function SiteDistribution() {
  return (
    <Container>
   <Sidebar1/>
   <div className='title'>Site Distribution</div>
   <div className='sdchart'><Charts1/></div>
    <Box className='btngrp'><ButtonGroup variant="contained"  aria-label="outlined primary button group"sx={{width:'82.7vw'}} >
      <Button>Education</Button>
      <Button>Web 3</Button>
      <Button>Sports</Button>
      <Button>Social</Button>
      <Button>Food</Button>
      <Button>Stocks</Button>
      <Button>Finance</Button>
      <Button>Nature</Button>
      <Button>Crypto</Button>
      <Button>News</Button>
      <Button>Election</Button>
      <Button> Countries</Button>
    </ButtonGroup></Box>
  <Box className='sdbox1'>
   </Box>
   <Box className='sdbox2'>
    <ul className='sdlist'>
      <span>1.Youtube <a className='space2'>40 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
      <span>2.Netflix <a className='space2'>39 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
      <span>3.Codechef <a className='space2'>20 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
      <span>4.Flipkart <a className='space2'>12 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
      <span>5.Team <a className='space2'>10 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
    </ul>
   </Box>
   </Container>
  )
}
