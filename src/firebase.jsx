// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBMNky0dZpq-ljUo7eBVQegRSX0GXEQje8",
  authDomain: "linkproject10-46735.firebaseapp.com",
  projectId: "linkproject10-46735",
  storageBucket: "linkproject10-46735.firebasestorage.app",
  messagingSenderId: "805374481921",
  appId: "1:805374481921:web:c8ebf422cb5a9c30b81200"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
