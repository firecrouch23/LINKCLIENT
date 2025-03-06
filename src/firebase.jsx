// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCOVvF4QM92BlyWgWLf50omQH8RF9YSzPo",
  authDomain: "link01-498bf.firebaseapp.com",
  projectId: "link01-498bf",
  storageBucket: "link01-498bf.firebasestorage.app",
  messagingSenderId: "857503510484",
  appId: "1:857503510484:web:8ebc1e085ed1d15436b041"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
