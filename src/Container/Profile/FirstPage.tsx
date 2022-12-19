import { Box, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './firstpage.css'

export default function FirstPage() {
  return (
    <div className='fsbody'>
        <Box className='fbox1'>
          <div className='ftitle'>User Profile</div>
          <Box className='fbox2'>
          <div>First Name :<input className='in'/></div>
          <div>Last Name :<input className='in'/></div>
          <div>User Name :<input className='in'/></div>
          <div>Email :<input className='in'/></div>
          <div>Phone No :<input className='in'/></div>
          <div>Address :<input className='in'/></div>
         
          </Box>
          <NavLink to='/profile' style={{textDecoration:'none'}}>
            <Button variant='contained'sx={{width:'5vw'}}  className='btnup'>Submit</Button></NavLink>
        </Box>
    </div>
  )
}
