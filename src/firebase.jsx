// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCenuGFjRVVNJc-TgM-RMQEyIEBW9DVAZE",
  authDomain: "link05.firebaseapp.com",
  projectId: "link05",
  storageBucket: "link05.firebasestorage.app",
  messagingSenderId: "504091696551",
  appId: "1:504091696551:web:bb41dfc4b7f433f3d2aa82"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
