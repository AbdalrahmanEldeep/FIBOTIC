import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, remove, set, child, update} from "firebase/database";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

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
export const db = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);



export const  writeUserData = (collage,group,sec,ID,name,data) =>{
   const updates = {};
   updates[`users/${collage}/${group}/${sec}/${ID}/${name}`] = [data];
   update(ref(db), updates);
}

export const  writeQuezzesData = (name,activity,path,src,timer) =>{
  set(ref(db, `users/CSITS1/Quezzes/${path}`), {
    "name":name,
    "src":src,
    "activity":activity,
    "timer":timer
  });
}




export const removeQuezze = (id='') => {
  remove(ref(db,`users/CSITS1/Quezzes/${id}`))
}


