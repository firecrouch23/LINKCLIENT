// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDukyCgX91ErAxcJHYJbAGJDLbQ0yhXVx4",
  authDomain: "link09-cf269.firebaseapp.com",
  projectId: "link09-cf269",
  storageBucket: "link09-cf269.firebasestorage.app",
  messagingSenderId: "833719755940",
  appId: "1:833719755940:web:51b965089300a8a69d7231"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
