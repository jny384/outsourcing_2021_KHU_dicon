// import {firebase} from "./firebase-manager";
import {firebase} from './firebase-manager'

const db = firebase.firestore();
// 이거 콜렉션 안에 도큐먼트 존재할 때, 첨부터 끝까지 리턴함
export default async function GetThumbNail(team) {
    const thumbRef = db.collection('admin').doc('thumbNail').collection(`${team}`);
    // console.log(thumbRef)
    const thumbs = []

    const snapshot = await thumbRef.get();
    snapshot.forEach(doc=> {
        thumbs.push(doc.data());
        // console.log('push');
    })
    console.log('thumb : ',thumbs);
    return thumbs;
}