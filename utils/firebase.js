/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh0CPqC4vZGpOj4weKZowQGCzSMTcDa5Y",
  authDomain: "vite-umkm-auth.firebaseapp.com",
  projectId: "vite-umkm-auth",
  storageBucket: "vite-umkm-auth.appspot.com",
  messagingSenderId: "555334631467",
  appId: "1:555334631467:web:65ae48c863673de7d56a6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();