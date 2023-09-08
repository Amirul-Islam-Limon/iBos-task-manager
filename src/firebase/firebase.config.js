// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvvAWdeMaHyymOrCEo5QDPCGsSJx802Vc",
  authDomain: "ibos-task-manager.firebaseapp.com",
  projectId: "ibos-task-manager",
  storageBucket: "ibos-task-manager.appspot.com",
  messagingSenderId: "154720457295",
  appId: "1:154720457295:web:9628c76697896a52c9103a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);