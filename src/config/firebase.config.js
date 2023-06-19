// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE2f5iRB8u-vxTdpePp72cS2x8x_5vA1s",
  authDomain: "fecomm-edeb1.firebaseapp.com",
  projectId: "fecomm-edeb1",
  storageBucket: "fecomm-edeb1.appspot.com",
  messagingSenderId: "79650809161",
  appId: "1:79650809161:web:93f6b40c1f12a15c042698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)