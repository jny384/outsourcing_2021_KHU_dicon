import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDq-ZdFFKtci8Jv7zo0nVc_3rKC0UULV6A",
    authDomain: "dicon-2021.firebaseapp.com",
    projectId: "dicon-2021",
    storageBucket: "dicon-2021.appspot.com",
    messagingSenderId: "803278416729",
    appId: "1:990599483882:web:2e3ef5a3da9342ced66293"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export {firebase, storage as default};