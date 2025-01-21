// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,

  authDomain: "mern-blog-3838c.firebaseapp.com",

  projectId: "mern-blog-3838c",

  storageBucket: "mern-blog-3838c.firebasestorage.app",

  messagingSenderId: "701029316802",

  appId: "1:701029316802:web:eb4f6b45ea02599feca35b",

  measurementId: "G-SNVNFP3VSZ",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
