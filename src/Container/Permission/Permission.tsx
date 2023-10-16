/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

import React, { useState, useContext, useEffect } from 'react';
import './permission.css';
import {
  FormControlLabel,
  Switch,
  Box,
  Radio,
  FormControl,
  RadioGroup,
} from '@mui/material';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import { Container } from '@mui/system';
import Drawer from '../../components/sidebar1/Drawer';
import Header from '../../components/Header/Header';
import { MyContext } from '../../components/context/Context';
import { useAccount } from 'wagmi';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Permission() {
  const { userDataa, setUserData } = useContext(MyContext);
  var { address, isConnected }: any = useAccount();
  const [formData, setFormData] = useState<any>({
    browserData: true,
    storageOption: 'GCP',
  });

  const handlesubmit = async (e: any) => {
    e.preventDefault();
    toast.loading('Updating permissions', { id: '1' });

    try {
      const publicAddress =
        localStorage.getItem('userAddress') ||
        userDataa.publicAddress ||
        address;

      await axios
        .patch(
          `http://localhost:8080/user/api/permissions/${publicAddress}`,
          formData
        )
        .then((response) => {
          toast.success('Updated permissions', { id: '1' });
          console.log(response);
          getUserDetails();
        });

      // You can display a succesFs message or redirect the user as needed
    } catch (error) {
      console.error('Error updating permissions:', error);
      toast.error('Error Updating permissions', { id: '1' });
      // Display an error message or handle the error as needed
    }
    setTimeout(() => {
      toast.remove();
    }, 1000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setFormData({
      ...formData,
      [name]: name === 'storageOption' ? value : checked,
    });
  };

  async function getUserDetails() {
    const publicAddress = localStorage.getItem('userAddress') || address;
    try {
      await axios
        .get(`http://localhost:8080/user/api/user/${address}`)
        .then(async (res) => {
          console.log(res.data);
          setUserData(res.data.user);
          localStorage.setItem('userToken', res.data.token);
          localStorage.setItem('userAddress', res.data.user.publicAddress);
          setFormData(res.data.user.permissions);
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserDetails();
  }, []);
  useEffect(() => {
    getUserDetails();
  }, [address]);
  return (
    <>
      <Header />
      <>{Sidebar1(3)}</>
      <a className='smopen'>{Drawer(3)}</a>
      <Container
        maxWidth={false}
        className='percont'>
        <a className='pertitle'>Permissions</a>
        <Box>
          <form
            className='perbox'
            onSubmit={handlesubmit}>
            <a>
              Browser Data<a className='percol'>:</a>
              <FormControlLabel
                className='pertog'
                control={
                  <Switch
                    name='cookies'
                    checked={formData.browserData}
                    onChange={handleChange}
                  />
                }
                label=''
              />
            </a>

            <a>
              Storage Option<a className='percol'>:</a>
              <FormControl>
                <RadioGroup
                  aria-labelledby='demo-controlled-radio-buttons-group'
                  name='storageOption'
                  value={formData.storageOption}
                  onChange={handleChange}
                  className='pertog1'>
                  <FormControlLabel
                    value='GCP'
                    control={<Radio />}
                    label='Google Cloud'
                  />
                  <FormControlLabel
                    value='IPFS'
                    control={<Radio />}
                    label='Blockchain'
                  />
                </RadioGroup>
              </FormControl>
            </a>
            <a>
              Call Data Sharing<a className='percol'>:</a>
              <FormControlLabel
                className='pertog'
                disabled
                control={<Switch />}
                label='(In&nbsp;Progress)'
              />
            </a>
            <a>
              Email Sharing<a className='percol'>:</a>
              <FormControlLabel
                className='pertog'
                disabled
                control={<Switch />}
                label='(In&nbsp;Progress)'
              />
            </a>
            <a>
              Notifications<a className='percol'>:</a>
              <FormControlLabel
                className='pertog'
                disabled
                control={<Switch />}
                label='(In&nbsp;Progress)'
              />
            </a>
            <a>
              Devices<a className='percol'>:</a>
              <FormControlLabel
                className='pertog'
                disabled
                control={<Switch />}
                label='(In&nbsp;Progress)'
              />
            </a>
            <button
              onClick={handlesubmit}
              type='submit'
              className='perbtn'>
              Save
            </button>
          </form>
        </Box>
      </Container>
    </>
  );
}
