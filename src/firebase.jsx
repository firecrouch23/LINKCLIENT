// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBagZdD7c9vGOfGW4e0a7XpNLBngoBWPJE",
  authDomain: "linkproject18-84454.firebaseapp.com",
  projectId: "linkproject18-84454",
  storageBucket: "linkproject18-84454.firebasestorage.app",
  messagingSenderId: "776002247000",
  appId: "1:776002247000:web:e8218dbda78ad69d6ded2d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
