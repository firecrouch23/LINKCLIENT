// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBS8Eu_yZUQhJRcHEW-TWn4oVGtJO9aq74",
  authDomain: "linkproject21-255ca.firebaseapp.com",
  projectId: "linkproject21-255ca",
  storageBucket: "linkproject21-255ca.firebasestorage.app",
  messagingSenderId: "209078216561",
  appId: "1:209078216561:web:5a1b15ec54c63b6b9cf8d0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
