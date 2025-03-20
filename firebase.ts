// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Ualvj-YK0fuZUIny256LiaBqOpCpD2k",
  authDomain: "ai-project-timi.firebaseapp.com",
  projectId: "ai-project-timi",
  storageBucket: "ai-project-timi.firebasestorage.app",
  messagingSenderId: "1005809320177",
  appId: "1:1005809320177:web:610a3aa59ff57dc79b6950",
  measurementId: "G-9R5YDYSZXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the Firebase services
export { app, analytics, auth, db, storage };