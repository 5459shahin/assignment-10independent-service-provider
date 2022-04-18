// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import App from "./App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9jflwgDHAK6lCS9bwpNGwBxIj_5kDPwU",
  authDomain: "independent-service-assignment.firebaseapp.com",
  projectId: "independent-service-assignment",
  storageBucket: "independent-service-assignment.appspot.com",
  messagingSenderId: "94233865569",
  appId: "1:94233865569:web:c80f826f5d0477470de920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(App);
export default auth;