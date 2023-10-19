/** @format */

import React, { useContext } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import './CID.css';
import { Box, Container, Divider } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '../../components/sidebar1/Drawer';
import Header from '../../components/Header/Header';
import { MyContext } from '../../components/context/Context';

function CID() {
  const [eventData, setEventData] = useState({});
  const { userDataa } = useContext(MyContext);
  useEffect(() => {}, []);
  return (
    <div>
      <>{Sidebar1(10)}</>
      <Header />
      <a className='smopen'>{Drawer(10)}</a>
      <div
        className='arm'
        style={{ cursor: 'pointer' }}>
        <Box className={'bract'}>CID hash</Box>
        <div></div>
      </div>

      <div className='brtitle'>
        CID hashes
        <a
          href='#'
          style={{ textDecoration: 'none', color: '#017EFA' }}
          title='Privacy Policy'>
          <InfoOutlinedIcon className='icon' />
        </a>
      </div>
      <Box className='brrect2'>
        <Box className='brbox'>
          {
            <span>
              {userDataa.cid &&
                userDataa.cid.map((key: any) => (
                  <div
                    key={key}
                    className='brtext'>
                    {key}
                  </div>
                ))}
              {!userDataa.cid && <div className='brtext'>NO CID Found now</div>}
            </span>
          }
        </Box>
      </Box>
    </div>
  );
}

export default CID;
