// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLZB15rmC1ZcpySPCzetzxaX1uS4imx68",
  authDomain: "app-phonestore.firebaseapp.com",
  projectId: "app-phonestore",
  storageBucket: "app-phonestore.appspot.com",
  messagingSenderId: "851321996743",
  appId: "1:851321996743:web:cfb60dffec6cc42ecb05e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)