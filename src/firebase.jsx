// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBIXINOZpHdYl0oj6H16U6BHPla_W1u58Q",
  authDomain: "link06-2c270.firebaseapp.com",
  projectId: "link06-2c270",
  storageBucket: "link06-2c270.firebasestorage.app",
  messagingSenderId: "805110091331",
  appId: "1:805110091331:web:75a22aeebbe63373258ef6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
