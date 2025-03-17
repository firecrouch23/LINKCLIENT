// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBe4PVoD7iBE61XyVwb0e7_vjlxzNdeLr4",
  authDomain: "link08.firebaseapp.com",
  projectId: "link08",
  storageBucket: "link08.firebasestorage.app",
  messagingSenderId: "569317484968",
  appId: "1:569317484968:web:d9bb21c42b57769188159d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
