import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDnbLYyRT7ov_oMxdGYxmM8g09nXEPauhA",
  authDomain: "ecomm-ch.firebaseapp.com",
  projectId: "ecomm-ch",
  storageBucket: "ecomm-ch.appspot.com",
  messagingSenderId: "919999005121",
  appId: "1:919999005121:web:c00dc767795ca1fc2aaf40"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)