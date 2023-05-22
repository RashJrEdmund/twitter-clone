// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJh8q35iVGfNs1t8fYvVo-6pRpwj0-xWw",
  authDomain: "twitter-clone-bee59.firebaseapp.com",
  projectId: "twitter-clone-bee59",
  storageBucket: "twitter-clone-bee59.appspot.com",
  messagingSenderId: "1084395777033",
  appId: "1:1084395777033:web:6bb55005afa39b93069cd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
