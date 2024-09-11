// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZYCKIcafpv3pqVXUj3KryFy5ewfxSLbk",
  authDomain: "react-blog-5b7a4.firebaseapp.com",
  projectId: "react-blog-5b7a4",
  storageBucket: "react-blog-5b7a4.appspot.com",
  messagingSenderId: "581653141189",
  appId: "1:581653141189:web:1a59b2e9a9c85b41f7c2ac",
  measurementId: "G-CJ1TSPJJJS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);