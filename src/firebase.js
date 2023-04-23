import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getDatabase} from 'firebase/database'

function initializeAppIfNecessary() {

try {

return getApp();

} catch (any) {

const firebaseConfig = {
    apiKey: "AIzaSyD8cWlWtN23rvVsbnAyUM-qLjGPO5IeQg4",
    authDomain: "recentnews-455d9.firebaseapp.com",
    databaseURL: "https://recentnews-455d9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "recentnews-455d9",
    storageBucket: "recentnews-455d9.appspot.com",
    messagingSenderId: "908887478019",
    appId: "1:908887478019:web:943c8888ed9d946e78a336",
    measurementId: "G-FFYMN316Y6"
};
return initializeApp(firebaseConfig);
}
}

const app = initializeAppIfNecessary();
export const dbService = getFirestore();
export const database = getDatabase();
