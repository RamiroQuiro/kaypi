// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Wl1-YBMjmPWPM0eMdvMcdShwgR6QqZU",
  authDomain: "kaypi-381316.firebaseapp.com",
  projectId: "kaypi-381316",
  storageBucket: "kaypi-381316.appspot.com",
  messagingSenderId: "1031460609158",
  appId: "1:1031460609158:web:de22398e627b197beb0507",
  measurementId: "G-C87FXWJ7LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)
export {app,db,auth}