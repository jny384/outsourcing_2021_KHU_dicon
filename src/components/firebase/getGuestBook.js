// import firebase from "./firebase-manager";
import {firebase} from "./firebase-manager";
const db = firebase.firestore();

export default async function GetGuestBook() {
    const guestRef = db.collection('guestBook');
    const guests = []

    const snapshot = await guestRef.get();
    snapshot.forEach(doc => {
        guests.unshift(doc.data());
    })
    return guests;
}