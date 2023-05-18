// import firebase
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEj5W4lmp7hJb8xSt6cns0jFthHK3Vklo",
  authDomain: "chat-app-303c7.firebaseapp.com",
  projectId: "chat-app-303c7",
  storageBucket: "chat-app-303c7.appspot.com",
  messagingSenderId: "1063796572418",
  appId: "1:1063796572418:web:55552b280e59a79e5e421b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;