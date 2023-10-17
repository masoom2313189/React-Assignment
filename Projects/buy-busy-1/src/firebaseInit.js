// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaNkXAO_4dbRcrPPCzjkMc-HNIh-sBF54",
  authDomain: "buybusy-91d38.firebaseapp.com",
  projectId: "buybusy-91d38",
  storageBucket: "buybusy-91d38.appspot.com",
  messagingSenderId: "574413063541",
  appId: "1:574413063541:web:20a5e900a918f6a7887f3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


