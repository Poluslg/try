// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJrsLIKVb522O6T_1tbnXJoCu7XzcVyiY",
  authDomain: "pmusiclogin.firebaseapp.com",
  projectId: "pmusiclogin",
  storageBucket: "pmusiclogin.appspot.com",
  messagingSenderId: "912119814642",
  appId: "1:912119814642:web:cddaf867576044c5e0336b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;