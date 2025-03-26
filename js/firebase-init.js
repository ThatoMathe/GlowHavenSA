import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyA4IYaCqjfAbH8xrSipChJWy4pJJkf2LPA",
    authDomain: "glowhavenza.firebaseapp.com",
    projectId: "glowhavenza",
    storageBucket: "glowhavenza.firebasestorage.app",
    messagingSenderId: "667313723125",
    appId: "1:667313723125:web:5256b355262d2bd2d757bc",
    measurementId: "G-X3NSHDX8MH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);