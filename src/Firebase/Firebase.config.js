// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMvmFsQeLUBMVJubjr0kyIts6K5c00NXQ",
  authDomain: "technology-and-electroni-3c918.firebaseapp.com",
  projectId: "technology-and-electroni-3c918",
  storageBucket: "technology-and-electroni-3c918.appspot.com",
  messagingSenderId: "485357540382",
  appId: "1:485357540382:web:17054eb186b763a003ca0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);