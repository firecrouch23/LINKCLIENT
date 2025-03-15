// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCPrSCEbBZD-oxu2zdosBW4RpO1jqaVHsk",
  authDomain: "link03-e59a0.firebaseapp.com",
  projectId: "link03-e59a0",
  storageBucket: "link03-e59a0.firebasestorage.app",
  messagingSenderId: "486935581641",
  appId: "1:486935581641:web:49cdeb2bc2e1a07ad54e18"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
