import React, { useState } from "react";
import { Web3Button } from "@web3modal/react";
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Cookies from "js-cookie";
import axios from "axios"

import { useNavigate } from "react-router-dom";
import df from "../../assets/dframe.png";
import './connectwallet.css'

const WallectConnect =()=> {

  const navigate = useNavigate();
  
  var {address, isConnected } : any = useAccount();
  const [walletAddress, setWalletAddress] = useState("");
  const [_id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number,setNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress1, setUserAddress1] = useState("");
  const [userAddress2, setUserAddress2] = useState("");
  const [token, setToken] = useState("");

  

    async function connectWallet(): Promise<void> {
    try{
        const response = await axios.post("http://localhost:3000/users/signup", {
        
        walletAddress: address,
      });

      const token = response.data.token;
      Cookies.set('token', token);
      console.log(token)
     

      {
        const data = response.data.user;
        console.log(data)
        Cookies.set('_id', data._id);
        console.log(Cookies.get('_id'));
        await setFirstName(data.firstName);
        await setLastName(data.lastName);
        await setNumber(data.number);
        await setUserAddress1(data.userAddress1);
        await setUserAddress2(data.userAddress2);
        await setUserEmail(data.userEmail);
        await setWalletAddress(data.walletAddress)

        
      }
    }
    catch (error){
      console.log(error)
    }
       
    }
    const { connect } = useConnect({
      connector: new InjectedConnector(),
      
    })
    if (isConnected){
      connectWallet();
      navigate("/profile");
    }
    

    
   
  return (
   <div className="connectwallet">
    <img src={df} alt="dframe" />
    <div>
        <h1 className="cwtitle">Welcome to DFrame</h1>
      </div>
      <div className="cwlogin">Connect Wallet to Login</div>
      <Web3Button/>
   </div>
  )
}
export default WallectConnect;