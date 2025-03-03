// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDeQ8QDJOsHbjEFRCuqQS_FoMgz9pHFTKg",
  authDomain: "linkproject11-b4501.firebaseapp.com",
  projectId: "linkproject11-b4501",
  storageBucket: "linkproject11-b4501.firebasestorage.app",
  messagingSenderId: "444327903482",
  appId: "1:444327903482:web:e43698200a4e5fe28dc943"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
