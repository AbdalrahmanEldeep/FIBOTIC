import { initializeApp } from "firebase/app";
import {getDatabase, onValue, ref, set, update} from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { API_KEY,APP_ID, AUTH_DOMAIN, DATABASE_URL, MEASUREMENT_ID, MESSAGING_SENDER_ID, PROJECT_ID, STORAGE_BUCKET } from "./static";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
    databaseURL: DATABASE_URL,

  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);




// signInWithEmailAndPassword(auth, "abdo.eslam2022@gmail.com", "1234567")
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// });



// export const Auth = () => {
//   return signInWithEmailAndPassword(auth, "320220091@ejsut.edu.eg", "320220091")
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
// });

// }

export const  writeUserData = (collage,group,sec,ID,QZ,userId, email,mess) =>{
    set(ref(db, `users/${collage}/${group}/${sec}/${ID}/"info"`), {
      email: email,
      id: userId,
      mess:mess,
      degree:null
    });
    set(ref(db, `users/${collage}/${group}/${sec}/${ID}/"quezes"/${QZ}`), {
      email: email,
      id: userId,
      mess:mess,
      degree:null
    });
}

export const  getStudentsData =  (route) => {
  const users = ref(db, route);
  let data;
  onValue(users, (snapshot) => {
      data =   snapshot.val();
  });
}