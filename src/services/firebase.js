import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs6z8me6ETA7tvycKKHR475Z0mPqEPS_k",
  authDomain: "expense-tracker-app-mca1.firebaseapp.com",
  projectId: "expense-tracker-app-mca1",
  storageBucket: "expense-tracker-app-mca1.appspot.com",
  messagingSenderId: "925642860325",
  appId: "1:925642860325:web:1d0f8e934ec11bb88b9ccc",

//   app's DB url
  databaseURL: "https://expense-tracker-app-mca1-default-rtdb.asia-southeast1.firebasedatabase.app/",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// export default firebase;