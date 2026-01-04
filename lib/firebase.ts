// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7wgkv2aDZ94xP2rTiq1ROl34R15_KGS4",
  authDomain: "paragondxb-v.firebaseapp.com",
  projectId: "paragondxb-v",
  storageBucket: "paragondxb-v.firebasestorage.app",
  messagingSenderId: "546922438196",
  appId: "1:546922438196:web:1a526b2725fbd1ba347461",
  measurementId: "G-YV68QYN1C9"
};

// Initialize Firebase with error handling
let app: any = null;
let auth: any = null;
let db: any = null;
let storage: any = null;
let analytics: any = null;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);

  // Initialize Analytics (only in browser)
  if (typeof window !== 'undefined') {
    try {
      analytics = getAnalytics(app);
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }
  }
} catch (error) {
  console.error('Firebase initialization failed:', error);
}

export { auth, db, storage, analytics };
export default app;
