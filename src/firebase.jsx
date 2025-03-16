// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAv37O56id70HabW8r93r18oIEBK2BJYcY",
  authDomain: "link04-be4d5.firebaseapp.com",
  projectId: "link04-be4d5",
  storageBucket: "link04-be4d5.firebasestorage.app",
  messagingSenderId: "348578992666",
  appId: "1:348578992666:web:5ab834a0a0e9f56d11f7a3"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
