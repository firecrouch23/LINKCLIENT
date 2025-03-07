// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCk5m5F8zV4bgFvtGyszt93TjsFkKjzDVw",
  authDomain: "link02-64441.firebaseapp.com",
  projectId: "link02-64441",
  storageBucket: "link02-64441.firebasestorage.app",
  messagingSenderId: "701205066962",
  appId: "1:701205066962:web:eb9dca2291f5655bb1e90b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
