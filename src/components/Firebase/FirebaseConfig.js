import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

require('dotenv').config()
const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTHDOMAIN,
   databaseURL: process.env.REACT_APP_DATABASEURL,
   projectId: "klassprojekt-2df35",
   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
   appId: process.env.REACT_APP_APPID,
   measurementId: process.env.REACT_APP_MEASUREMENTID
};

console.log(process.env)

firebase.initializeApp(firebaseConfig);

//firebase.firestore().settings({ timestampsInSnapshots: true });

//export const googleProvider = new firebase.auth.GoogleAuthProvider();
// one more

export const auth = firebase.auth();
export default firebase;