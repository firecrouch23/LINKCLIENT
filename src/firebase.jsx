// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAQuAgWKUuA3vmH1hJuiVTqSNLWbVyTmcU",
  authDomain: "linkproject13-eaabd.firebaseapp.com",
  projectId: "linkproject13-eaabd",
  storageBucket: "linkproject13-eaabd.firebasestorage.app",
  messagingSenderId: "468354616328",
  appId: "1:468354616328:web:09ab57d31904f2861895bd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
