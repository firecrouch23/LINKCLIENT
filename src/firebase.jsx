// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAPA7UXmgobMrwESvD6JuKxRzcDcMUiCh4",
  authDomain: "link01-ac302.firebaseapp.com",
  projectId: "link01-ac302",
  storageBucket: "link01-ac302.firebasestorage.app",
  messagingSenderId: "109737801026",
  appId: "1:109737801026:web:e85f16ec41929784ae44db"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
