// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD5i-9GjClVv55yNrNRTlsopklXnbeFZvM",
  authDomain: "linkproject-687fa.firebaseapp.com",
  projectId: "linkproject-687fa",
  storageBucket: "linkproject-687fa.firebasestorage.app",
  messagingSenderId: "562283216290",
  appId: "1:562283216290:web:eb31bdfcf920cfa97ac6fb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
