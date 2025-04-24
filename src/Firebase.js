// src/firebase.js

// 1. Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth }        from 'firebase/auth';

// 2. Firebase configuration directly in code
const firebaseConfig = {
  apiKey:            "AIzaSyA_D0tAhsLljHp8Uj7OFdBt8lNFWD0eLoo",
  authDomain:        "login-45674.firebaseapp.com",
  projectId:         "login-45674",
  storageBucket:     "login-45674.firebasestorage.app",
  messagingSenderId: "1075492177233",
  appId:             "1:1075492177233:web:a50e2f81700c93c3da7f70"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4. Export the Auth instance for use in your app
export const auth = getAuth(app);
