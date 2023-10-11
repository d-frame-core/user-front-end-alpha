/** @format */

import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
import './browserdata.css';
import { Box, Container, Divider } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '../../../components/sidebar1/Drawer';
import Header from '../../../components/Header/Header';

var b: any = {};
const browser = {
  name: 'Browser Data',
  detial: 'Browser Data Collected',
};
const email = {
  name: 'Email Data',
  detial: 'Email Data Collected',
};
const call = {
  name: 'Call Data',
  detial: 'Call Data Collected',
};

function Browserdata() {
  var calldata = false;

  const [toggleState1, setToggleState1] = useState(9);
  const toggleTab1 = (index: void | any) => {
    setToggleState1(index);
  };
  var st: string;
  var o: string;
  const [hoverOpen, setHoverOpen] = useState(false);
  const Open = () => {
    window.open('Dframe.pdf');
  };

  if (toggleState1 === 9) {
    b = browser;
    st = 'd11';
    o = 'pp';
  } else if (toggleState1 === 10) {
    b = email;
    st = '';
    o = 'pp1';
  } else {
    b = call;
    st = 'd12';
    o = 'pp2';
    calldata = true;
  }
  const setpop = () => {
    <div></div>;
  };

  const [eventData, setEventData] = useState({});

  useEffect(() => {
    window.addEventListener('message', function (event) {
      if (
        event.source === window &&
        event.data.direction &&
        event.data.direction === 'from-content-script'
      ) {
        // alert("Page script received message: \"" + event.data.message + "\"");
        if (event.data.message != null || undefined) {
          setEventData(event.data.message);
          console.log(event.data.message);
        }
      }
    });
  }, []);
  return (
    <div>
      <>{Sidebar1(8)}</>
      <Header />
      <a className='smopen'>{Drawer(8)}</a>
      <div
        className='arm'
        style={{ cursor: 'pointer' }}>
        <Box
          className={toggleState1 === 9 ? 'bract' : 'brnot'}
          onClick={() => toggleTab1(9)}>
          Browser Data
        </Box>
        <div className={st}></div>
        <Box
          className={toggleState1 === 10 ? 'emact' : 'emnot'}
          onClick={() => toggleTab1(10)}>
          Email Data
        </Box>

        <Box
          className={toggleState1 === 11 ? 'clact' : 'clnot'}
          onClick={() => toggleTab1(11)}>
          Call Data
        </Box>
      </div>

      <div className='brtitle'>
        {b.name}
        <a
          href='#'
          onClick={Open}
          style={{ textDecoration: 'none', color: '#017EFA' }}
          title='Privacy Policy'>
          <InfoOutlinedIcon className='icon' />
        </a>
      </div>
      <Box className='brrect2'>
        {b.detial}:
        <Box className='brbox'>
          {toggleState1 === 9 && eventData != null ? (
            <span>
              {Object.keys(eventData).map((key) => (
                <div
                  key={key}
                  className='brtext'>
                  You visited {key} website on{' '}
                  {new Date((eventData as any)[key].timeStamp).toLocaleString()}
                  .{' '}
                </div>
              ))}
            </span>
          ) : (
            <p>Will be released in BETA update</p>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default Browserdata;
