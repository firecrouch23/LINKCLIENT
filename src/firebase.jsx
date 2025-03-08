// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAgvZw0DZ931kUtaGyX7jRjTcbkASOwUEg",
  authDomain: "link03-25908.firebaseapp.com",
  projectId: "link03-25908",
  storageBucket: "link03-25908.firebasestorage.app",
  messagingSenderId: "561452455527",
  appId: "1:561452455527:web:e32eb40d0b257e1e7866c2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
