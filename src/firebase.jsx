// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAGus_vedMAFVQFVgqAcnVNOO3Oj2DlY1w",
  authDomain: "linkproject3-e7ed2.firebaseapp.com",
  projectId: "linkproject3-e7ed2",
  storageBucket: "linkproject3-e7ed2.firebasestorage.app",
  messagingSenderId: "554070656261",
  appId: "1:554070656261:web:865c75ad44fb038771e36c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
