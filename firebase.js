import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKjXOcCkcxTtygfGE2OHtYeDOU4OItXPc",
  authDomain: "tanvir-shop-b170b.firebaseapp.com",
  projectId: "tanvir-shop-b170b",
  storageBucket: "tanvir-shop-b170b.firebasestorage.app",
  messagingSenderId: "724154708231",
  appId: "1:724154708231:web:9bc3a56a5aabce3b7555a2",
  measurementId: "G-6WXBVZPYWL"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);