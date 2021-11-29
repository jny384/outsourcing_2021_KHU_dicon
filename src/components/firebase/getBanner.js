import {firebase} from "./firebase-manager";

const db = firebase.firestore();
// 이거 콜렉션 안에 도큐먼트 존재할 때, 첨부터 끝까지 리턴함
export default async function GetBanner() {
    const bannerRef = db.collection('banner');
    const banners = []

    const snapshot = await bannerRef.get();
    snapshot.forEach(doc=> {
        banners.push(doc.data());
    })
    console.log('banner : ',banners)
    return banners;
}