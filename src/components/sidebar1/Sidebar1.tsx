/** @format */

import { Box, Divider } from '@mui/material';
import { useState } from 'react';
import './sidebar1.css';
import { NavLink } from 'react-router-dom';
import df from '../../assets/dframe.png';
import Header from '../Header/Header';
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PaddingOutlinedIcon from '@mui/icons-material/PaddingOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Drawer from './Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Sidebar1(index: any) {
  const [state, setState] = React.useState({
    left: false,
  });
  const [side, setSide] = useState(true);
  var [dataActive, setDataActive] = useState(false);
  var dataActive1 = false;
  const [toggleState, setToggleState] = useState(index);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  if (toggleState === 5 || toggleState === 6) {
    dataActive = true;
  }

  return (
    <>
      {side && (
        <div>
          <Box className='side'>
            <img
              src={df}
              className='dframe'
              alt=''
            />
            <div className='dftext'>D FRAME</div>
            <div className='item'>
              <NavLink
                to='/profile'
                style={{ textDecoration: 'none' }}
                onClick={() => toggleTab(1)}>
                <div className={toggleState === 1 ? 'act1' : 'notActive'}>
                  <PortraitIcon className='ic' />
                  Profile
                </div>
              </NavLink>
              <Divider sx={{ color: 'white', zIndex: '10' }} />
              <NavLink
                to='/wallet'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  width: '18vw',
                }}
                onClick={() => toggleTab(2)}>
                <div className={toggleState === 2 ? 'act1' : 'notActive'}>
                  <AccountBalanceWalletOutlinedIcon className='ic' />
                  Wallet
                </div>
              </NavLink>

              <NavLink
                to='/permission'
                style={{ textDecoration: 'none', color: 'white' }}>
                <div
                  className={toggleState === 3 ? 'act1' : 'notActive'}
                  onClick={() => toggleTab(3)}>
                  <SettingsOutlinedIcon className='ic' />
                  Permission
                </div>
              </NavLink>

              <NavLink
                to='#'
                onClick={() => {
                  setDataActive(!dataActive);
                }}
                style={{ textDecoration: 'none', color: 'white' }}>
                <div className='notActive1'>
                  <InsertChartOutlinedOutlinedIcon className='ic' />
                  Analytics{' '}
                  {dataActive && (
                    <KeyboardArrowDownOutlinedIcon className='kc' />
                  )}
                  {!dataActive && <ChevronRightIcon className='kc' />}
                </div>
              </NavLink>
              <div>
                {dataActive && (
                  <>
                    <div>
                      <NavLink
                        to='/topsitevisited'
                        style={{ textDecoration: 'none', color: 'white' }}>
                        <div
                          className={toggleState === 5 ? 'act3' : 'notActive2'}
                          onClick={() => toggleTab(5)}>
                          <SearchOutlinedIcon className='ic' />
                          Sites Visited
                        </div>
                      </NavLink>
                    </div>
                  </>
                )}
              </div>
              <NavLink
                to='/rewards'
                style={{ textDecoration: 'none', color: 'white' }}>
                <div
                  className={toggleState === 4 ? 'act1' : 'notActive'}
                  onClick={() => toggleTab(4)}>
                  <DnsOutlinedIcon className='ic' />
                  Rewards
                </div>
              </NavLink>
              <NavLink
                to='/browserdata'
                style={{ textDecoration: 'none', color: 'white' }}>
                <div
                  className={toggleState === 8 ? 'act1' : 'notActive'}
                  onClick={() => toggleTab(8)}>
                  <BarChartOutlinedIcon className='ic' />
                  Data
                </div>
              </NavLink>
              <NavLink
                to='/survey'
                style={{ textDecoration: 'none', color: 'white' }}>
                <div
                  className={toggleState === 9 ? 'act1' : 'notActive'}
                  onClick={() => toggleTab(9)}>
                  <PaddingOutlinedIcon className='ic' />
                  Survey
                </div>
              </NavLink>
              <NavLink
                to='/CID'
                style={{ textDecoration: 'none', color: 'white' }}>
                <div
                  className={toggleState === 10 ? 'act1' : 'notActive'}
                  onClick={() => toggleTab(10)}>
                  <ViewInArIcon className='ic' />
                  Blockchain
                </div>
              </NavLink>
            </div>

            <div className='footer'>
              <div className='circle1'></div>
              <div className='circle2'>
                <QuestionMarkIcon />
              </div>

              <div className='rectangle'>
                <div className='rect3'>
                  <div className='text6'>Need help with D Frame?</div>
                  <NavLink to='/help'>
                    {' '}
                    <button className='rect1'>Go to Help Center</button>{' '}
                  </NavLink>
                </div>
              </div>

              <NavLink
                to='/learnmore'
                className=''>
                <div className='text9'>Learn More</div>
              </NavLink>
            </div>
          </Box>
        </div>
      )}
    </>
  );
}
