/** @format */

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar1 from './Sidebar1';
import { NavLink } from 'react-router-dom';
import { Box, Divider } from '@mui/material';
import { useState } from 'react';
import './sidebar1.css';
import df from '../../assets/dframe.png';
import Header from '../Header/Header';
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PaddingOutlinedIcon from '@mui/icons-material/PaddingOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './drawer.css';
import useMediaQuery from '@mui/material/useMediaQuery';

type Anchor = 'left';

export default function TemporaryDrawer(index1: any) {
  const matches = useMediaQuery('(max-width:770px)');

  const [state, setState] = React.useState({
    left: false,
  });
  var [dataActive, setDataActive] = useState(false);
  var dataActive1 = false;
  const [toggleState, setToggleState] = useState(index1);
  const [side, setSide] = useState(true);

  const toggleTab = (index1: any) => {
    setToggleState(index1);
  };
  if (toggleState === 5 || toggleState === 6) {
    dataActive = true;
  }
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: '180px' }}
      role='presentation'
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}>
      <div>
        <Box className='side1'>
          <img
            src={df}
            className='dframenew'
            alt=''
          />
          <div className='dftext'>D FRAME</div>
          <div className='itemnew'>
            <NavLink
              to='/profile'
              style={{ textDecoration: 'none' }}
              onClick={() => toggleTab(1)}>
              <div className={toggleState === 1 ? 'actnew1' : 'notActivenew'}>
                <PortraitIcon className='ic' />
                Profile
              </div>
            </NavLink>
            <Divider sx={{ color: 'white', zIndex: '10' }} />
            <NavLink
              to='/wallet'
              style={{ textDecoration: 'none', color: 'white' }}
              onClick={() => toggleTab(2)}>
              <div className={toggleState === 2 ? 'actnew1' : 'notActivenew'}>
                <AccountBalanceWalletOutlinedIcon className='ic' />
                Wallet
              </div>
            </NavLink>

            <NavLink
              to='/permission'
              style={{ textDecoration: 'none', color: 'white' }}>
              <div
                className={toggleState === 3 ? 'actnew1' : 'notActivenew'}
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
              <div className='notActivenew1'>
                <InsertChartOutlinedOutlinedIcon className='ic' />
                Analytics
                {dataActive && <KeyboardArrowDownOutlinedIcon className='kc' />}
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
                        className={
                          toggleState === 5 ? 'actnew2' : 'notActivenew2'
                        }
                        onClick={() => toggleTab(5)}>
                        <SearchOutlinedIcon className='ic' />
                        Sites Visited
                      </div>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to='/sitedistribution'
                      style={{ textDecoration: 'none', color: 'white' }}>
                      <div
                        className={
                          toggleState === 6 ? 'actnew2' : 'notActivenew2'
                        }
                        onClick={() => toggleTab(6)}>
                        <SearchOutlinedIcon className='ic' />
                        Site Distribution
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
                className={toggleState === 4 ? 'actnew1' : 'notActivenew'}
                onClick={() => toggleTab(4)}>
                <DnsOutlinedIcon className='ic' />
                Rewards
              </div>
            </NavLink>
            <NavLink
              to='/browserdata'
              style={{ textDecoration: 'none', color: 'white' }}>
              <div
                className={toggleState === 8 ? 'actnew1' : 'notActivenew'}
                onClick={() => toggleTab(8)}>
                <BarChartOutlinedIcon className='ic' />
                Data
              </div>
            </NavLink>
            <NavLink
              to='/survey'
              style={{ textDecoration: 'none', color: 'white' }}>
              <div
                className={toggleState === 9 ? 'actnew1' : 'notActivenew'}
                onClick={() => toggleTab(9)}>
                <PaddingOutlinedIcon className='ic' />
                Survey
              </div>
            </NavLink>
            <NavLink
              to='/survey'
              style={{ textDecoration: 'none', color: 'white' }}>
              <div
                className={toggleState === 10 ? 'actnew1' : 'notActivenew'}
                onClick={() => toggleTab(10)}>
                <ViewInArIcon className='ic' />
                Blockchain
              </div>
            </NavLink>
          </div>

          <div className='rectnew3'>
            <div className='textnew6'>Need help with D Frame?</div>
            <NavLink to='/help'>
              {' '}
              <button className='rectnew1'>Go to Help Center</button>{' '}
            </NavLink>
          </div>

          <NavLink
            to='/learnmore'
            className=''>
            <div className='textnew9'>Learn More</div>
          </NavLink>
        </Box>
      </div>
    </Box>
  );

  return (
    <div>
      {matches &&
        (['left'] as const).map((anchor) => (
          <React.Fragment key={'left'}>
            <Button
              sx={{ color: 'black' }}
              onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </Button>
            <Drawer
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
    </div>
  );
}
