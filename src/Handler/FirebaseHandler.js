// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp ({
  apiKey: "AIzaSyCkBHsZONAZSO0FPE5ReQeXvs9v7ghoTa0",
  authDomain: "monitoringbencanalongsor.firebaseapp.com",
  projectId: "monitoringbencanalongsor",
  storageBucket: "monitoringbencanalongsor.appspot.com",
  messagingSenderId: "853693582014",
  appId: "1:853693582014:web:414e71b0527cc57d732cef"

  

});

// Initialize Firebase
  
export const auth = app.auth();
export const database = app.database();
export const storage = app.firestore();
export default app;
// signup router
