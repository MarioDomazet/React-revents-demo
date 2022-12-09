import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyAeJmw-_K0q0XayRmz2lIYi7VTg4UgjwcQ",
    authDomain: "revents-course-b2445.firebaseapp.com",
    projectId: "revents-course-b2445",
    storageBucket: "revents-course-b2445.appspot.com",
    messagingSenderId: "691287406450",
    appId: "1:691287406450:web:4f07f9f15dd9d53b2a0feb",
    measurementId: "G-1SCRYF908B"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;