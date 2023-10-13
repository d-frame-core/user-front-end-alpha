/** @format */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: 'AIzaSyCv6RBbIBCooCselzi3n5D3pfNfrIdwGiI',
//   authDomain: 'phone-b5688.firebaseapp.com',
//   projectId: 'phone-b5688',
//   storageBucket: 'phone-b5688.appspot.com',
//   messagingSenderId: '783867150837',
//   appId: '1:783867150837:web:d24c0428b0fe4475c8e0bc',
//   measurementId: 'G-28771VC1GC',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAsX11BlepBimnAmN_RifD2-At63PMQzkk',
  authDomain: 'user-frontend-alpha.firebaseapp.com',
  projectId: 'user-frontend-alpha',
  storageBucket: 'user-frontend-alpha.appspot.com',
  messagingSenderId: '540206401389',
  appId: '1:540206401389:web:9bdbd066888129df8abc64',
  measurementId: 'G-7K4D0JSC06',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
