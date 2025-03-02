// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC6UvX3zioq9m_wDARAwnFlr2l0QrKsy6c",
  authDomain: "linkproject9-84075.firebaseapp.com",
  projectId: "linkproject9-84075",
  storageBucket: "linkproject9-84075.firebasestorage.app",
  messagingSenderId: "989194723604",
  appId: "1:989194723604:web:0c5d72efb8840f429b6201"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
