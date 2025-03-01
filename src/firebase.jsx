// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAz3eMSa5HTEUcL0XaV8wECxjAyliYpKlc",
  authDomain: "linkproject7-71cc4.firebaseapp.com",
  projectId: "linkproject7-71cc4",
  storageBucket: "linkproject7-71cc4.firebasestorage.app",
  messagingSenderId: "189651386185",
  appId: "1:189651386185:web:bbd3cd96e3249951b36498"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
