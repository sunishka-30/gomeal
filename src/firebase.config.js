import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCDIkGerZe8Q7NQX8BzHmn9DcxZcvbyPgQ",
    authDomain: "canteenapp-960cf.firebaseapp.com",
    databaseURL: "https://canteenapp-960cf-default-rtdb.firebaseio.com",
    projectId: "canteenapp-960cf",
    storageBucket: "canteenapp-960cf.appspot.com",
    messagingSenderId: "145699708773",
    appId: "1:145699708773:web:4b975c849e57be4ea88b8c"
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};
