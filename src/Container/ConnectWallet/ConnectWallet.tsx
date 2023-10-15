/** @format */

import React, { useEffect, useState } from 'react';
import { Web3Button } from '@web3modal/react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import Cookies from 'js-cookie';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import df from '../../assets/dframe.png';
import './connectwallet.css';

const WallectConnect = () => {
  const navigate = useNavigate();

  var { address, isConnected }: any = useAccount();
  const [walletAddress, setWalletAddress] = useState('');
  const [_id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAddress1, setUserAddress1] = useState('');
  const [userAddress2, setUserAddress2] = useState('');
  const [token, setToken] = useState('');
  async function connectWallet(): Promise<void> {
    try {
      if (address) {
        const response = await axios.post(
          `https://user-backend-402016.el.r.appspot.com/user/api/signup/${address}`
        );
        window.postMessage({ type: 'addressFetched', address }, '*');
      }
    } catch (error) {
      console.log(error);
    }
  }
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if (isConnected) {
      connectWallet();

      setTimeout(() => {
        navigate('/profile');
      }, 3000);
    }
  }, [address]);

  return (
    <div className='connectwallet'>
      <img
        src={df}
        alt='dframe'
      />
      <div>
        <h1 className='cwtitle'>Welcome to D Frame</h1>
      </div>
      <div className='cwlogin'>Connect Wallet to Login</div>
      <Web3Button />
    </div>
  );
};
export default WallectConnect;
