// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCbaCDMJxuMeY6ZRB7DvhTc9qQTnAl0eOs",
  authDomain: "link11-fa101.firebaseapp.com",
  projectId: "link11-fa101",
  storageBucket: "link11-fa101.firebasestorage.app",
  messagingSenderId: "1016246837969",
  appId: "1:1016246837969:web:75de9bcbf6cf39d4515bf0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
