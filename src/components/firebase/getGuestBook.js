// import firebase from "./firebase-manager";
import {firebase} from "./firebase-manager";
const db = firebase.firestore();

export default function GetGuestBook() {
    const res = db.collection('guestBook').get().then(async (doc)=> {
        if (doc.exists) {
            // console.log(url);
            const inputData = doc.data().input;
            // console.log(inputData)
            return inputData;
        } else {
            return null;
        }
    }).catch((error)=>{
        console.log('error:',error)
    })
    console.log(res)
    return res;
}