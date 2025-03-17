// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDeZcxJEGFzg6DvpvgzdLX4bw0O4p96y4g",
  authDomain: "link07-1a502.firebaseapp.com",
  projectId: "link07-1a502",
  storageBucket: "link07-1a502.firebasestorage.app",
  messagingSenderId: "502390380592",
  appId: "1:502390380592:web:b4fddb3d19d727f00575f5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
