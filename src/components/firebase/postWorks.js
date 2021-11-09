// import firebase from "./firebase-manager";
import {firebase} from "./firebase-manager";

export async function postWorks(url, input) {
    await firebase.firestore().collection('writing').doc(`${url}`).set({
        input
    })
}