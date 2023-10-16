/** @format */

import { Box, Container, Divider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
import './topsite.css';
import { NavLink } from 'react-router-dom';
import Charts2 from '../../../components/charts/Charts2/Charts2';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '../../../components/sidebar1/Drawer';
import Header from '../../../components/Header/Header';
import { useAccount } from 'wagmi';
import { MyContext } from '../../../components/context/Context';
import axios from 'axios';

export default function Topsite() {
  const ma = useMediaQuery('(min-width:880px)');
  var h: number = 300;
  var w: number = 700;
  const [toggleState, setToggleState] = useState(11);
  const { address } = useAccount();
  const { userDataa } = useContext(MyContext);
  const [topSites, setTopSites] = useState(null);
  const toggleTab = (i: any) => {
    setToggleState(i);
  };

  async function fetchTopSites() {
    const publicAddress =
      localStorage.getItem('userPublicAddress') ||
      userDataa.publicAddress ||
      address;
    await axios
      .get(
        `http://localhost:8080/user/api/user-data/top-sites/${publicAddress}`
      )
      .then((response) => {
        setTopSites(response.data);
        console.log('SUCCESFULLY FETCHED TOP SITES');
        console.log(response.data);
      })
      .catch((error) => {
        console.log('ERRORR FETCHING TOP SITES');
        console.log(error);
      });
  }
  useEffect(() => {
    fetchTopSites();
  }, []);
  return (
    <div>
      <Header />
      <>{Sidebar1(5)}</>
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
          {Charts2(topSites as unknown as any[], 'visits', h, w, ma)}
        </div>
      </Box>
      <Box className='sdbox2'>
        <span>
          {' '}
          {topSites &&
            (topSites as any).map((item: any) => {
              return (
                <>
                  <div className='gap'>
                    <a
                      className='legendcolor'
                      href={item.name}
                      target='_blank'
                      rel='noreferrer'>
                      {item.name}
                    </a>
                    <a className='gap1'>{item.visits + ' times'}</a>
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
