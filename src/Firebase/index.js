// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { fireBaseKeys } from "../config/keys/firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfVYrNh_C1lvnYlpavfPVIQZVzx97hhog",
  authDomain: "disneyplus-clone-0001.firebaseapp.com",
  databaseURL:
    "https://disneyplus-clone-0001-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "disneyplus-clone-0001",
  storageBucket: "disneyplus-clone-0001.appspot.com",
  messagingSenderId: "278324683675",
  appId: "1:278324683675:web:6e8a0aca5e93019e0db73e",
  measurementId: "G-7DW90ZQ4CT",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireBaseApp);
const db = getFirestore(fireBaseApp, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
});
const auth = getAuth();
const storage = getStorage(fireBaseApp);
const provider = new GoogleAuthProvider();
export { auth, db, storage, provider, fireBaseApp };
