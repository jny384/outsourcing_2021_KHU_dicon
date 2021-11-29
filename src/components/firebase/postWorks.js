import {firebase} from "./firebase-manager";
const db = firebase.firestore();

export async function postWorks(team, url, input) {
    await db.collection('admin').doc('post').collection(`${team}`).doc(`${url}`).set({
        input
    })
}