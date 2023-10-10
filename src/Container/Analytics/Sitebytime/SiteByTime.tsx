/** @format */

import {
  Container,
  Box,
  DialogProps,
  ListItemText,
  List,
  ListItem,
} from '@mui/material';
import React, { useState } from 'react';
import './sitebytime.css';
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
import Divider from '@mui/material/Divider/Divider';
import { NavLink } from 'react-router-dom';
import Charts2 from '../../../components/charts/Charts2/Charts2';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '../../../components/sidebar1/Drawer';
import Header from '../../../components/Header/Header';
import { useContext, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { MyContext } from '../../../components/context/Context';
import axios from 'axios';
export default function SiteByTime() {
  const { address } = useAccount();
  const { userDataa } = useContext(MyContext);
  const [topSites, setTopSites] = useState(null);
  const ma = useMediaQuery('(min-width:880px)');
  var h: number = 300;
  var w: number = 700;
  const [toggleState, setToggleState] = useState(12);
  const toggleTab = (i: any) => {
    setToggleState(i);
  };
  const matches = useMediaQuery('(max-width:770px)');
  async function fetchTopSites() {
    const publicAddress =
      localStorage.getItem('userPublicAddress') ||
      userDataa.publicAddress ||
      address;
    await axios
      .get(`http://localhost:3000/api/user-data/top-times/${publicAddress}`)
      .then((response) => setTopSites(response.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchTopSites();
  }, []);
  function formatTime(milliseconds: any) {
    const seconds = milliseconds / 1000;
    if (seconds < 60) {
      return `${seconds.toFixed(2)} second${seconds !== 1 ? 's' : ''}`;
    } else if (seconds < 3600) {
      const minutes = seconds / 60;
      return `${minutes.toFixed(2)} minute${minutes !== 1 ? 's' : ''}`;
    } else {
      const hours = seconds / 3600;
      return `${hours.toFixed(2)} hour${hours !== 1 ? 's' : ''}`;
    }
  }

  // Usage:

  return (
    <div>
      <>{Sidebar1(5)}</>
      <Header />
      <a className='smopen'>{Drawer(5)}</a>

      <Box className='top1'>
        <NavLink to='/topsitevisited'>
          <div
            className={toggleState === 11 ? 'tab1active' : 'tab1'}
            onClick={() => toggleTab(11)}>
            Top Sites Visited
          </div>
        </NavLink>
        <Divider
          variant='middle'
          orientation='vertical'
          light={true}
          sx={{ zIndex: 1 }}
        />
        <NavLink to='/sitebytime'>
          <div
            className={toggleState === 12 ? 'tab2active' : 'tab2'}
            onClick={() => toggleTab(12)}>
            Site By Time
          </div>
        </NavLink>
      </Box>

      <Box className='sdbox1'>
        <div className='tschart'>
          {Charts2(topSites as unknown as any[], 'time', h, w, ma)}
        </div>
      </Box>
      <Box className='sdbox2'>
        <span>
          {' '}
          {topSites &&
            (topSites as any).map((item: any) => {
              const formattedTime = formatTime(item.time);
              return (
                <>
                  <div className='gap'>
                    <a className='legendcolor'></a>
                    {item.name}
                    <a className='gap1'>{formattedTime}</a>
                  </div>
                  <Divider />
                </>
              );
            })}
        </span>
        <br />
      </Box>
    </div>
  );
}
