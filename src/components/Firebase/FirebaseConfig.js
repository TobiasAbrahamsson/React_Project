import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
   apiKey: "AIzaSyAhB-5dAlLOH_oL6SExd4AeaoaL0gkFpZ0",
   authDomain: "klassprojekt-2df35.firebaseapp.com",
   databaseURL: "https://klassprojekt-2df35.firebaseio.com",
   projectId: "klassprojekt-2df35",
   storageBucket: "klassprojekt-2df35.appspot.com",
   messagingSenderId: "253211654767",
   appId: "1:253211654767:web:c97ad51dcd00312a18eb9a",
   measurementId: "G-W6NVCL5E5F"
};

firebase.initializeApp(firebaseConfig);

//firebase.firestore().settings({ timestampsInSnapshots: true });

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// one more

export const auth = firebase.auth();
export default firebase;