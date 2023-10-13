/** @format */

import React, { useState } from 'react';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import './rewards.css';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  makeStyles,
  useMediaQuery,
} from '@mui/material';
import Linechart from '../../components/charts/linechart/Linechart';
import { borderColor } from '@mui/system';
import df from '../../assets/dframe.png';
import Drawer from '../../components/sidebar1/Drawer';
import Header from '../../components/Header/Header';

const rewarddata: any[] = [
  { name: 'All', value: 4300, long: 'DFT (earned)' },
  { name: 'Browser Data', value: 1020, long: 'DFT (earned)' },
  { name: 'Verification Rewards', value: 930, long: 'DFT (earned)' },
  { name: 'Referrals', value: 540, long: 'DFT (earned)' },
];

const Daily: object[] = [
  {
    name: 'Hours',
    All: 35,
    BrowserData: 42,
    VerificationRewards: 27,
    Refferals: 14,
  },
  {
    name: '4',
    All: 35,
    BrowserData: 23,
    VerificationRewards: 33,
    Refferals: 24,
  },
  {
    name: '8',
    All: 13,
    BrowserData: 22,
    VerificationRewards: 43,
    Refferals: 34,
  },
  {
    name: '12',
    All: 34,
    BrowserData: 20,
    VerificationRewards: 30,
    Refferals: 44,
  },
  {
    name: '16',
    All: 27,
    BrowserData: 44,
    VerificationRewards: 35,
    Refferals: 28,
  },
  {
    name: '20',
    All: 30,
    BrowserData: 36,
    VerificationRewards: 40,
    Refferals: 11,
  },
  {
    name: '24',
    All: 37,
    BrowserData: 54,
    VerificationRewards: 45,
    Refferals: 10,
  },
];
const Weekly: object[] = [
  {
    name: 'Days',
    All: 15,
    BrowserData: 23,
    VerificationRewards: 29,
    Refferals: 14,
  },
  {
    name: '3',
    All: 20,
    BrowserData: 13,
    VerificationRewards: 17,
    Refferals: 24,
  },
  {
    name: '6',
    All: 25,
    BrowserData: 17,
    VerificationRewards: 2,
    Refferals: 34,
  },
  {
    name: '9',
    All: 30,
    BrowserData: 27,
    VerificationRewards: 38,
    Refferals: 42,
  },
  {
    name: '12',
    All: 35,
    BrowserData: 33,
    VerificationRewards: 9,
    Refferals: 47,
  },
  {
    name: '15',
    All: 40,
    BrowserData: 26,
    VerificationRewards: 19,
    Refferals: 50,
  },
  {
    name: '18',
    All: 45,
    BrowserData: 2,
    VerificationRewards: 59,
    Refferals: 57,
  },
  {
    name: '21',
    All: 50,
    BrowserData: 34,
    VerificationRewards: 49,
    Refferals: 60,
  },
  {
    name: '24',
    All: 55,
    BrowserData: 21,
    VerificationRewards: 39,
    Refferals: 12,
  },
  {
    name: '27',
    All: 60,
    BrowserData: 50,
    VerificationRewards: 29,
    Refferals: 20,
  },
];
const Monthly: object[] = [
  {
    name: 'Week 1',
    All: 35,
    BrowserData: 3,
    VerificationRewards: 9,
    Refferals: 4,
  },
  {
    name: 'Week 2',
    All: 55,
    BrowserData: 23,
    VerificationRewards: 59,
    Refferals: 24,
  },
  {
    name: 'Week 3',
    All: 5,
    BrowserData: 43,
    VerificationRewards: 29,
    Refferals: 54,
  },
  {
    name: 'Week 4',
    All: 28,
    BrowserData: 13,
    VerificationRewards: 49,
    Refferals: 44,
  },
];
var ab: object[] = [];

function Rewards() {
  const [toggleState, setToggleState] = useState(3);
  const toggleTab = (index: void | any) => {
    setToggleState(index);
  };
  if (toggleState === 3) {
    ab = Daily;
  } else if (toggleState === 4) {
    ab = Weekly;
    console.log('This ');
  } else if (toggleState === 5) {
    ab = Monthly;
  }

  var linehi = 270;
  var linewi = 900;
  const ma1 = useMediaQuery('(max-width:1300px)');
  const ma2 = useMediaQuery('(max-width:1200px)');
  const ma3 = useMediaQuery('(max-width:1000px)');
  const ma4 = useMediaQuery('(max-width:800px)');
  const ma5 = useMediaQuery('(max-width:600px)');

  if (ma1) {
    linewi = 800;
  }
  if (ma2) {
    linewi = 700;
  }
  if (ma3) {
    linewi = 570;
  }
  if (ma4) {
    linewi = 540;
  }
  if (ma5) {
    linewi = 450;
  }
  return (
    <div>
      <Header />
      <>{Sidebar1(4)}</>
      <a className='smopen'>{Drawer(4)}</a>
      <div className='rewtitle'>Rewards</div>
      <Box className='rewcont'>
        <div style={{ fontSize: '5vh', marginTop: '2vh' }}>
          Will be released soon
        </div>
        {/* 
      <div className='ltext2'>4300</div>

      <a className="rewhead">Total Rewards Earning in DFT</a>
      
      <div className='linechart'><>{Linechart(ab,linehi,linewi)}</></div>

      <ButtonGroup  className='rewtabs' size='small' variant="text" aria-label='text button group' sx={{".MuiButton-text":{color:'#000000'}}} >
        <Button onClick={()=> toggleTab(3)}>Daily</Button>
        <Button onClick={()=> toggleTab(4)}>Weekly</Button>
        <Button onClick={()=> toggleTab(5)}>Monthly</Button> 
      </ButtonGroup>

      <Box className='rerect'>
      <Box className='redbox'>
      <span> {
           rewarddata.map(item=>{
              return (<>
              <div className='rgap'>
              {item.name}
              <a className='rgap1'>{item.value}{item.long}</a>
              </div>
             <Divider/></> );
            })
            }</span>
      </Box>
      </Box> */}
      </Box>
    </div>
  );
}
export default Rewards;
