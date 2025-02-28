// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD8pR1JZTDv8H0Ih-iekF97m_7Iic-Xuls",
  authDomain: "linkproject6-23eea.firebaseapp.com",
  projectId: "linkproject6-23eea",
  storageBucket: "linkproject6-23eea.firebasestorage.app",
  messagingSenderId: "895672331871",
  appId: "1:895672331871:web:86bc9d9810f06ec64535ea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
