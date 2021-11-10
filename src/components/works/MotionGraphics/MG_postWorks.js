import {firebase} from "../../firebase/firebase-manager";

export async function MG_postWorks(url, input) {
    await firebase.firestore().collection('MotionGraphics').doc(`${url}`).set({
        input
    })
}