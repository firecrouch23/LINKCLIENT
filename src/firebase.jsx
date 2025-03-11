// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBkguBE0ijVcJ1qxdT7h2qfNYqxVXqpRQA",
  authDomain: "linkproject19-170e7.firebaseapp.com",
  projectId: "linkproject19-170e7",
  storageBucket: "linkproject19-170e7.firebasestorage.app",
  messagingSenderId: "234572995758",
  appId: "1:234572995758:web:a173a9094022ee40e9213f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
