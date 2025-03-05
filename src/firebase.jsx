// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA4Qc3gwivdJz7J1ob_bYb-Ebqd0sZaoW8",
  authDomain: "linkproject13-87bac.firebaseapp.com",
  projectId: "linkproject13-87bac",
  storageBucket: "linkproject13-87bac.firebasestorage.app",
  messagingSenderId: "236408923935",
  appId: "1:236408923935:web:fa1406a3fca7f21c6ff22a"
};  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
