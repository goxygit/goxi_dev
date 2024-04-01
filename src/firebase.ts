import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import { getDatabase } from "firebase/database";
import 'firebase/firestore'
const apiKey = process.env.REACT_APP_API_KEY
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "goxi-db.firebaseapp.com",
    projectId: "goxi-db",
    storageBucket: "goxi-db.appspot.com",
    messagingSenderId: "392763642896",
    appId: "1:392763642896:web:1683a606526d1ba2fc6695",
    databaseURL: "https://goxi-db-default-rtdb.europe-west1.firebasedatabase.app"
};
//@ts-ignore
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

