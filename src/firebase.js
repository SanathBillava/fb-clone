import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6GNh3HyFHptUr1Ur3WNCoIaj0mItmmEY",
  authDomain: "fb-clone-c66d0.firebaseapp.com",
  databaseURL: "https://fb-clone-c66d0.firebaseio.com",
  projectId: "fb-clone-c66d0",
  storageBucket: "fb-clone-c66d0.appspot.com",
  messagingSenderId: "53585491667",
  appId: "1:53585491667:web:bfb7c3028065fe69b94626",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
