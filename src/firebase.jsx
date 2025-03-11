// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCpLOKwXHI0MLwD7a8QJHgM70_uZyEYYMA",
  authDomain: "linkproject20-c9233.firebaseapp.com",
  projectId: "linkproject20-c9233",
  storageBucket: "linkproject20-c9233.firebasestorage.app",
  messagingSenderId: "260704984889",
  appId: "1:260704984889:web:89337b6cd41421406592e8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
