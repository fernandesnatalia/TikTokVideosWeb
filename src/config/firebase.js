import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCjkDnlW0zhIXyKkgKqtZHiuFbbwou4jRA",
  authDomain: "tikotok-9ec76.firebaseapp.com",
  projectId: "tikotok-9ec76",
  storageBucket: "tikotok-9ec76.appspot.com",
  messagingSenderId: "198850269801",
  appId: "1:198850269801:web:43fa9d34c50b069dec88f8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;