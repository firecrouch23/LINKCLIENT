// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDSUViVZGzyINjYodV_60CcEt4uT-1DlXA",
  authDomain: "linkproject4-2833b.firebaseapp.com",
  projectId: "linkproject4-2833b",
  storageBucket: "linkproject4-2833b.firebasestorage.app",
  messagingSenderId: "367121973380",
  appId: "1:367121973380:web:0bf2c9dbe941397961c2d1"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
