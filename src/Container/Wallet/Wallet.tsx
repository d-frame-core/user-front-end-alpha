import { Box, Container } from '@mui/material';
import React, { useState } from 'react'

import Sidebar1 from '../../components/sidebar1/Sidebar1';
import './wallet.css';
export default function Wallet() {
  const [toggleState,setToggleState] = useState();
  return (
    <div>
      
      <>{Sidebar1(2)}</>
      <div className='Wallet'>
         <Box>
            <div className='trans'>Transaction</div>
         </Box>
      </div>
      
      
      </div>
    
  )
}
