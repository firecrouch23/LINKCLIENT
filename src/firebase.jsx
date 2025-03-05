// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDraO2Pq4V7cm4BwMJ7EQ3X-481VaOn2jQ",
  authDomain: "link01-49f92.firebaseapp.com",
  projectId: "link01-49f92",
  storageBucket: "link01-49f92.firebasestorage.app",
  messagingSenderId: "452460897040",
  appId: "1:452460897040:web:f95adfa61e6578ee543b95"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
