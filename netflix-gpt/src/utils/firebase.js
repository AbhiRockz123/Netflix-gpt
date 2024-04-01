// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7b9Ojfct6TYWgjHjCa9yVx4OQn6FFIpQ",
  authDomain: "netflix-gpt-c21ec.firebaseapp.com",
  projectId: "netflix-gpt-c21ec",
  storageBucket: "netflix-gpt-c21ec.appspot.com",
  messagingSenderId: "295698720441",
  appId: "1:295698720441:web:e44218b320e77b5998dd68",
  measurementId: "G-HMW52L78PF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
