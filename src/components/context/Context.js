import React, { createContext, useState } from "react";

const MyContext = createContext();

function MyContextProvider(props) {
  const [walletAddress, setWalletAddress] = useState("");
  const [_id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number,setNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress1, setUserAddress1] = useState("");
  const [userAddress2, setUserAddress2] = useState("");
  const [token, setToken] = useState("");
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
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContextProvider, MyContext };