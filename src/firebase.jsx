// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD82QQcLeZ0fSO8k5upNb3N8Xd697F2YeY",
  authDomain: "linkproject14-e71a2.firebaseapp.com",
  projectId: "linkproject14-e71a2",
  storageBucket: "linkproject14-e71a2.firebasestorage.app",
  messagingSenderId: "709290954039",
  appId: "1:709290954039:web:801aaa29496e21e4fa9eb2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
