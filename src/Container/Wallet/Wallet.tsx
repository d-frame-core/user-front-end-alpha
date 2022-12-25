import { Box, Container, Divider } from '@mui/material';
import React, { useState } from 'react'

import Sidebar1 from '../../components/sidebar1/Sidebar1';
import './wallet.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import walletdata from './walletdata';
export default function Wallet() {
  const userdata={
    dft:'1098 DFT',
    userad:'0xnu989njbknk989sbuikjdbcksdvsdlvk '
  }
  return (
    <div>
      
      <>{Sidebar1(2)}</>     
      <div className='Wallet'>
         <Box>
            <div className='head'>Wallet</div>
            <Box className='trans'>
              <div className='trans1'>Transaction</div>
              <Divider/>
              <Box className='wabo'>
                <div>{walletdata.map(item =>{
                  return(
                    <div className='walbox'>
                        <p className='to'>To :</p>
                        <p className='add'> {item.add}</p>
                        <p className='dat'>{item.date}</p>
                        <p className='dft'>{item.DFT}</p>
                        <p className='time'>{item.time}</p>
                        <p className='stat'>{item.status}</p>
                  </div>
                  )})}</div>
              </Box>
              </Box>
              <Box className='walbox2'> 
                <p>Wallet Balance {userdata.dft}</p>
                <div ><p className='us'>{userdata.userad}</p><ContentCopyIcon className='icus'/></div>
              </Box>
              <Box>
                  <div className='transfertoken'>
                    <div className='trans2'>Transfer Tokens</div>
                  <Divider/>
                    <div className='wad'> Wallet Address:<input className='il'/></div>
                    <div className='wad'>DFT Amount :<input className='il'/></div>
                    <button className='walbtn'>Send</button>
                  </div>
              </Box>
         </Box>
      </div>
      
      
      </div>
    
  )
}
