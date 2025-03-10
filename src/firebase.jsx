// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC4AjjiW_78fkQjOzbAWzsWs1ZXViGB3Rg",
  authDomain: "linkproject17-c838c.firebaseapp.com",
  projectId: "linkproject17-c838c",
  storageBucket: "linkproject17-c838c.firebasestorage.app",
  messagingSenderId: "879716303729",
  appId: "1:879716303729:web:ada941981ef067eecaecd0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
