// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBitFVYdKrGlYkd7mxwfV6IiraTsfsivwQ",
  authDomain: "linkproject-2e04a.firebaseapp.com",
  projectId: "linkproject-2e04a",
  storageBucket: "linkproject-2e04a.firebasestorage.app",
  messagingSenderId: "732289081112",
  appId: "1:732289081112:web:eecd4c5d4333637af8c86d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
