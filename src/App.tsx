import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import Help from './Container/Help/Help';
import LearnMore from './Container/LearnMore/LearnMore';
import Permission from './Container/Permission/Permission';
import Wallet from './Container/Wallet/Wallet';
import Profile from './Container/Profile/Profile';
import Survey from './Container/Data/Survey/Survey';
import KYC1 from './Container/KYC/KYC1/KYC1';
import Browserdata from './Container/Data/Browserdata/Browserdata';
import Rewards from './Container/Rewards/Rewards';
import Sidebar1 from './components/sidebar1/Sidebar1';
import Topsite from './Container/Analytics/Topsite/Topsite';
import SiteByTime from './Container/Analytics/Sitebytime/SiteByTime';
import SiteDistribution from './Container/Analytics/SiteDistribution/SiteDistribution';
import KYC2 from './Container/KYC/KYC2/KYC2';
import KYC3 from './Container/KYC/KYC3/KYC3';
import Success from './Container/KYC/Success';
import FirstPage from './Container/Profile/FirstPage';
import Charts2 from './components/charts/Charts2/Charts2';
import WallectConnect from './Container/ConnectWallet/ConnectWallet';
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { arbitrum, mainnet, polygon } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "71bc6971bc716face67cc727e08e5670" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "71bc6971bc716face67cc727e08e5670",
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <div className="App">

<WagmiConfig client={wagmiClient}>
        
      
      <Router>
        <Routes>

          <Route path='/' element={<WallectConnect/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/kyc1' element={<KYC1/>}/>
          <Route path='/kyc2' element={<KYC2/>}/>
          <Route path='/kyc3' element={<KYC3/>}/>
          <Route path='/successful' element={<Success/>}/>
          <Route path='/browserdata' element={<Browserdata/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/rewards' element={<Rewards/>}/>
          <Route path='/survey' element={<Survey/>}/>
          <Route path='/topsitevisited' element={<Topsite/>}/>
          <Route path='/sitebytime' element={<SiteByTime/>}/>
          <Route path='/sitedistribution' element={<SiteDistribution/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/permission' element={<Permission/>}/>
          <Route path='/learnmore' element={<LearnMore/>}/>
          
        </Routes>
      </Router>
      </WagmiConfig>

      <Web3Modal
        projectId="71bc6971bc716face67cc727e08e5670"
        ethereumClient={ethereumClient}
      />
    </div>
  );
}

export default App;
