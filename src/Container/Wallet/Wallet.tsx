import { Box, Container, Divider } from '@mui/material';
import { useState } from 'react'
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import './wallet.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import walletdata from './walletdata';
import Drawer from '../../components/sidebar1/Drawer';

export default function Wallet() {
  const userdata={
    dft:' 10 DFT ',
    userad:'0xnu989njbknk989sbuikjdbcksdvsdlvk '
  }
 
  var cl='us';
  return (
    <div>
      
      <>{Sidebar1(2)}</>     
      <div className='Wallet'>
         <Box>
            <div className='head'>Wallet</div>
            <Box className='trans'>
              <div className='trans1'>Transaction</div>
              <Divider sx={{width:'24vw',margin:'auto'}}/>
              <Box className='wabo'>
                <div>{walletdata.map(item =>{
                  return(
                    <div className='walbox'>
                        <p className='to'>To :</p>
                        <p className='add'> {item.add}</p>
                        <p className='dat'>{item.date}</p>
                        <p className='dft1'>{item.DFT}</p>
                        <p className='time'>{item.time}</p>
                        <p className={item.status === 'Sent' ? 'stat-red' :'stat-green'}>{item.status}</p>
                  </div>
                  )})}</div>
              </Box>
              </Box>
              <Box className='walbox2'> 
                <p className='wa'>Wallet Balance &nbsp;&nbsp;{userdata.dft}</p>
                <div  ><input className='us' value={userdata.userad} readOnly={true}/><a onClick={()=> {navigator.clipboard.writeText(userdata.userad); }}><ContentCopyIcon className='icus'/></a></div>
              </Box>
              <Box>
                  <div className='transfertoken'>
                    <div className='trans2'>Transfer Tokens</div>
                  <Divider sx={{width:'18vw',margin:'auto'}}/>
                    <div className='wad'> Wallet Address:<input className='il'/></div>
                    <div className='wad'>DFT Amount :<input className='il'/></div>
                    <button className='walbtn'>Send</button>
                  </div>
              </Box>
         </Box>
      </div>
      <a className='smopen'>
    {Drawer(2)}
    </a>
      
      </div>
    
  )
                  }
