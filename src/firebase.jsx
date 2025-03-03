// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDCxH5UC36Wf_0ils4LLJ869lxhU7uSC3s",
  authDomain: "linkproject12-6bf31.firebaseapp.com",
  projectId: "linkproject12-6bf31",
  storageBucket: "linkproject12-6bf31.firebasestorage.app",
  messagingSenderId: "311345275735",
  appId: "1:311345275735:web:5deeb4cff3e9ee60921412"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
