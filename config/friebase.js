import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBPOza1mi43KYbIy8v9VHMwLX7MAEKSFFg",
  authDomain: "stayhost-936c1.firebaseapp.com",
  projectId: "stayhost-936c1",
  storageBucket: "stayhost-936c1.appspot.com",
  messagingSenderId: "61541195995",
  appId: "1:61541195995:web:8e4b83b72bd6506f95acfe"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();