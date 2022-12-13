import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Help from './Container/Help/Help';
import LearnMore from './Container/LearnMore/LearnMore';
import Permission from './Container/Permission/Permission';
import Wallet from './Container/Wallet/Wallet';
import Profile from './Container/Profile/Profile';
import Survey from './Container/Data/Survey/Survey';
import KYC1 from './Container/KYC/KYC1/KYC1';
import Browserdata from './Container/Data/Browserdata/Browserdata';
import Calldata from './Container/Data/CallData/Calldata';
import Emaildata from './Container/Data/Emaildata/Emaildata';
import Charts from './components/charts/Charts1/Charts1';
import Charts1 from './components/charts/Charts1/Charts1';
import Rewards from './Container/Rewards/Rewards';
import Sidebar1 from './components/sidebar1/Sidebar1';
import Topsite from './Container/Analytics/Topsite/Topsite';
import SiteByTime from './Container/Analytics/Sitebytime/SiteByTime';
import Monetization from './Container/Analytics/Monetization/Monetization';
import SiteDistribution from './Container/Analytics/SiteDistribution/SiteDistribution';
import KYC2 from './Container/KYC/KYC2/KYC2';
import KYC3 from './Container/KYC/KYC3/KYC3';
import Success from './Container/KYC/Success';
import FirstPage from './Container/Profile/FirstPage';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          
          
          <Route path='' element={<FirstPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/kyc1' element={<KYC1/>}/>
          <Route path='/kyc2' element={<KYC2/>}/>
          <Route path='/kyc3' element={<KYC3/>}/>
          <Route path='/successful' element={<Success/>}/>
          <Route path='/browserdata' element={<Browserdata/>}/>
          <Route path='/emaildata' element={<Emaildata/>}/>
          <Route path='/calldata' element={<Calldata/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/rewards' element={<Rewards/>}/>
          <Route path='/survey' element={<Survey/>}/>
          <Route path='/topsitevisited' element={<Topsite/>}/>
          <Route path='/monetization' element={<Monetization/>}/>
          <Route path='/sitebytime' element={<SiteByTime/>}/>
          <Route path='/sitedistribution' element={<SiteDistribution/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/permission' element={<Permission/>}/>
          <Route path='/learnmore' element={<LearnMore/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
