import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDugnIQcwhBcHHAGnW8m8MJebB86HphdU8",
  authDomain: "miniblog-d52e6.firebaseapp.com",
  projectId: "miniblog-d52e6",
  storageBucket: "miniblog-d52e6.appspot.com",
  messagingSenderId: "837091734707",
  appId: "1:837091734707:web:911eca3c0212abc1d7acc6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

