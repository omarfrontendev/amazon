import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBxttUIVEfI79Casoy9kq5aouZe331sGV4",
  authDomain: "clone-fe426.firebaseapp.com",
  projectId: "clone-fe426",
  storageBucket: "clone-fe426.appspot.com",
  messagingSenderId: "186720150963",
  appId: "1:186720150963:web:e5f6b24f106f7ddccad7c6",
  measurementId: "G-PQ2JTLWWKJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
