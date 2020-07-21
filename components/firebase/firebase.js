import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyDfx1g7rgKUFTIUFB3pLyGxc8rcs4_8S8w",
    authDomain: "videocall-58706.firebaseapp.com",
    databaseURL: "https://videocall-58706.firebaseio.com",
    projectId: "videocall-58706",
    storageBucket: "videocall-58706.appspot.com",
    messagingSenderId: "748557501019",
    appId: "1:748557501019:web:e8493c36c791c14efbf57e",
    measurementId: "G-E9K92QHRG2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export default firebase;