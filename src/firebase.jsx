// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBcAJgop9YREZbw3Oqa-HEj9mKixyQBKX0",
  authDomain: "test01-65d2d.firebaseapp.com",
  projectId: "test01-65d2d",
  storageBucket: "test01-65d2d.firebasestorage.app",
  messagingSenderId: "331719960850",
  appId: "1:331719960850:web:2df893d81afce23282abcb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
