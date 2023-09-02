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
  apiKey: fireBaseKeys.apiKey,
  authDomain: fireBaseKeys.authDomain,
  projectId: fireBaseKeys.projectId,
  storageBucket: fireBaseKeys.storageBucket,
  messagingSenderId: fireBaseKeys.messagingSenderId,
  appId: fireBaseKeys.appId,
  measurementId: fireBaseKeys.measurementId,
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
