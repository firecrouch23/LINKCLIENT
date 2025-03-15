// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBrYN_u3d64vRH7mqci48nXnIzrcJrv6II",
  authDomain: "link02-de012.firebaseapp.com",
  projectId: "link02-de012",
  storageBucket: "link02-de012.firebasestorage.app",
  messagingSenderId: "299347914953",
  appId: "1:299347914953:web:3898bf92b935f40ee71d18"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
