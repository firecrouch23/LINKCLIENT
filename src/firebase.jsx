// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD6M7n4scox97_6h_0f6qo-4V-O3ZDSzBc",
  authDomain: "linkproject15-3cc50.firebaseapp.com",
  projectId: "linkproject15-3cc50",
  storageBucket: "linkproject15-3cc50.firebasestorage.app",
  messagingSenderId: "412564206346",
  appId: "1:412564206346:web:4da6149698d0527b1640f3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
