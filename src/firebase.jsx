// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBLX4bHq9O0__OKe6sJZ3ugvCtjzp3SPKM",
  authDomain: "linkproject8-26862.firebaseapp.com",
  projectId: "linkproject8-26862",
  storageBucket: "linkproject8-26862.firebasestorage.app",
  messagingSenderId: "299050643109",
  appId: "1:299050643109:web:47219896c6bc814829674c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
