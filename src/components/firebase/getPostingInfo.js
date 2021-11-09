// import firebase from "./firebase-manager";
import {firebase} from "./firebase-manager";
const db = firebase.firestore();

export async function GetPostingInfo(url) {
    // console.log(url);
    const res = await db.collection('writing').doc(url).get().then(async (doc)=> {
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
    // const input = await db.collection('writing').doc(url).get();
    // // console.log(input.data().input)
    // return input.data();
    // // async function getData() {
    //     await db.collection('writing').doc(url).get().then(async (doc) => {
    //         if (doc.exists) {
    //             return doc.data().input;
    //         }
    //     })
    //     return getData;
    // }
}