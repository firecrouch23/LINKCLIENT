// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDksoVIBSL7CSgWK-ObKTtCQCpN3RYIdaY",
  authDomain: "linkproject10-a22ae.firebaseapp.com",
  projectId: "linkproject10-a22ae",
  storageBucket: "linkproject10-a22ae.firebasestorage.app",
  messagingSenderId: "267263305962",
  appId: "1:267263305962:web:b4a0b01caa297d7acd0f93"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
