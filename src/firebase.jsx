// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBRddFQYsaWXoujzG-9-V6xGsSaEUJjA2A",
  authDomain: "linkproject5-b7aeb.firebaseapp.com",
  projectId: "linkproject5-b7aeb",
  storageBucket: "linkproject5-b7aeb.firebasestorage.app",
  messagingSenderId: "514101061791",
  appId: "1:514101061791:web:8ce82a0c4a949da12ddaaa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
