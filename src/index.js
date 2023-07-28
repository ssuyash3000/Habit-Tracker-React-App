import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
////////////////////////////////////////////////////////////////////////////
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
/////////////////////////////////////////////////////////////////////////////
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/////////////////////////////////////////////////////////////////////////////

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGFhhPW7rqohdUqb9sNAEmBwJKawIb__E",
  authDomain: "habit-tracker-abf8d.firebaseapp.com",
  projectId: "habit-tracker-abf8d",
  storageBucket: "habit-tracker-abf8d.appspot.com",
  messagingSenderId: "926447459459",
  appId: "1:926447459459:web:7d78130ba8439b6c008fb6",
};
/////////////////////////////////////////////////////////////////////////////
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase - Web Namespaced API version
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
