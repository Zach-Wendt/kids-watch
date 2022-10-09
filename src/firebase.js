// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// BE CAREFUL ON PUTTING INFORMATION IN THE OPEN
const firebaseConfig = {

    apiKey: "AIzaSyCxuy8sYYX8aX71dcLR0mbsbCsjq_6ukPc",
    authDomain: "kid-s-watch.firebaseapp.com",
    projectId: "kid-s-watch",
    storageBucket: "kid-s-watch.appspot.com",
    messagingSenderId: "535314640681",
    appId: "1:535314640681:web:6824e1b608038883971138",
    measurementId: "G-YL697RQKJH"
  
};

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
// appId: process.env.REACT_APP_APP_ID


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
