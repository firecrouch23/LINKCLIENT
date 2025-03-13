// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBp_FRdEf1-t7l2cW0hMVWuv7nkgph7Rms",
  authDomain: "linkproject22-109ea.firebaseapp.com",
  projectId: "linkproject22-109ea",
  storageBucket: "linkproject22-109ea.firebasestorage.app",
  messagingSenderId: "563868089507",
  appId: "1:563868089507:web:958dbff6db77e452041316"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
