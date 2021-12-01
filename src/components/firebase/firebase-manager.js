import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDq-ZdFFKtci8Jv7zo0nVc_3rKC0UULV6A",
    authDomain: "dicon-2021.firebaseapp.com",
    projectId: "dicon-2021",
    storageBucket: "dicon-2021.appspot.com",
    messagingSenderId: "803278416729",
    appId: "1:803278416729:web:0bcb7a84af024cfd843a48",
    measurementId: "G-1KGPTBSW83"
};

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app();
// }
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export {firebase, storage as default};