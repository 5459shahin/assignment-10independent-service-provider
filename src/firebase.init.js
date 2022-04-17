// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo5SaXY-_w9sj5Zi0rmS0uzonDJEBeHJA",
  authDomain: "assignmment-10.firebaseapp.com",
  projectId: "assignmment-10",
  storageBucket: "assignmment-10.appspot.com",
  messagingSenderId: "683317970111",
  appId: "1:683317970111:web:17682f92d8e54ed018b20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;