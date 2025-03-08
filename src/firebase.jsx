// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBjPHGuybkaa7e6CaUUqhUGNtBpvShltWs",
  authDomain: "link03-cd187.firebaseapp.com",
  projectId: "link03-cd187",
  storageBucket: "link03-cd187.firebasestorage.app",
  messagingSenderId: "111150283663",
  appId: "1:111150283663:web:05a5870fa8d695375b69fa"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
