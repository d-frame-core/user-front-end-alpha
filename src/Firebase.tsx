/** @format */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCv6RBbIBCooCselzi3n5D3pfNfrIdwGiI',
  authDomain: 'phone-b5688.firebaseapp.com',
  projectId: 'phone-b5688',
  storageBucket: 'phone-b5688.appspot.com',
  messagingSenderId: '783867150837',
  appId: '1:783867150837:web:d24c0428b0fe4475c8e0bc',
  measurementId: 'G-28771VC1GC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
