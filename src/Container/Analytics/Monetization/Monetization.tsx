import { Container, Box } from '@mui/material'
import React from 'react'
import Charts2 from '../../../components/charts/Charts2/Charts2'
import Linecharts from '../../../components/charts/linechart/Linechart'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './monetization.css'
export default function Monetization() {
  return (
    <Container>
        <Sidebar1/>
        <div className='title'>Monetization</div>
        <Box className='mRectangle'>
            <div className='mlinechart'><Linecharts/></div>
        </Box>
        <Box className='mbox1'><Charts2/></Box>
        <Box className='mbox2'><Charts2/></Box>
    </Container>
  )
}
