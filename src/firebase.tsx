// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv6RBbIBCooCselzi3n5D3pfNfrIdwGiI",
  authDomain: "phone-b5688.firebaseapp.com",
  projectId: "phone-b5688",
  storageBucket: "phone-b5688.appspot.com",
  messagingSenderId: "783867150837",
  appId: "1:783867150837:web:5df1444f1400b626c8e0bc",
  measurementId: "G-8QBF1BKZHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

