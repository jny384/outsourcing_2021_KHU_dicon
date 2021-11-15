import {firebase} from "./firebase-manager";

const db = firebase.firestore();
export default async function PostBanner(url, from, to) {
    await db.collection('banner').doc(`${from}`).set({
        bannerUrl: url,
        from: from,
        to: to
    })
}