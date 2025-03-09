// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCdHe94vdZmUz0qIkXIsI5As6sTFnCYME4",
  authDomain: "linkproject16-f9bc5.firebaseapp.com",
  projectId: "linkproject16-f9bc5",
  storageBucket: "linkproject16-f9bc5.firebasestorage.app",
  messagingSenderId: "576424943116",
  appId: "1:576424943116:web:7c0f254dff10ab08dbd829"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
