// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUEwb6e8B1vs-yYSCL3UI6jdcSbYydK5I",
  authDomain: "mini-blog-ef090.firebaseapp.com",
  projectId: "mini-blog-ef090",
  storageBucket: "mini-blog-ef090.appspot.com",
  messagingSenderId: "431699462138",
  appId: "1:431699462138:web:14b0b161ab7cf36a994643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };