import { Container, Box } from '@mui/material'
import React from 'react'
import './sitebytime.css'
import Charts1 from '../../../components/charts/Charts1/Charts1'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import ClearIcon from '@mui/icons-material/Clear';

export default function SiteByTime() {
  return (
    <Container>
        <Sidebar1/>
        <div className='tschart'><Charts1/></div>
        <div className='title'>Site By Time</div>
    <Box className='tsbox1'>
    </Box>
    <Box className='tsbox2'>
         <ul className='list'>
            <span>1.Youtube <a className='space1'>40 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
            <span>2.Netflix <a className='space1'>39 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
            <span>3.Codechef <a className='space1'>20 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
            <span>4.Flipkart <a className='space1'>12 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
            <span>5.Team <a className='space1'>10 mins <ClearIcon sx={{color:'red',}} /></a></span><br/>
        </ul>
    </Box>
   </Container>
  )
}
