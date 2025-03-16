// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB7kSggYM9ec6g8zia93qj8JdQ9XDUChP0",
  authDomain: "link05-4132b.firebaseapp.com",
  projectId: "link05-4132b",
  storageBucket: "link05-4132b.firebasestorage.app",
  messagingSenderId: "493728099732",
  appId: "1:493728099732:web:da9c70de4950c68cfbf381"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
