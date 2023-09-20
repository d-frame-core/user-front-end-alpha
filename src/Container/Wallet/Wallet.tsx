/** @format */

import { Box, Container, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import './wallet.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import walletdata from './walletdata';
import Drawer from '../../components/sidebar1/Drawer';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

import { useAccount } from 'wagmi';
import Web3 from 'web3';

export default function Wallet() {
  const [dftCA, setdftCA] = useState<any>('');
  const [walletBalance, setWalletBalance] = useState<any>('');
  const [walletToSendDFT, setWalletToSendDFT] = useState<any>('');
  const [amountToSendDFT, setAmountToSendDFT] = useState<any>('');
  const [transactionEvents, setTransactionEvents] = useState<any>([]);
  const userdata = {
    dft: ' 10 DFT ',
    userad: '0xnu989njbknk989sbuikjdbcksdvsdlvk ',
  };
  const navigate = useNavigate();
  var { address, isConnected }: any = useAccount();
  if (!isConnected) {
    navigate('/');
  }

  async function getBalance() {
    const web3 = new Web3(
      'https://polygon-mainnet.g.alchemy.com/v2/Ygfvgz118Xr9j6j_F3ZIMFye6SNTgJr8'
    );
    // const web3 = new Web3((window as any).ethereum);
    // const web3 = new Web3((window as any).ethereum);
    // const web3 = new Web3("https://polygon-rpc.com");

    // set the wallet address to query
    const _walletAddress = address;
    // set the contract address of the DFT token
    const dframeAddress = '0x0B6163c61D095b023EC3b52Cc77a9099f6231FCC';

    // set the ABI for the DFT token contract
    const dframeABI = [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'Snapshot',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'snapshotId', type: 'uint256' },
        ],
        name: 'balanceOfAt',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'burnFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          {
            internalType: 'uint256',
            name: 'subtractedValue',
            type: 'uint256',
          },
        ],
        name: 'decreaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'snapshot',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'snapshotId', type: 'uint256' },
        ],
        name: 'totalSupplyAt',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ];

    // get the DFT token contract instance
    const dframeContract = new web3.eth.Contract(
      dframeABI as any,
      dframeAddress
    );
    setdftCA(dframeContract);
    //  get the balance of DFRAME tokens for the specified wallet address
    const balance = await dframeContract.methods
      .balanceOf(_walletAddress)
      .call();
    const balanceInEth = web3.utils.fromWei(balance, 'ether');
    const balanceInKFormat =
      Math.trunc((balanceInEth as any) / 1000).toString() + 'K';
    setWalletBalance(balanceInKFormat);
  }

  useEffect(() => {
    getBalance();
    getPastEvents();
  }, []);

  async function sendDFTFunction() {
    if (amountToSendDFT === '' || walletToSendDFT === '') {
      alert('Please enter the required fields');
      return;
    }
    const web3 = new Web3((window as any).ethereum);

    // set the wallet address to query
    const _walletAddress = address.toString();
    // set the contract address of the DFRAME token
    const dframeAddress = '0x0B6163c61D095b023EC3b52Cc77a9099f6231FCC';

    // set the ABI for the DFRAME token contract
    const dframeABI = [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'Snapshot',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'snapshotId', type: 'uint256' },
        ],
        name: 'balanceOfAt',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'burnFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          {
            internalType: 'uint256',
            name: 'subtractedValue',
            type: 'uint256',
          },
        ],
        name: 'decreaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'snapshot',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'snapshotId', type: 'uint256' },
        ],
        name: 'totalSupplyAt',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ];

    // get the DFRAME token contract instance
    const dframeContract = new web3.eth.Contract(
      dframeABI as any,
      dframeAddress
    );
    const amount = web3.utils.toWei(amountToSendDFT as any, 'ether');

    // transfer DFT tokens using web3

    const tx = dframeContract.methods
      .transfer(walletToSendDFT, amount)
      .send({ from: _walletAddress, gasPrice: web3.utils.toWei('300', 'gwei') }) // Adjust the gas price as needed
      .on('transactionHash', function (hash: any) {
        console.log('Transaction Hash:', hash);
      })
      .on('receipt', function (receipt: any) {
        console.log('Transaction Receipt:', receipt);
      })
      .on('confirmation', function (confirmationNumber: any, receipt: any) {
        console.log('Confirmation Number:', confirmationNumber);
        console.log('Transaction Receipt:', receipt);
      })
      .on('error', function (error: any) {
        console.log('Error:', error);
        alert('Error: ' + error.message);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
    // wait for the tx on metamask to be completed then recall the getBalance function to update the balance and getpastevents function
    await tx;
    setAmountToSendDFT('');
    setWalletToSendDFT('');
  }

  async function getPastEvents() {
    // initialize the Web3 provider
    const web3 = new Web3(
      'https://polygon-mainnet.g.alchemy.com/v2/Ygfvgz118Xr9j6j_F3ZIMFye6SNTgJr8'
    );
    const _walletAddress = address.toString();
    // set the contract address of the DFT token
    const dframeAddress = '0x0B6163c61D095b023EC3b52Cc77a9099f6231FCC';

    // set the ABI for the DFT token contract
    const dframeABI = [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'Snapshot',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'snapshotId', type: 'uint256' },
        ],
        name: 'balanceOfAt',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'account', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'burnFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          {
            internalType: 'uint256',
            name: 'subtractedValue',
            type: 'uint256',
          },
        ],
        name: 'decreaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'spender', type: 'address' },
          { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'snapshot',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'snapshotId', type: 'uint256' },
        ],
        name: 'totalSupplyAt',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'from', type: 'address' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ];

    // get the DFT token contract instance
    const dframeContract = new web3.eth.Contract(
      dframeABI as any,
      dframeAddress
    );
    setdftCA(dframeContract);
    // get the transfer events of the MATIC token for the specified wallet address
    const transferFromEvents = await dframeContract.getPastEvents('Transfer', {
      fromBlock: 0,
      toBlock: 'latest',
      filter: {
        from: _walletAddress,
      },
    });

    //  get the transfer events of the MATIC token for the specified wallet address
    const eventFromPromises = transferFromEvents.map(async (event) => {
      const block = await web3.eth.getBlock(event.blockNumber);
      return {
        ...event,
        timestamp: block.timestamp,
      };
    });

    // get the transfer events of the MATIC token for the specified wallet address
    const eventsFromWithTimestamps = await Promise.all(eventFromPromises);
    const transferToEvents = await dframeContract.getPastEvents('Transfer', {
      fromBlock: 0,
      toBlock: 'latest',
      filter: {
        to: _walletAddress,
      },
    });

    // get the transfer events of the MATIC token for the specified wallet address
    const eventToPromises = transferToEvents.map(async (event) => {
      const block = await web3.eth.getBlock(event.blockNumber);
      return {
        ...event,
        timestamp: block.timestamp,
      };
    });

    // get the transfer events of the MATIC token for the specified wallet address
    const eventsToWithTimestamps = await Promise.all(eventToPromises);
    const allEvents = [...eventsFromWithTimestamps, ...eventsToWithTimestamps];
    const sortedEvents = allEvents.sort(
      (a, b) => (b as any).timestamp - (a as any).timestamp
    );
    setTransactionEvents(sortedEvents);
  }

  var cl = 'us';
  return (
    <div>
      <Header />

      <>{Sidebar1(2)}</>
      <div className='Wallet'>
        <Box>
          <div className='head'>Wallet</div>
          <Box className='trans'>
            <div className='trans1'>Transaction</div>
            <Divider sx={{ width: '24vw', margin: 'auto' }} />
            <Box className='wabo'>
              <div>
                {transactionEvents.map((event: any) => {
                  console.log(event);
                  return (
                    <div
                      className='walbox'
                      onClick={() => {
                        window.open(
                          'https://polygonscan.com/tx/' + event.transactionHash,
                          '_blank'
                        );
                      }}>
                      <p className='to'>To :</p>
                      <p className='add'> Address</p>
                      <p className='dat'>Date</p>
                      <p className='dft1'>10 DFT</p>
                      <p className='time'>6pm</p>
                      <p
                        // className={
                        //   item.status === 'Sent' ? 'stat-red' : 'stat-green'
                        // }
                        className='stat-green'>
                        Sent
                      </p>
                    </div>
                  );
                })}
              </div>
            </Box>
          </Box>
          <Box className='walbox2'>
            <p className='wa'>Wallet Balance: {walletBalance}</p>
            <div>
              <input
                className='us'
                value={address.slice(0, 9) + '...' + address.slice(-8)}
                readOnly={true}
              />
              <a
                onClick={() => {
                  navigator.clipboard.writeText(userdata.userad);
                }}>
                <div style={{ cursor: 'pointer' }}>
                  <ContentCopyIcon className='icus' />
                </div>
              </a>
            </div>
          </Box>
          <Box>
            <div className='transfertoken'>
              <div className='trans2'>Transfer Tokens</div>
              <Divider sx={{ width: '18vw', margin: 'auto' }} />
              <div className='wad'>
                {' '}
                Wallet Address:
                <input
                  className='il'
                  value={walletToSendDFT}
                  onChange={(e) => setWalletToSendDFT(e.target.value)}
                />
              </div>
              <div className='wad'>
                DFT Amount :
                <input
                  className='il'
                  value={amountToSendDFT}
                  onChange={(e) => setAmountToSendDFT(e.target.value)}
                />
              </div>
              <button
                className='walbtn'
                onClick={sendDFTFunction}
                style={{ cursor: 'pointer' }}>
                Send
              </button>
            </div>
          </Box>
        </Box>
      </div>
      <a className='smopen'>{Drawer(2)}</a>
    </div>
  );
}
