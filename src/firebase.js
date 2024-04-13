import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2hU7kD8_G4UqmlWsdP0VYmvlQnYFa7gM",
  authDomain: "authproject-c9ded.firebaseapp.com",
  projectId: "authproject-c9ded",
  storageBucket: "authproject-c9ded.appspot.com",
  messagingSenderId: "73551526840",
  appId: "1:73551526840:web:1c1d65d1a39998880fad4d",
  measurementId: "G-72EKDV0XE2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
