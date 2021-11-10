import {firebase} from "../../firebase/firebase-manager";
const db = firebase.firestore();

export async function MG_getPosting(url) {
    // console.log(url);
    const res = await db.collection('MotionGraphics').doc(url).get().then(async (doc)=> {
        if (doc.exists) {
            // console.log(url);
            const inputData = doc.data().input;
            return inputData;
        } else {
            return null;
        }
    })
    console.log(res)
    return res;
}