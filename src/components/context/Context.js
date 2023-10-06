/** @format */

import React, { createContext, useState } from 'react';
import user from '../../assets/user.png';
const MyContext = createContext();

function MyContextProvider(props) {
  const [walletAddress, setWalletAddress] = useState('');
  const [_id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAddress1, setUserAddress1] = useState('');
  const [userAddress2, setUserAddress2] = useState('');
  const [token, setToken] = useState('');
  const [userDataa, setUserData] = useState(null);
  const [captureImage, setCaptureImage] = useState(null);

  const [image, setImage] = useState(user);
  return (
    <MyContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        _id,
        setId,
        userAddress1,
        setUserAddress1,
        userAddress2,
        setUserAddress2,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        number,
        setNumber,
        userEmail,
        setUserEmail,
        token,
        setToken,
        userDataa,
        image,
        setImage,
        setUserData,
        captureImage,
        setCaptureImage,
      }}>
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContextProvider, MyContext };
