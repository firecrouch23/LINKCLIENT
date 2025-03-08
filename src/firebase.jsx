// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAl_6zc8sjoClndkGPL0TZBED7e_1cqObw",
  authDomain: "link04-14053.firebaseapp.com",
  projectId: "link04-14053",
  storageBucket: "link04-14053.firebasestorage.app",
  messagingSenderId: "245036531153",
  appId: "1:245036531153:web:f91da8ee72dbabe516b4f0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
