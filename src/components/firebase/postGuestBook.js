import {firebase} from "./firebase-manager";

const db = firebase.firestore();

export default async function PostGuestBook(writer, content) {
    await db.collection('guestBook').doc(`${writer}`).set({
        content
    })
}