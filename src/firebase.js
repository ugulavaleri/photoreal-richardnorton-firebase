import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; //

const firebaseConfig = {
    apiKey: "AIzaSyBj5K_iUcfy5tjCp6rOy5Dn2DE6j8mgdCs",
    authDomain: "user-posts-79552.firebaseapp.com",
    projectId: "user-posts-79552",
    storageBucket: "user-posts-79552.appspot.com",
    messagingSenderId: "1045105667636",
    appId: "1:1045105667636:web:f33159f167d2efc5d26461",
    measurementId: "G-H068X8J43G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); //
