import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5l1fhTjg43V99MxMA77DkQMybo1c-8XU",
  authDomain: "bubbleapp-dev.firebaseapp.com",
  projectId: "bubbleapp-dev",
  storageBucket: "bubbleapp-dev.appspot.com",
  messagingSenderId: "472959749063",
  appId: "1:472959749063:web:c3ad891db6a561dc7a67e2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
