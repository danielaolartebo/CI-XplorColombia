// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiJ4FdEkz82krnL68WLGkAE7wrDQLqYWk",
  authDomain: "xplor-colombia-img.firebaseapp.com",
  projectId: "xplor-colombia-img",
  storageBucket: "xplor-colombia-img.appspot.com",
  messagingSenderId: "160712324827",
  appId: "1:160712324827:web:40ec2c2a6c307f904dbefe",
  measurementId: "G-0QCTVC3YPQ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
