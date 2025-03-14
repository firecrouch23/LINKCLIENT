// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCokkKeWcamK4yxPklk2PoVYno6rIu04Bw",
  authDomain: "stackphamtay.firebaseapp.com",
  projectId: "stackphamtay",
  storageBucket: "stackphamtay.firebasestorage.app",
  messagingSenderId: "831275868320",
  appId: "1:831275868320:web:c35c16d40fd41ab74c29c5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
