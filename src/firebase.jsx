// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBAGTOnVnbINR__FpzjNwz3kuRch0LxoPE",
  authDomain: "link10-87cd7.firebaseapp.com",
  projectId: "link10-87cd7",
  storageBucket: "link10-87cd7.firebasestorage.app",
  messagingSenderId: "601759341020",
  appId: "1:601759341020:web:7ac091bf3ae9710fead719"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
