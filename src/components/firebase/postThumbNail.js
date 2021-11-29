import {firebase} from "./firebase-manager";

const db = firebase.firestore();
export default async function PostThumbNail(team, url, thumbUrl, workTitle, name) {
    await db.collection('admin').doc('thumbNail').collection(`${team}`).doc(`${url}`).set({
        url: `/works/${team}/${url}`,
        thumbUrl:thumbUrl,
        title:workTitle,
        name:name,
    })
}