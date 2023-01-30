// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCZBZKB9w23kKV6lAi1vUhijGZ8qCgsNQI',
    authDomain: 'auhthorization.firebaseapp.com',
    projectId: 'auhthorization',
    storageBucket: 'auhthorization.appspot.com',
    messagingSenderId: '51278500747',
    appId: '1:51278500747:web:dfdf5382eace46ed62558e',
    measurementId: 'G-V702835RLP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
