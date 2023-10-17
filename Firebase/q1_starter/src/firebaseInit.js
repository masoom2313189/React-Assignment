// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr3A6rKHlMxu9JxnkUOPU_cd-bOZVE9SQ",
  authDomain: "bloging-app-4b1ca.firebaseapp.com",
  projectId: "bloging-app-4b1ca",
  storageBucket: "bloging-app-4b1ca.appspot.com",
  messagingSenderId: "814352348326",
  appId: "1:814352348326:web:13b1d8e05651b7f710b067",
  measurementId: "G-5PZ3XFGN38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
