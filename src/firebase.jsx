// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA9QxAQuKC2x4oK8RkpcopN1VtCbzg1GEQ",
  authDomain: "link02-5f0d3.firebaseapp.com",
  projectId: "link02-5f0d3",
  storageBucket: "link02-5f0d3.firebasestorage.app",
  messagingSenderId: "677112554972",
  appId: "1:677112554972:web:ce9f03f364be4341565b19"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
