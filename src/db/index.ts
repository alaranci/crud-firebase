import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBRLmenUc4xAXhOAqKRS1w9QEx5kYSnO3U",
  authDomain: "crud-reactjs-typescript-c0ed3.firebaseapp.com",
  projectId: "crud-reactjs-typescript-c0ed3",
  storageBucket: "crud-reactjs-typescript-c0ed3.appspot.com",
  messagingSenderId: "805483515822",
  appId: "1:805483515822:web:623866631a4e8fb2fc823f",
  measurementId: "G-CB4M95M67J",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
